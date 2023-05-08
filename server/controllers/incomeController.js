const { Income } = require('../models')

class IncomeController {

    static async fetchIncome(req, res, next) {
        try {
            const findIncome = await Income.findAll()
            if (!findIncome) {
                throw { name: `NotFound` }
            }
            res.status(201).json(findIncome)
        } catch (error) {
            next(error)
        }
    }
}

module.exports = IncomeController