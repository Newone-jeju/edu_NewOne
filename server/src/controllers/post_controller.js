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
    if (posts) {
      res.status(200).send({
        posts: posts
      })
    } else {
      res.status(500).send({
        err: 'no posts'
      })
    }
  },
  async read (req, res) {
    const post = await post.findById(req.body.id)
    if (post) {
      res.status(200).send({
        post: post
      })
    } else {
      res.status(404).send({
        err: 'Bad Request'
      })
    }
  },
  async update (req, res) {
    await post.update(req.body, {
      where: {
        id: req.params.id
      }
    })
  },
  async delete (req, res) {
    await post.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(row => {
        if (row) {
          req.status(200).send({message: 'The post is successfully deleted'})
        } else {
          req.status(500).send({err: 'Could not delete the post'})
        }
      })
  }
}