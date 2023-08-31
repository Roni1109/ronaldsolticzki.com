import React from "react"
import { useRef } from "react"
import styled, { keyframes } from "styled-components"
import {
  accent_color,
  primary_color,
  secondary_color_tint,
} from "../Utility/Colors"
import asana from "../img/Icons/asana.png"
import bugzila from "../img/Icons/bugzila.png"
import cypress from "../img/Icons/cypress.png"
import html from "../img/Icons/html.png"
import javascript from "../img/Icons/javascript.png"
import jira from "../img/Icons/jira.png"
import katalon from "../img/Icons/katalon.png"
import react from "../img/Icons/react.png"
import selenium from "../img/Icons/selenium.png"
import css from "../img/Icons/css.png"
import ReactIcons from "../components/ReactIcons"

import AsanaLogoAnimated from "./AnimatedAsana"
import AnimatedAsana from "./AnimatedAsana"

const MySkills = () => {
  return (
    <Styled_Wrapper>
      <h1>Skills </h1>
      <Styled_Grid>
        <h4>Manual Testing</h4>

        <h4>Automation Testing</h4>

        <h4>Frontend Developer</h4>

        <h4>Frontend Developer</h4>

        <h4>Frontend Developer</h4>


      </Styled_Grid>

      <Styled_Grid>
        <img
          src={
            "https://i.imgur.com/PPEUXNm.png"
          }
          alt='Logo'
        />
        <img src={
          "https://static-00.iconduck.com/assets.00/cypress-icon-512x511-29zvfts6.png"
          } 
          alt='Logo' />
        <img src={
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Buggie.svg/1200px-Buggie.svg.png"
          } 
          alt='Logo' />
        <img
          src={
            "https://seeklogo.com/images/S/selenium-logo-A1B53CEFB0-seeklogo.com.png"
          }
          alt='Logo'
        />
        <img src={
          "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Devicon-html5-plain.svg/2048px-Devicon-html5-plain.svg.png"
          } 
          alt='Logo' />
        <img src={
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png"
          } 
          alt='Logo' />
        <img
          src={
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/640px-Unofficial_JavaScript_logo_2.svg.png"
          }
          alt='Logo'
        />
        <img src={
          "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
        }
          alt='Logo' />
      </Styled_Grid>
    </Styled_Wrapper>
  )
}

const Styled_Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;
  align-items: center;
  justify-content: center;
  margin-bottom: 15rem;
`

const Styled_Grid = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;

  h4 {
    width: 25%;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  img {
    cursor: pointer;
    width: 3rem;
    height: 3rem;
    transition: transform 0.2s ease-in-out;
    &:hover {
      transform: scale(1.1);
    }
  }
`

export default MySkills
