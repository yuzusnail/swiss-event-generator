const express = require('express');
const router = express.Router();

const {signupUser, loginUser} = require('../controller/user-controller');

// LOGIN
router.post('/login', loginUser);

// SIGN UP
router.post('/signup', signupUser);


module.exports = router;