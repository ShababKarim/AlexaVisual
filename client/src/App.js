import React from 'react'
import Header from './components/Header'
import Body from './components/Body'
import { Container } from '@material-ui/core'

function App() {
	return (
		<div className='App'>
			<Header />
			<div className='body'>
				<Container maxWidth='md'>
					<Body />
				</Container>
			</div>
		</div>
	)
}

export default App
