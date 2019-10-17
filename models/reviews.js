const mongoose = require('mongoose')

const reviewSchema = mongoose.Schema({
	REVIEW_ID: {
		type: String,
		required: true
	},
	APP_ID: String,
	AUTHOR_ID: String,
	reviewDate: Number,
	title: String,
	body: String,
	rating: Number
})

const Review = mongoose.model('Review', reviewSchema, 'alexa_reviews')

module.exports = Review
