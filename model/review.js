const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const Review = new Schema({
    name: { type: String },
    phone: { type: String },
    title: { type: String },
    rating: { type: String },
})

module.exports = mongoose.model('review', Review);
