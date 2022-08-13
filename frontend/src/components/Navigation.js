import NavLinks from "./NavLinks"
import React from "react"
import styled from "styled-components"

const StyledNav = styled.nav`
	font-family: 'Raleway', sans-serif;
	display: flex;
	justify-content: center;
	gap: 2rem;
	flex:1;
	
	@media (min-width:786px) and (max-width:1024px) {
		gap: 2.5rem;
	  }
	@media (min-width: 1025px) {
		gap: 3rem;
	  }
    @media (max-width:786px) {
        display: none;
    }
`

const Navigation = () => {
    return(
        <StyledNav>
             <NavLinks />
        </StyledNav>
    )
}

export default Navigation