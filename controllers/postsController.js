var postModel = require("../models/posts")

module.exports = {
  createPost(req, res) {
    const post = postModel.createPost(req.body)
    console.log(post["_id"])
    res.redirect("/posts")
  }
}
