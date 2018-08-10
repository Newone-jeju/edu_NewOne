module.exports = (app) => {
  app.route('/post/:id')
    .post(function (req, res) {
      console.log(req.body)
      res.send({post: req.body})
    })
}