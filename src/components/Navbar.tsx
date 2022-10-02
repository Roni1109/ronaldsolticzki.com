import React from 'react'
import styled from 'styled-components'

const Navbar = () => {
  return (
    <Styled_Navbar>
    <ul>
      <li><a href="">About</a></li>
      <li><a href="">Portfolio</a></li>
      <li><a href="">Learning Process</a></li>
    </ul>
    </Styled_Navbar>
  )
  
}

// Styled Components
const Styled_Navbar = styled.nav`
`

export default Navbar
