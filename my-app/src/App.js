import { View } from '@aws-amplify/ui-react'
import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function App() {
	return (
		<View>
			<nav
				style={{
					borderBottom: 'solid 1px',
					paddingBottom: '1rem',
				}}
			>
				<Link to="/">Home</Link> | <Link to="journeys">Journeys</Link>
			</nav>
			<Outlet />
		</View>
	)
}

export default App
