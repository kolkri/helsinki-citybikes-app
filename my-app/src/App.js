import { View, Image } from '@aws-amplify/ui-react'
import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import styled from 'styled-components'
import Cycling from './assets/Cycling.svg'

const StyledLogo = styled(Image)`
	width: 50px;
	height: 50px;
`
const StyledDiv = styled.div`
	width: 100%;
	display:flex;
	justify-content: space-between;
	align-items: center;
	padding: 1rem;
	@media (min-width:786px) and (max-width:1024px) {
		padding: 1rem 1.5rem;
	  }
	@media (min-width: 1025px) {
		padding: 1rem 2rem;
	  }
`
const StyledNav = styled.nav`
	font-family: 'Raleway', sans-serif;
	display: flex;
	gap: 2rem;
	@media (min-width:786px) and (max-width:1024px) {
		gap: 2.5rem;
	  }
	@media (min-width: 1025px) {
		gap: 3rem;
	  }
`
const StyledLink = styled(NavLink)`
	  text-decoration: none;
	  }
	  
`

function App() {
	return (
		<View>
			<StyledDiv>
				<StyledLogo src={Cycling} />
				<StyledNav>
					<StyledLink to="/">Home</StyledLink>
					<StyledLink to="journeys">Journeys</StyledLink>
					<StyledLink to="stations">Stations</StyledLink>
				</StyledNav>
			</StyledDiv>
			<Outlet />
		</View>
	)
}

export default App
