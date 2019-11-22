/* eslint-disable no-undef */
// eslint-disable-next-line no-undef
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const db = require('./dbConfig/db');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json())



//const db = require('./dbConfig/db');
const Articles = require('./routes/articles')
const Comments = require('./routes/comments');
const gifroute = require('./routes/gif');
const users   = require('./routes/users')



app.use('/v1/users/auth',users);
app.use('/v1/users/articles',Articles);
app.use('/v1/users/comments',Comments);
app.use('/v1/users/gif',gifroute)



// eslint-disable-next-line no-undef
module.exports = app;