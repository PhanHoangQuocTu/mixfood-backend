const reviewModel = require('../model/review')

class reviewController {
    //post : create review
    async review(req, res) {
        try {
            const { name, phone, title, rating } = req.body;
            const newReview = new reviewModel({ name, phone, title, rating });
            const savedBooking = await newReview.save();
            res.status(200).json(savedBooking);
        } catch (error) {
            console.error('Error review', error);
            res.status(500).json({ error: 'Failed to create review' });
        }
    }
}

module.exports = new reviewController;