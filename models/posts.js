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
  createPost(requestParams){
    console.log(requestParams)
    const post = new Post({
      requestParams
    })
    return post
  }
}
