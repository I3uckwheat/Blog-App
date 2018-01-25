var express = require('express');
const postController = require("../controllers/postsController.js")
var router = express.Router();

router.get('/', postController.index)

router.get('/new', postController.newPost)

router.get('/:id', postController.getPost)

router.post('/', postController.createPost)

router.get('/:id/edit', postController.editPost)

router.put('/:id', postController.updatePost)


module.exports = router;
