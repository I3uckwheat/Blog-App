var express = require('express');
var post = require("../models/posts")
var router = express.Router();

/*Get Post list. */
router.get('/', function(req, res) {
  res.render('posts/index', {
    //json object with titles of posts
  });
});

router.get('/new', function(req, res){
  res.render('posts/new')
})

router.get('/:id', function(req, res) {
  res.send(req.params.id) //to test
});

router.post('/', function(req, res) {
  const something = post.newPost(req.body.postTitle, req.body.postBody, req.body.postAuthor)
  res.send(something)
  // res.render(`posts/index/${id}`)
});

router.get('/:id/edit', function(req, res) {
  //show page to edit post
});

router.put('/:id', function(req, res) {
  //update post
})


module.exports = router;
