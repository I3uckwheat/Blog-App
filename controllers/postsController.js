var postModel = require("../models/postsModel")

module.exports = {
  index(req, res) {
    res.render('posts/index')
  },
  newPost(req, res) {
    res.render('posts/new')
  },
  getPost(req, res) {
    res.send(req.params) //gets post by id
  },
  createPost(req, res) {
    const post = postModel.createPost(req.body)
    res.redirect(`/posts/${id}`)
  },
  editPost(req, res) {
    res.send("Edit post page  ID: " + req.params.id)
  },
  updatePost(req,res) {
    res.send("UpdatePost controller") // redirect to getPost of ID
  }
}
