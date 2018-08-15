const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const {sequelize} = require('./model')

const morgan = require('morgan')
const cors = require('cors')
const corsOption = {
  baseUrl: ['http://localhost:8080'],
  credentials: true,
  optionsSuccessStatus: 200
}

const app = express()
app.use(cors(corsOption))
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(cookieParser())
app.use(morgan("combined"))
require('./router/post_router')(app)
require('./router/auth_router')(app)

sequelize.sync()
  .then(() => {
    app.listen(8000)
  })
