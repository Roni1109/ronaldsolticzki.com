import React from "react"
import { useRef } from "react"
import styled from "styled-components"
import {
  accent_color,
  primary_color,
  secondary_color_tint,
} from "../Utility/Colors"
import profileIMG from "../img/ProfilePic.png"

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
          <h4>Frontend Developer</h4>
          <p>I have discovered my passion for Frontend Developming last year and since then I am accumulating knowledge</p>
        </div>
      </Styled_Grid>


    </Styled_Wrapper>
  )
}

const Styled_Wrapper = styled.div`
  margin: 4rem 0rem;
  flex-direction: column;
  display: flex;
  width: 100%;
  gap: 0.5rem;
`

const Styled_Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 0.8fr));
    width: 200%;
    gap: 1rem;
    @media screen and (max-width: 768px) {
        grid-template-columns: 0.5fr;
        align-items: center;
        text-align: center;
    }
     .gridContainer{
      text-align: center;
      align-items: center;
      p{
        padding-top: 20px;
      }
    }
`

const Styled_Title = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 100%;
@media screen and (max-width: 768px) {
    justify-content: center;
}
`

export default MySkills
