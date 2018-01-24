mongoose = require("mongoose")
mongoose.connect("mongodb://localhost/blog")

  const Post = mongoose.model("Blog", new mongoose.Schema({
    title: String,
    author: String,
    body: String,
    date: {type: Date, default: Date.now}
  }));

module.exports = {
  newPost(title, body, author){
    const post = new Post({
      title,
      author,
      body
    })
    post.save((err, post) => {
      if(err) console.error(err)
    })
    return post.id
  }
}
