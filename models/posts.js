mongoose = require("mongoose")
mongoose.connect("mongodb://localhost/blog")
mongoose.Promise = global.Promise;

  const Post = mongoose.model("Blog", new mongoose.Schema({
    title: String,
    author: String,
    body: String,
    date: {type: Date, default: Date.now}
  }));

module.exports = {
  newPost(req, res, next){
    post = new Post ({
      title: req.params.postTitle,
      author: req.params.postAuthor,
      body: req.params.postBody
       })
    post.save()
    req.postId = post["_id"];
    next();
  }
}
