import React from 'react';
import styled, { keyframes } from 'styled-components'
import { Flex} from '@aws-amplify/ui-react'

const StyledFlex = styled(Flex)`
	  justify-content: center;
      align-items: center;
	  box-sizing: border-box;
	  width: 100vw;
      height: 100%;
	  padding: 0.5rem;
	  margin-top: 80px;
	  
	`
const spin = keyframes`
  from {
    transform: rotate(0deg); 
  }
  to {
    transform: rotate(360deg);
  }
`;

const LoaderDiv = styled.div`
    border: 16px solid #000;
    border-radius: 50%;
    border-top: 16px solid #000;
    border-right: 16px solid #d5c796;
    border-bottom: 16px solid #00;
    border-left: 16px solid #d5c796;
    width: 120px;
    height: 120px;
    animation: ${spin} 2s linear infinite;
`

const LoadingItem = () => {
    return(
        <StyledFlex>
            <LoaderDiv></LoaderDiv>
        </StyledFlex>
    )
}

export default LoadingItem
