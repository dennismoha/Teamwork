const express = require('express');
const rouuter = express.Router();
const gifComments = require('../controllers/gif_comments');

rouuter.get('/',gifComments.gifCommentsdisplay);
rouuter.post('/',gifComments.addGifComments)

module.exports = rouuter

