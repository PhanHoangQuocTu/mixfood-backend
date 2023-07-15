const express = require('express')
var router = express.Router()

const adminController = require('../controllers/adminController');

router.get('/getAllAccount', adminController.getAllAccount)
router.get('/getAllReviews', adminController.getAllReviews)
router.put('/updateReview', adminController.updateReviewStatus);

module.exports = router;