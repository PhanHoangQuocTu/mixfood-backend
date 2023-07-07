const express = require('express')
var router = express.Router()

const authController = require('../controllers/authController');

router.get('/sign-up', authController.signUp)

module.exports = router;