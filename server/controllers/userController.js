const { User } = require('../models')
const { comparePassword } = require('../helpers/bcrypt');
const { createToken } = require('../helpers/jwt');


class UserController {

    static async register(req, res, next) {
        try {
            const { email, password} = req.body
            const findUser = await User.findOne({
                where: {
                    email
                }
            })
            console.log(findUser.dataValues.email, "USER <<<<<<<<<<<<<<<<<<<,")
            console.log(email," DATAASE <<<<<<<<<<<<<<<<<<<,")
            if (findUser.dataValues.email == email) {
                throw { name: `SequelizeUniqueConstraintError` }
            }
            const createUser = await User.create({ email, password})
            res.status(201).json(createUser)
        } catch (error) {
            next(error)
        }
    }

    static async login(req, res, next) {
        try {
            const { email, password } = req.body

            if (!email || !password) {
                throw { name: `email/password required` }
            }
            const findUser = await User.findOne({
                where: {
                    email
                }
            })

            if (!findUser) {
                throw { name: `invalid email/password` }
            }

            const passwordValidated = comparePassword(password, findUser.password)

            if (!passwordValidated) {
                throw { name: `invalid email/password` }
            }

            const payload = {
                id: findUser.id
            }

            const access_token = createToken(payload)

            res.status(200).json({ access_token, id: findUser.id })
        } catch (error) {
            next(error)
        }
    }


}

module.exports = UserController