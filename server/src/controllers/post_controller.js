const post = require('../model/index').post
module.exports = {
  async create (req, res) {
    if (req.body) {
      const newPost = await post.create(req.body)
      if (newPost) {
        res.status(200).send({
          post: newPost
        })
      }
    }
  },
  async all (req, res) {
    const posts = await post.all()
    res.status(200).send({
      posts: posts
    })
  }
}