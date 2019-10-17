import { useState, useEffect } from 'react'
import formatAsChartInput from './general/FormatResults'

const useResults = () => {
	// params to add number of reviews requested?
	const [results, setResults] = useState({})

	useEffect(() => {
		const request = async () => {
			const response = await fetch('http://localhost:5000/query')
			const resultsFromResponse = await response.json()
			const formattedResults = formatAsChartInput(resultsFromResponse)
			setResults(formattedResults)
		}
		request()
	}, [])

	return [results, setResults]
}

export default useResults
