import React from 'react'
import {
	XYPlot,
	XAxis,
	YAxis,
	VerticalGridLines,
	HorizontalGridLines,
	VerticalRectSeries
} from 'react-vis'

const Histogram = props => {
	return (
		<XYPlot
			xDomain={[-1.0, 8.0]}
			yDomain={[0, 7]}
			width={300}
			height={300}
		>
			<VerticalGridLines />
			<HorizontalGridLines />
			<XAxis />
			<YAxis />
			<VerticalRectSeries
				data={props.results['scoreCount']}
				style={{ stroke: '#fff' }}
			/>
		</XYPlot>
	)
}

export default Histogram
