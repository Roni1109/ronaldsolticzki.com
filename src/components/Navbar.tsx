import React from 'react'
import styled from 'styled-components'

 const Navbar = () =>{
   return(
    <ul>
      <li>About</li>
      <li>Portfolio</li>
      <li>Learning Process</li>
    </ul>
  )
}

// Styled Components
const NavbarStyled = styled.nav`
  background: red;
`


export default Navbar