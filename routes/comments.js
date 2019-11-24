const express = require('express');
const router = express.Router();
const getComments = require('../controllers/comments');
const auth = require('../middleware/auth')

router.post('/',auth,getComments.createComment);
router.get('/',auth,getComments.commentsDisplay);
router.get('/comment/:id',auth,getComments.comentIdDisplay);
router.put('/:id',auth,getComments.updateComment);
router.get('/spec/:id',auth,getComments.personComment)//get a specific person's comments

module.exports = router;