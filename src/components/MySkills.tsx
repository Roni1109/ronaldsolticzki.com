import React from "react"
import { useRef } from "react"
import styled from "styled-components"
import {
  accent_color,
  primary_color,
  secondary_color_tint,
} from "../Utility/Colors"
import asana from '../img/Icons/asana.png' 
import bugzila from '../img/Icons/bugzila.png' 
import cypress from '../img/Icons/cypress.png' 
import html from '../img/Icons/html.png' 
import javascript from '../img/Icons/javascript.png' 
import jira from '../img/Icons/jira.png' 
import katalon from '../img/Icons/katalon.png' 
import react from '../img/Icons/react.png' 
import selenium from '../img/Icons/selenium.png' 
import css from '../img/Icons/css.png' 
import ReactIcons from "../components/ReactIcons"

const MySkills = () => {
  return (
    <Styled_Wrapper>
      <Styled_Title>
        <h1>Skills </h1>
      </Styled_Title>
      <Styled_Grid>
        <div className="gridContainer">
          <h4>Manual Testing</h4>
          <p>I have an accredited course in Software Testing where I got experience in Jira, Asana, Bugzila</p>
        </div>
        <div className="gridContainer">
          <h4>Automation Testing</h4>
          <p>I have experience with Selenium and now I am learning Cypress using JavaScript</p>
        </div>
        <div className="gridContainer">
          <h4 className="rightTitle">Frontend Developer</h4>
          <p>I have discovered my passion for Frontend Developming last year and since then I am accumulating knowledge</p>
        </div>
      </Styled_Grid>
        <div className="logo-icon">
          <img src={asana} alt="Logo" />
          <img src={bugzila} alt="Logo" />
          <img src={cypress} alt="Logo" />
          <img src={jira} alt="Logo" />
          <img src={katalon} alt="Logo" />
          <img src={selenium} alt="Logo" />
          <img src={html} alt="Logo" />
          <img src={css} alt="Logo" />
          <img src={javascript} alt="Logo" />
          <img src={react} alt="Logo" />
    </div>

    </Styled_Wrapper>
  )
}

const Styled_Wrapper = styled.div`
  margin: 4rem 0rem;
  flex-direction: column;
  display: flex;
  width: 100%;
  gap: 0.5rem;
  .logo-icon{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    img{
    height: 60px;
    width: 60px;
    }
  }
`

const Styled_Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 0.8fr));
    width: 100%;
    gap: 2rem;
    padding-bottom: 150px;
    h4{
      display: flex;
      justify-content: flex-start;
    }
    @media screen and (max-width: 768px) {
        grid-template-columns: 0.5fr;
        padding-left: 30px;
    }
     .gridContainer{
      p{
        padding-top: 20px;
      }
    }
`

const Styled_Title = styled.div`

`

export default MySkills
