const jwt = require('jsonwebtoken')
const SK = 'trafalgar06'

const createToken = (payload) => {
    return jwt.sign(payload, SK)
}

const verifyToken = (token) => {
    return jwt.verify(token, SK)
}

module.exports = { createToken, verifyToken }