import { View, Image } from '@aws-amplify/ui-react'
import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import styled from 'styled-components'
import Cycling from './assets/Cycling.svg'
import Navigation from './components/Navigation'
import MobileNavigation from './components/MobileNavigation'

const StyledView = styled(View)`
	height: 100vh;
`

const StyledLogo = styled(Image)`
	width: 50px;
	height: 50px;
`
const StyledDiv = styled.div`
	width: 100%;
	height: 80px;
	box-shadow: 0 1px 3px rgba(15, 15, 15, 0.13);
	display:flex;
	align-items: center;
	padding: 10px;
	@media (min-width:786px) and (max-width:1024px) {
		padding: 1rem 1.5rem;
	  }
	@media (min-width: 1025px) {
		padding: 1rem 2rem;
	  }
`


function App() {
	return (
		<StyledView>
			<StyledDiv>
				<Link to="/"><StyledLogo src={Cycling} /></Link>
				<Navigation />
				<MobileNavigation />
			</StyledDiv>
			<Outlet />
		</StyledView>
	)
}

export default App
