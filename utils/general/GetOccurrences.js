const _ = require('lodash')

function countOccurrences(arr, key) {
	// count by 2 decimal places
	return _(arr)
		.map(n => {
			let obj = {}
			obj[key] = n[key].toFixed(2)
			return obj
		})
		.countBy(key)
		.value()
}

module.exports = countOccurrences
