const JWT = require('jsonwebtoken');

const generateTokens = (user) => {
    const token = JWT.sign(
    { 
      id: user.id,
      role: user.Role
    },
    process.env.JWT_SECRET_KEY,{
        expiresIn : process.env.JWT_EXPIRESIn
    });
    return token
}

module.exports = {generateTokens}