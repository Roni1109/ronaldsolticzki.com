import React from 'react'
import { useRef } from "react"
import styled, {keyframes} from "styled-components"
import { accent_color, primary_color, secondary_color_tint } from "../Utility/Colors"
import bg from '../img/BGillustration.png'
import MySkills from "../components/MySkills"
import MyWork from "./ProfessionalExperience"
import VideoBG from "../components/VideoBG"

const MainPageText = () => {
  return (
    <div>
        <Styled_Wrapper>
      <VideoBG />
      <Styled_Bio>
        <h3>SOLTICZKI RONALD</h3>
        <br></br>
        <br></br>
        <FadeIn>
        <h6>Quality Assurance Software Tester & Frontend Developer</h6>
        </FadeIn>
      </Styled_Bio>
    </Styled_Wrapper>
  </div>
  )
}


const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
  `

const FadeIn = styled.div`
  animation: 2s ${fadeIn} ease-out;
  animation-delay: 0.5s;
  animation-fill-mode: forwards;
  opacity: 0;
`;

const Styled_Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  @media screen and (max-width: 768px) {
    width: auto;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
  }
` 

const Styled_Bio = styled.div`
p{
  text-align: center;
  font-size: 1.5rem;
  position:relative;
  z-index: 0;
  padding-bottom: 20px;
  span{
    font-size: 1.6rem;
  }
}
h3{
    color: white;
    font-size: 5rem;
    letter-spacing: 10px;
    display: flex;
    justify-content: center;
    text-align: center;
  @media screen and (max-width: 768px) {
    font-size: 1.7rem;
    line-height: 2rem;
    letter-spacing: 5px;
}
}
h6{
  color: white;
  display: flex;
  justify-content: center;
  text-align: center;
  
  @media screen and (max-width: 768px) {
    font-size: 1rem;
    position: relative;
    display: flex;
    justify-content: center;
    text-align: center;
}
}
`

export default MainPageText