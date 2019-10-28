// data coming in shape of
// { "scoreCount": { "3.00": 7, "0.00": 4 }, "comparativeCount": { "0.75": 2, "0.00": 4 } }
// output
// { "scoreCount": [{ "x": 3.00, "y": 7}...], "comparativeCount": [...] }

function formatAsChartInput(obj) {
	const formattedObj = {}
	for (const [key] of Object.entries(obj)) {
		const formattedValue = []
		for (const [k, v] of Object.entries(obj[key])) {
			formattedValue.push({
				x: parseFloat(k),
				y: v
			})
		}
		formattedObj[key] = formattedValue
	}
	return formattedObj
}

export default formatAsChartInput
