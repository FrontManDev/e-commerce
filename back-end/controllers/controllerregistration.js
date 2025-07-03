const prisma = require('../config/db');
const { generateTokens } = require('../utils/generateToken');
const bcrypt = require('bcrypt');

const Registration = async (req, res) => {
  try {
    const { FirstName, LastName, Email, Address, Password, Role } = req.body;
    const Image = req.file ? req.file.filename : null;
    const type = req.query.type;

    if (type === 'signup') {
      if (!FirstName || !LastName || !Email || !Address || !Password || !Image) {
        return res.status(400).json({ message: "All fields are required" });
      }

      const existing = await prisma.users.findUnique({ where: { Email } });
      if (existing) {
        return res.status(400).json({ message: "User already exists" });
      }

      const hashedPassword = await bcrypt.hash(Password, 10);

      const newUser = await prisma.users.create({
        data: {
          FirstName,
          LastName,
          Email,
          Address,
          Password: hashedPassword,
          Image,
          Role,
          Status: 'ONLINE'
        }
      });

      const token = generateTokens(newUser);
      return res.status(200).json({ message: 'User registered successfully', user: newUser, token });

    } else if (type === 'login') {
      const user = await prisma.users.findUnique({ where: { Email } });

      if (!user) {
        return res.status(400).json({ message: 'Incorrect email or password' });
      }

      const isMatch = await bcrypt.compare(Password, user.Password);

      if (!isMatch) {
        return res.status(400).json({ message: 'Incorrect email or password' });
      }

      const token = generateTokens(user);
      return res.status(200).json({ message: 'Login successful', user, token });

    } else {
      return res.status(400).json({ message: 'Invalid type. Use ?type=signup or ?type=login' });
    }

  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error", error: error.message });
  }
};

module.exports = { Registration };
