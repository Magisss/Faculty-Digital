const router = require('express').Router()
const userRouter = require('./users')
const incomeRouter = require('./income')

router.use("/users", userRouter)
router.use("/income", incomeRouter)

module.exports = router