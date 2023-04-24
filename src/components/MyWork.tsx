import React from 'react'
import styled from 'styled-components'
import { accent_color } from "../Utility/Colors"
import asana from '../img/Icons/asana.png' 
import bugzila from '../img/Icons/bugzila.png' 
import cypress from '../img/Icons/cypress.png' 
import jira from '../img/Icons/jira.png' 
import katalon from '../img/Icons/katalon.png' 
import selenium from '../img/Icons/selenium.png' 
import trello from '../img/trello.png'
import postman from '../img/postman.png'

const MyWork = () => {
  return (
<>
    <h1>My Work</h1>
    <GridContainer>
        <GridItem>
            <h5><strong>Swag Labs</strong></h5>
            <p>This was my first website that I`ve tested, during the QA Tester Course</p>
            <br />
            <Styled_ViewWebsite href='https://www.saucedemo.com/' target="_blank">View Website</Styled_ViewWebsite>
            <Styled_ViewWebsite className='button2' >Tests</Styled_ViewWebsite>
        </GridItem>
        <GridItem>
            <h5><strong>The Sinners</strong></h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, quia.</p>
            <br />
            <Styled_ViewWebsite href='https://thesinners.netlify.app/' target="_blank">View Website</Styled_ViewWebsite>
            <Styled_ViewWebsite className='button2' >Tests</Styled_ViewWebsite>
        </GridItem>
        <GridItem>
            <h5><strong>Ski&Bike Centre</strong></h5>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat, sed?</p>
            <br />
            <Styled_ViewWebsite href='https://bike-ski.ro/' target="_blank">View Website</Styled_ViewWebsite>
            <Styled_ViewWebsite className='button2' >Tests</Styled_ViewWebsite>
        </GridItem>
        <GridItem>
            <h5><strong>Ronald Solticzki</strong></h5>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat, sed?</p>
            <br />
            <Styled_ViewWebsite href='http://www.ronaldsolticzki.com/' target="_blank">View Website</Styled_ViewWebsite>
            <Styled_ViewWebsite className='button2' >Tests</Styled_ViewWebsite>
        </GridItem>
        <GridItem>
            <h5><strong>Gelu Horotan</strong></h5>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat, sed?</p>
            <br />
            <Styled_ViewWebsite href='https://geluhorotan.com/' target="_blank">View Website</Styled_ViewWebsite>
            <Styled_ViewWebsite className='button2' >Tests</Styled_ViewWebsite>
        </GridItem>
        <GridItem>
            <h5><strong>The Blue House</strong></h5>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat, sed?</p>
            <br />
            <Styled_ViewWebsite href='https://bluehouse.is/' target="_blank">View Website</Styled_ViewWebsite>
            <Styled_ViewWebsite className='button2' >Tests</Styled_ViewWebsite>
        </GridItem>

    </GridContainer>
</>
  )
}

const GridContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 1rem;
  list-style: none;
  height: 20rem;
`;

const GridItem = styled.li`
  background-color: rgba(5, 8, 11); 
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  h5{
    font-size: 2rem;
    text-align: center;
    align-items: center;
    letter-spacing: 2px;
    padding-bottom: 20px;
}
p{
    text-align: center;
    align-items: center;
}
`;

const Styled_ViewWebsite = styled.a`
    cursor: pointer;
    color: white;
    margin: 20px 70px;
    padding: 7px;
    font-size: 1.1rem;
    background-color: #333;
    border-radius: 3%;
    text-decoration: none;
    border: none;
    &:hover{
        opacity: 0.85;
    }
`

export default MyWork