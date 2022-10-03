import React, {useState} from 'react'
import {Styled_Navbar, Logo, Hamburger, Menu, MenuLink} from '../styles/Navbar_style'
// import logo from '../img/12.png'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faSun} from '@fortawesome/free-solid-svg-icons';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
  <Styled_Navbar>
    <Logo href="">
      RS
    </Logo>
    <Hamburger onClick={() => setIsOpen(!isOpen)} >
      <span />
      <span />
      <span />
    </Hamburger>
    <Menu>
      <MenuLink href=''>About</MenuLink>
      <MenuLink href=''>Portfolio</MenuLink>
      <MenuLink href=''>Learning process</MenuLink>
      <MenuLink href=''>Education</MenuLink>
      <FontAwesomeIcon className ='darkMode' icon={faSun} />
    </Menu>
  </Styled_Navbar>
  );
}

// Styled Components


export default Navbar
