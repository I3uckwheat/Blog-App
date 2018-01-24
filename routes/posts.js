var express = require('express');
const postController = require("../controllers/postsController.js")
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
  res.send(req.params)
});

router.post('/', postController.createPost); // <<<< correct one

router.get('/:id/edit', function(req, res) {
  //show page to edit post
});

router.put('/:id', function(req, res) {
  //updates post
})


module.exports = router;
