const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost/blog")

const Post = mongoose.model("Post", mongoose.Schema({
  title: String,
  body: String,
  date: Date
}))

module.exports ={
  newPost(title, body){
    const post = new Post({
      title,
      body,
      date: Date.now()
    })
    post.save();
  },
  getAllPosts(){
    Post.find((err, posts) => {
      return posts
    })
  },
  getPost(id){
    Post.findById(id, (err, post) => {
      return post
    })
  },
  deletePost(id){
    Post.findByIdAndRemove(id, (err) => {
      return "Success"
    })
  }
}
