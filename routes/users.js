const express = require('express');
const router = express.Router();
const getUsers = require('../controllers/users');

router.post('/signup',getUsers.Signup);
router.post('/login',getUsers.login);

module.exports = router;
