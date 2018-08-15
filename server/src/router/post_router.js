const postHandler = require('../controllers/post_controller')
module.exports = (app) => {
  app.route('/posts')
    .post(postHandler.create) // new post
    .get(postHandler.all) // all posts
  app.route('/post/:id')
    .put(postHandler.update)
    .delete(postHandler.delete)
    .get(postHandler.read)
}