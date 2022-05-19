const express = require('express')
const app = express()
const cors = require('cors')
const { router } = require('./routes/index')
require('dotenv').config()

const listener = app.listen(process.env.PORT || 3000, () => {
  console.log('Your app is listening on port ' + listener.address().port)
})

app.use(cors())
app.use(express.static('public'))
app.use(express.urlencoded())
app.use(express.json())

app.use(router)

const logError = (err, req, res, next) => {
  console.error(err)
  next(err)
}

const returnError = (err, req, res, next) => {
  return res.status(err.code || 500).json(err.message)
}

app.use(logError)
app.use(returnError)
