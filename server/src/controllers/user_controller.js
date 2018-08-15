const userModel = require('../model/index').user

module.exports = {
  create (req, res) {
    userModel.create(req.body)
      .then(row => {
        if (row) {
          res.status(200).send({message: true})
        } else {
          res.status(500).send({message: false, err: 'Create user failed'})
        }
      })
  },
  read (req, res) {
    
  },
  update (req, res) {
    
  },
  delete (req, res) {

  }
}