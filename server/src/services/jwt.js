const jwt = require('jsonwebtoken')
const Promise = require('bluebird')
const config = require('../config/config')
module.exports = {
  getJwt (payload) {
    return new Promise(function (resolve, reject) {
      jwt.sign(payload, config.jwt.SEC, {expiresIn: 3600 * 24}, function (err, token) {
        if (err) {
          console.log(err)
          reject(err)
        } else {
          resolve(token)
        }
      })
    })
  },
  checkJwt (token) {
    return new Promise (function (resolve, reject) {
      jwt.verify(token, config.jwt.SEC, function (err, decoded) {
        if (err) {
          console.log(err)
          reject(err)
        } else {
          resolve(decoded)
        }
      })
    })
  },
}