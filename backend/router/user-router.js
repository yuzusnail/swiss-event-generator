const express = require('express');
const {signupUser, loginUser} = require('../controller/user-controller');

const router = express.Router();

router.post('/login', loginUser);
router.post('/signup', signupUser);

module.exports = router;