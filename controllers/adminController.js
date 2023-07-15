const bookingModel = require('../model/booking')
const accountModel = require('../model/account');
const reviewModel = require('../model/review')

class adminController {
    async getAllAccount(req, res) {
        try {
            const accounts = await accountModel.find();
            res.json(accounts);
        } catch (error) {
            console.error('Error retrieving accounts', error);
            res.status(500).json({ error: 'Server error' });
        }
    }
    async getAllReviews(req, res) {
        try {
            const reviews = await reviewModel.find().sort({ createdAt: -1 });
            res.json(reviews);
        } catch (error) {
            console.error('Error retrieving reviews', error);
            res.status(500).json({ error: 'Server error' });
        }
    }

    async updateReviewStatus(req, res) {
        try {
            const { _id } = req.body;
            const review = await reviewModel.findOne({ _id });
            if (review) {
                review.isShow = !review.isShow;
                await review.save();
                return res.status(200).json({ message: 'Cập nhật review thành công' });
            } else {
                return res.status(404).json({ error: 'Không tìm thấy đánh giá' });
            }
        } catch (error) {
            console.error('Error updating review status', error);
            return res.status(500).json({ error: 'Failed to update review' });
        }
    }


}

module.exports = new adminController;