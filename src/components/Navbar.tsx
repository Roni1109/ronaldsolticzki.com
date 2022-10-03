import React from "react"
import styled from "styled-components"

// Importing colors
import { primary_color_shadow_2 } from "../Utility/Colors"
import Sidebar from "./Sidebar"

const Navbar = () => {
  return (
    <>
      <Sidebar />

      <Styled_Nav>
        <Styled_Logo href=''>
          <h3>RS</h3>
        </Styled_Logo>

        <Styled_Menu>
          <MenuLink href=''>About</MenuLink>
          <MenuLink href=''>Portfolio</MenuLink>
          <MenuLink href=''>Learning process</MenuLink>
          <MenuLink href=''>Education</MenuLink>
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
  background: #16272c;
  @media screen and (max-width: 768px) {
    display: none;
  }
`

const Styled_Logo = styled.a`
  padding: 0.5rem 0rem;
  color: #ffffff;
  text-decoration: none;
  font-weight: 600;
  font-size: 2rem;

  &:hover {
    color: #e6ae92;
    transition: 0.2s all ease-in;
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
    color: #e6e6e6d2;
  }
`

export default Navbar
