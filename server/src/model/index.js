const Sequelize = require('sequelize')
const config = require('../config/config')
const op = Sequelize.op
const db = {}

const sequelize = new Sequelize(
  config.db.BASE,
  config.db.USER,
  config.db.PASS,
  {
    host: config.db.HOST,
    port: config.db.PORT,
    dialect: config.db.DIAL
  },
  {
    sequelizeAlises: op
  }
)

db.sequelize = sequelize
db.Sequelize = Sequelize

db.post = require('./post')(sequelize, Sequelize)

module.exports = db
