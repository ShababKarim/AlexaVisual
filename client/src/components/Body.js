import React from 'react'
// import { Grid } from '@material-ui/core'
import useResults from '../utils/GetResults'
import Histogram from './Histogram'

const Body = () => {
	const [results] = useResults()
	return <Histogram results={results} />
}

export default Body
