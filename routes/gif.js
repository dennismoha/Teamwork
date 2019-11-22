const express = require('express')
const route = express.Router();
const gifRoute = require('../controllers/gifs')
//const gifRoute = require('../controllers/gif')

route.post('/gifs',gifRoute.imgg);
route.delete('/gifs/:id',gifRoute.deleteGif)

module.exports = route;