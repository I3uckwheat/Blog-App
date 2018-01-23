var express = require('express');
var post = require("../models/posts")
var router = express.Router();

/*Get Post list. */
router.get('/', function(req, res, next) {
  res.render('posts/index', { title: 'Express' });
});

router.get('/new', function(req, res){
  //show's page for new post
})

router.get('/:id', function(req, res) {
  //get specific post by ID
});

router.post('/', function(req, res) {
  //create new post and open
});

router.get('/:id/edit', function(req, res) {
  //show page to edit post
});

router.put('/:id', function(req, res) {
  //update post
})

module.exports = router;
