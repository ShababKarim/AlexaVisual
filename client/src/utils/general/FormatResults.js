// data coming in shape of
// { "scoreCount": { "3.00": 7, "0.00": 4 }, "comparativeCount": { "0.75": 2, "0.00": 4 } }
// output
// { "scoreCount": [{ "x": 3.00, "x0": 4.00, "y": 7, "y0": 0}...], "comparativeCount": [...] }

function formatAsChartInput(obj) {
	const formattedObj = {}
	for (const [key] of Object.entries(obj)) {
		const formattedValue = []
		for (const [k, v] of Object.entries(obj[key])) {
			formattedValue.push({
				x: parseFloat(k),
				x0: parseFloat(k) + 1,
				y: v,
				y0: 0
			})
		}
		formattedObj[key] = formattedValue
	}
	return formattedObj
}

export default formatAsChartInput
