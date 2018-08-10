const postHandler = require('../controllers/post_controller')
module.exports = (app) => {
  app.route('/posts')
    .post(postHandler.create) // new post
    .get(postHandler.all)
}