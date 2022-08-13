import NavLinks from "./NavLinks"
import React, {useState, useEffect} from "react"
import styled from "styled-components"
import {TiThMenu} from 'react-icons/ti'
import {CgClose} from 'react-icons/cg'


const StyledNav = styled.nav`
	font-family: 'Raleway', sans-serif;
	display: flex;
    flex-direction: column;
    position: absolute;
    top: 80px;
    z-index: 9;
    right: 0;
    background: rgba(244,244,244, 1);
    width: 100%;
    gap: 2rem;
    box-sizing: border-box;
    padding: 30px 0 30px 60px;
    border-top: 2px solid #d5c796;
    box-shadow: 0 1px 3px rgba(15, 15, 15, 0.13);
    transition: all 2s ease-in-out;

	@media (min-width:786px) and (max-width:1024px) {
		gap: 2.5rem;
	  }
	@media (min-width: 1025px) {
		gap: 3rem;
	  }
    @media (min-width:786px) {
        opacity: 0;
    }
`

const MobileNavigation = () => {

    const [open, setOpen] = useState(false)

    const openMenu = <TiThMenu size="45px" className="menulogo" onClick={() => setOpen(!open) }/>
    const closeMenu = <CgClose size="45px" className="menulogo" onClick={() => setOpen(!open) }/>
     
    return(
        <>
            {open ? closeMenu : openMenu}
            {open &&
            <StyledNav>
                 <NavLinks />
            </StyledNav>}
        </>
        
    )
}

export default MobileNavigation