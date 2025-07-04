const prisma = require('../config/db');
const bcrypt = require('bcrypt');
const UpdateProfile = async (req, res) => {
    try {
        const { FirstName, LastName, Email, Address, Password } = req.body;
        const Image = req.file ? req.file.filename : null;
        const { id } = req.params;
        if (!FirstName && !LastName && !Email && !Address && !Password && !Image) {
            return res.status(400).json({ message: "You Just Need Update Atleast One Information" });
        } else {
            if (Password) {
                const hashedPassword = await bcrypt.hash(Password, 10);
                const UpDateUser = await prisma.users.update({
                    where: {
                        id: id
                    },
                    data: {
                        FirstName,
                        LastName,
                        Email,
                        Address,
                        Password: hashedPassword,
                        Image,
                    }
                });
            }
            const UpDateUser = await prisma.users.update({
                where: {
                    id: id
                },
                data: {
                    FirstName,
                    LastName,
                    Email,
                    Address,
                    Image,
                }
            });
            if (!UpDateUser) {
                return res.status(500).json({ message: 'error with updating the user' });
            }
            return res.status(200).json({ message: 'the user is update the information succsfully', User: UpDateUser });
        }
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

module.exports = { UpdateProfile };