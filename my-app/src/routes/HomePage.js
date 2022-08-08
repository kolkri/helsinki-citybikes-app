import { Flex, Image } from '@aws-amplify/ui-react'
import React from 'react'
import styled from 'styled-components'

const StyledFlex = styled(Flex)`
	width: 100vw;
	height:100vh;
`
const StyledImage = styled(Image)`
	object-fit: cover;
	width: 100%;
	height:100%;
`

const HomePage = () => {
	return (
		<StyledFlex>
			<StyledImage
				src="https://images.unsplash.com/photo-1576432770117-c6eb2ea3c5df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=896&q=80"
				alt="View of urban road with yellow citybikes in a row."
    		/>
		</StyledFlex>
	)
}

export default HomePage