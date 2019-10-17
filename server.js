const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const mongoose = require('mongoose')
const cors = require('cors')

const { mongoString } = require('./config')
const reader = require('./utils/general/ReadCSV')
const Review = require('./models/reviews')
const analyzeSentiment = require('./utils/sentiment/analyze')
const countOccurrences = require('./utils/general/GetOccurrences')

const app = express()

app.use(bodyParser.json())
app.use(morgan(':method :url :status :response-time'))
app.use(cors())

mongoose
	.connect(mongoString, {
		useNewUrlParser: true,
		useUnifiedTopology: true
	})
	.catch(console.log)
const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', () => console.log('db connected!'))

app.get('/', (req, res) => {
	res.json('Hello')
})

app.get('/read', async (req, res) => {
	// prettier-ignore
	const alexaReviews = await reader('./utils/sentiment/alexa_reviews.csv', 0, 3999)
	const validReviews = alexaReviews.slice(0, 24)
	await validReviews.forEach(async review => {
		try {
			// upsert the docs
			// prettier-ignore
			await Review.replaceOne({ REVIEW_ID: review.REVIEW_ID }, review, { upsert: true }, err => {
					if (err) throw err
				}
			)
		} catch (err) {
			console.log(err)
		}
	})
	res.json(validReviews)
})

app.get('/query', async (req, res) => {
	let reviews
	try {
		// prettier-ignore
		reviews = await Review.find({}, { _id: 0, REVIEW_ID: 1, title: 1, body: 1, rating: 1 }).exec()
	} catch (err) {
		console.log('Error: ', err)
	}
	const reviewSentiment = reviews.map(review =>
		analyzeSentiment(review['body'])
	)
	const scoreCount = countOccurrences(reviewSentiment, 'score')
	const comparativeCount = countOccurrences(reviewSentiment, 'comparative')
	res.json({
		scoreCount,
		comparativeCount
	})
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))
