import React, { useState } from 'react'
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
import { Link } from "react-router-dom";
import cards from './cardsObject'
import Project from './Project'


const MyWork: React.FC = () => {
  return (
  <>
    <h1>My Work</h1>
    <br />
    <br />
    <GridContainer>
      {cards.map((card) => (
        <GridItem key={card.id}>
          <h5>
            <strong>{card.title}</strong>
          </h5>
          <p>{card.description}</p>
          <br />
          <Styled_ViewWebsite href={card.link} target="_blank">
            View Website
          </Styled_ViewWebsite>
          <Styled_ViewWebsite>
            <MoreLink to={`/project?name=${card.title}`}>More</MoreLink>
          </Styled_ViewWebsite>
        </GridItem>
      ))}
    </GridContainer>
  </>
  )
}

const GridContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 2rem;
  list-style: none;
  height: 20rem;
`;

const GridItem = styled.li`
  background-color: rgba(5, 8, 11); 
  padding: 1rem;
  border-radius: 8px;

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
    margin: 20px 140px;
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

const MoreLink = styled(Link)`
  color: white;
  text-decoration: none;
`;


export default MyWork