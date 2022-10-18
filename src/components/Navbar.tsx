import React from "react"
import styled from "styled-components"
import img1 from "../img/logo.png"
import {primary_color} from "../Utility/Colors"
import {secondary_color_tint} from "../Utility/Colors"

// Importing colors
import { primary_color_shadow_2 } from "../Utility/Colors"
import Sidebar from "./Sidebar"

const Navbar = () => {
  return (
    <>
      <Sidebar />

      <Styled_Nav>
        <Styled_Logo href='/'>
          <h3>RS</h3>
        </Styled_Logo>
        <Styled_Menu>
          <MenuLink href='/about'>About</MenuLink>
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
  background: #082a35;
  opacity: 0.9;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

const Styled_Logo = styled.a`
  padding: 0.5rem 0rem;
  color: ${primary_color};
  text-decoration: none;
  font-weight: 600;
  font-size: 2rem;
  &:hover {
    color: #fff;
    opacity: 0.4;
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
  font-family: 'Pacifico', cursive;
  cursor: pointer;
  text-decoration: none;
  text-align: center;
  color: ${primary_color};
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
  height: 100%;
  transition: all 200ms ease-in-out;
  &:hover {
    color: ${secondary_color_tint};
  }
`

export default Navbar
