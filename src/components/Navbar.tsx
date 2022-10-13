import React from "react"
import styled from "styled-components"
import img1 from "../img/logo.png"

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
          <MenuLink href='/learning-process'>Learning process</MenuLink>
          <MenuLink href='/education'>Education</MenuLink>
        </Styled_Menu>
      </Styled_Nav>
    </>
  )
}

// Styled Components
const Styled_Nav = styled.div`
  padding: 0.5rem 2rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background: #111010;
  @media screen and (max-width: 768px) {
    display: none;
  }
`

const Styled_Logo = styled.a`
  padding: 0.5rem 0rem;
  color: #ffa600;
  text-decoration: none;
  font-weight: 600;
  font-size: 2rem;
  &:hover {
    color: #e2dfd8;
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
  cursor: pointer;
  text-decoration: none;
  text-align: center;
  color: ${primary_color_shadow_2};
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
  height: 100%;
  transition: all 200ms ease-in-out;
  &:hover {
    color: #ffa600;
  }
`

export default Navbar
