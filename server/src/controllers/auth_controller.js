const auth = require('../services/authentication_service')
const postModel = require('../model/index').post
module.exports = {
  login (req, res) {
    auth.login(req.body.id, req.body.password)
      .then(info => {
        res.status(200).send(info)
      })
      .catch(err => {
        res.status(err.code).send({err: err.err})
      })
  },
  checkPostUser (req, res, next) {
    auth.current_user(req.headers.token)
      .then(async user => {
        const post = await postModel.findById(req.params.id)
        if (post.userId == user.id) {
          next()
        } else {
          res.status(401).send({err: 'User information is not correct'})
        }
      })
      .catch(err => {
        res.status(err.code).send({err: err.err})
      })
  },
  currentUser (req, res, next) {

  }
}