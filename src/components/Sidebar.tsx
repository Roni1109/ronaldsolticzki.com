import React from "react"
import styled from "styled-components"
import * as FaIcons from "react-icons/fa"

// type Props = {}

const Sidebar = () => {
  return (
    <Styled_Sidebar>
      <FaIcons.FaGripLines />
      <Styled_Menu>
        <h6>HOME</h6>
        <h6>ABOUT</h6>
        <h6>PORTFOLIO</h6>
        <h6>LEARNING PROCESS</h6>
      </Styled_Menu>
    </Styled_Sidebar>
  )
}

const Styled_Sidebar = styled.nav`
  background: red;
  padding: 2rem 1rem;
  height: 100%;
  position: fixed;
  line-height: 100px;

  @media screen and (min-width: 768px) {
    display: none;
  }
`

const Styled_Menu = styled.div`
  background: yellow;
`

export default Sidebar
