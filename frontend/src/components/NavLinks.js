import React from "react"
import styled from "styled-components"
import { NavLink } from "react-router-dom"

const StyledLink = styled(NavLink)`
	  text-decoration: none;
	  color: #000;
	  border-bottom: 2px solid transparent;
	  transition: all 0.25s ease-in-out;
      width: fit-content;
      font-weight: 500;
	  &.active {
		  border-bottom: 2px solid #d5c796;
	  }
	  &:hover {
		color: #d5c796;
	  }

	  
`

const NavLinks = () => {
    return ( 
        <>
            <StyledLink to="/">Home</StyledLink>
            <StyledLink to="journeys">Journeys</StyledLink>
            <StyledLink to="stations">Stations</StyledLink>
        </>
     );
}
 
export default NavLinks ;