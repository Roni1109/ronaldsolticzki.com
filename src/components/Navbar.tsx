import React, { useState, Fragment } from "react"
import styled, {ThemeProvider} from "styled-components"
import img1 from "../img/logo.png"
import {primary_color} from "../Utility/Colors"
import {secondary_color_tint} from "../Utility/Colors"
import { accent_color } from "../Utility/Colors"
// Importing colors
import { primary_color_shadow_2 } from "../Utility/Colors"
import Sidebar from "./Sidebar"

const Navbar = () => {
  const [theme, setTheme] = useState('light');
  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }
  return (
    <>
      <Sidebar />

      <Styled_Nav>
        <Styled_Logo href='/'>
          <h3>RS</h3>
        </Styled_Logo>
        <Styled_Menu>
          <MenuLink href='/about'>About</MenuLink>
          <MenuLink href='/myskills'>My Skills</MenuLink>
          <MenuLink href='/portfolio'>Portfolio</MenuLink>
          <MenuLink href='/contact'>Contact</MenuLink>
        </Styled_Menu>
      </Styled_Nav>
    </>
  )
}

// Styled Components
const Styled_Nav = styled.div`
  z-index: 2;
  position: sticky;
  padding: 0.5rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  top: 0;
  left: 0;
  right: 0;
  background-color: #363535;
    @media screen and (max-width: 768px) {
     display: none;
    }
`

const Styled_Logo = styled.a`
  padding: 0.5rem 0rem;
  display: flex;
  color: #fff;
  text-decoration: none;
  font-weight: 600;
  font-size: 2rem;
  &:hover {
    color: ${accent_color};
    transition: 0.3ms all ease-in;
  }
`

//  const Hamburger = styled.div`
// display: none;
// flex-direction: column;
// cursor: pointer;
//   span{
//     height: 2px;
//     width: 25px;
//     background: #fff;
//     margin-bottom: 4px;
//     border-radius: 5px;
//   }
//   @media (max-width: 768px){
//     display: flex;

//   }
// `;

const Styled_Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`

const MenuLink = styled.a`
  padding: 0rem 1rem;
  cursor: pointer;
  text-decoration: none;
  text-align: center;
  font-weight: bold;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 1px;
  height: 100%;
  transition: all 200ms ease-in-out;
  &:hover {
    color: ${accent_color};
    transition: ease-in-out 0.25s all;
  }
`

export default Navbar
