const express = require('express')
var router = express.Router()

const reviewController = require('../controllers/reviewController');

router.post('/send-review', reviewController.review)

module.exports = router;