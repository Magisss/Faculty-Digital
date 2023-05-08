const router = require('express').Router()
const IncomeController = require('../controllers/incomeController');

router.get('/', IncomeController.fetchIncome);

module.exports = router