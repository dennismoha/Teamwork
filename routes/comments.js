const express = require('express');
const router = express.Router();
const getComments = require('../controllers/comments');

router.post('/',getComments.createComment);
router.get('/',getComments.commentsDisplay);
router.get('/comment/:id',getComments.comentIdDisplay);
router.put('/:id',getComments.updateComment);

module.exports = router;