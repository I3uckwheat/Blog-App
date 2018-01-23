var express = require('express');
var router = express.Router();
const postModel = require("../models/posts")

router.get('/', function(req, res){
  res.send(postModel.getAllPosts())
})

router.get('/new', function(req, res, next) {
  res.render("newPost");
});

router.post('/new', function(req, res, next) {
  postModel.newPost(req.body.title, req.body.body)
  res.status(201).send("completed");
})


router.put('/:id', function(req, res) {

})

router.delete('/:id', function(req, res) {

})

module.exports = router;
