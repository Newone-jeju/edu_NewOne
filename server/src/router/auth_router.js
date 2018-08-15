const auth = require('../controllers/auth_controller')
module.exports = (app) => {
  app.route('/login')
    .post(auth.login)
}