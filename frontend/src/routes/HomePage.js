import { Flex, Image } from '@aws-amplify/ui-react'
import React from 'react'
import styled from 'styled-components'

const StyledFlex = styled(Flex)`
	width: 100vw;
	height:100%;
	position: relative;
`
const StyledImage = styled(Image)`
	object-fit: cover;
	object-position: left;
	width: 100%;
	@media (min-width:786px) {
		width: 50%;
	}
`
const TextContainer = styled.div`
	position: absolute;
	left: 10%;
	top: 10%;
	display: flex;
	flex-direction: column;
	background: rgba(255,255,255, 0.9);
	font-family: 'Raleway',sans-serif;
	box-shadow: rgb(0 0 0 / 25%) 0px 4px 4px;
    border-radius: 1rem;
	width: 80vw;
	max-width: 325px;

	@media (min-width:786px) {
		position: static;
		width: 50%;
		height:100%;
		box-shadow: none;
    	border-radius: none;
		background: transparent;
		display: flex;
		justify-content: center;
		width: 45vw;
		max-width: 600px;
	}

`
const Title = styled.h3`
	font-weight: 900;
	padding:  1rem;
	margin: 0;
`

const SubTitle = styled.p`
	font-weight: 400;
	padding:  0 1rem 1rem 1rem;
	margin: 0;
	line-height: 1.6;
`

const HomePage = () => {
	return (
		<StyledFlex>
			<StyledImage
				src="https://images.unsplash.com/photo-1576432770117-c6eb2ea3c5df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=896&q=80"
				alt="View of urban road with yellow citybikes in a row."
    		/>
			<TextContainer>
				<Title>Helsinki city bike app</Title>
				<SubTitle>This site displays data from journeys made with 
					city bikes in the Helsinki Capital area during May 2021, 
					and is made as a pre-assignment for Solita Dev Academy Finland fall 2022. </SubTitle>
			</TextContainer>
			
		</StyledFlex>
	)
}

export default HomePage