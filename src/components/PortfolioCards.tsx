import React from 'react'
import styled from 'styled-components'
import { primary_color } from '../Utility/Colors'
import ProjIllustration from '../img/ProjIllustration.png'

const PortfolioCards = () => {
  return (
    <Styled_ProjectWrapper>

    <Styled_ProjectContainer>
    <h2>My Projects</h2>
        <a href="BikeSki">Bike Ski</a>
        <a href="TheSinners">TheSinners</a>
        <a href="SwagLabs">SwagLabs</a>
    </Styled_ProjectContainer>

    <Styled_ProjectCards>
        <h2>Bike Ski</h2>
        <h6>1.11.22 - 1.3.23</h6>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem hic cum perspiciatis sequi est beatae maxime dicta deleniti quibusdam similique!</p>
    </Styled_ProjectCards>
    </Styled_ProjectWrapper>

    
  )
}
const Styled_ProjectWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

const Styled_ProjectContainer = styled.a`
    a{
    font-size: 2rem;
    text-decoration: none;
    color: white;
    padding: 20px;
    display: flex;
    justify-content: flex-start;
    background-color: red;
}
    h2{
        color: ${primary_color};
        font-size: 3rem;
    }
    `

const Styled_ProjectCards = styled.div`
    background-color: blue;
    display: flex;
    justify-content: flex-end;
    p{
        width: 50%;
    }
`

export default PortfolioCards