import React from "react"
import styled from "styled-components"
import * as FaIcons from "react-icons/fa"

// type Props = {}

const Sidebar = () => {
  return (
    <Styled_Sidebar>
      <FaIcons.FaGripLines />
      <Styled_Menu>
        <h6>Home</h6>
        <h6>About</h6>
        <h6>Ronald</h6>
        <h6>Contact</h6>
      </Styled_Menu>
    </Styled_Sidebar>
  )
}

const Styled_Sidebar = styled.nav`
  background: red;
  padding: 2rem 1rem;
  height: 100%;
  position: fixed;

  @media screen and (min-width: 768px) {
    display: none;
  }
`

const Styled_Menu = styled.div`
  background: yellow;
`

export default Sidebar
