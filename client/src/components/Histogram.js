import React from 'react'
import { Scatter } from 'react-chartjs-2'

const Histogram = props => {
	const data = {
		labels: ['Scatter'],
		datasets: [
			{
				label: 'Score Count',
				fill: true,
				backgroundColor: 'rgba(75,192,192,0.4)',
				pointBorderColor: 'rgba(75,192,192,1)',
				pointBackgroundColor: '#fff',
				pointBorderWidth: 1,
				pointHoverRadius: 5,
				pointHoverBackgroundColor: 'rgba(75,192,192,1)',
				pointHoverBorderColor: 'rgba(220,220,220,1)',
				pointHoverBorderWidth: 2,
				pointRadius: 3,
				pointHitRadius: 10,
				data: props.results.scoreCount
			},
			{
				label: 'Comparative Count',
				fill: true,
				backgroundColor: 'rgba(98,195,228,0.4)',
				pointBorderColor: 'rgba(98,195,228,1)',
				pointBackgroundColor: '#fff',
				pointBorderWidth: 1,
				pointHoverRadius: 5,
				pointHoverBackgroundColor: 'rgba(98,195,228,1)',
				pointHoverBorderColor: 'rgba(220,220,220,1)',
				pointHoverBorderWidth: 2,
				pointRadius: 3,
				pointHitRadius: 10,
				data: props.results.comparativeCount
			}
		]
	}
	return <Scatter data={data} />
}

export default Histogram
