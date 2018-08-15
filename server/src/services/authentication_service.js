const jwtService = require('./jwt')
const Promise = require('bluebird')
const config = require('../config/config')
const db = require('../model/index')

module.exports = {
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
    return new Promise(function (resolve, reject) {
      db.user.findOne({
        where: {
          userId: id
        }
      })
        .then(user => {
          if (user) {
            if (user.password == password) {
              const payload = {id: user.id, name: user.name}
              jwtService.getJwt(payload)
                .then(token => {
                  console.log(payload)
                  resolve({token: token, name: payload.name})
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