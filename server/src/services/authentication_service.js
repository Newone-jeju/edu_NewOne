const jwt = require('jsonwebtoken')
const Promise = require('bluebird')
const config = require('../config/config')
const db = require('../model/index')

module.exports = {
  getJwt (payload) {
    return new Promise(function (resolve, reject) {
      jwt.sign(payload, config.jwt.SEC, {exp: 3600 * 24}, function (err, token) {
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
  current_user (token) {
    return new Promise (function (resolve, reject) {
      checkJwt(token)
        .then(decoded => {
          db.user.findOne(decoded.id)
            .then(user => {
              if (user) {
                resolve(user)
              } else {
                reject({err: 'User information is not correct', code: 401})
              }
            })
        })
    })
  },
  login (id, password) {
    return new Promise (function (resolve, reject) {
      db.user.findOne(id)
        .then(user => {
          if (user) {
            if (user.password == password) {
              const payload = {id: user.id, name: user.name}
              getJwt(payload)
                .then(token => {
                  resolve(token)
                })
            } else {
              reject({err: 'Password is not correct', code: 401})
            }
          } else {
            reject({err: 'ID is not correct', code: 401})
          }
        })
    })
  }
}