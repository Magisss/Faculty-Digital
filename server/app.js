if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
  }
  
const express = require('express')
const errorHandler = require('./middlewares/errorHandler')
const app = express()
const router = require('./routes')
const cors = require('cors')
const PORT = process.env.PORT || 3000

app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use("/", router)
app.use(errorHandler)


app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})

// module.exports =  app 