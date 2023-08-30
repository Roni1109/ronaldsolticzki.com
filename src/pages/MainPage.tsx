import React from "react"
import { useRef } from "react"
import styled, { keyframes } from "styled-components"
import {
  accent_color,
  primary_color,
  secondary_color_tint,
} from "../Utility/Colors"
import bg from "../img/BGillustration.png"
import MySkills from "../components/MySkills"
import ProfessionalExperience from "../components/ProfessionalExperience"
import videoBG from "../img/videoBG.mp4"

import ContactForm from "../components/Contact"

// import Portfolio from "./Portfolio"
// import Error404 from "./ErrorPage"
// import MySkills from "./MySkills"

const Main_Page = () => {
  return (
    <Styled_Wrapper>
      <Styled_Hero>
        <video src={videoBG} autoPlay loop muted />

        <h3>SOLTICZKI RONALD</h3>

        <h6>Quality Assurance Software Tester & Frontend Developer</h6>
      </Styled_Hero>
      <MySkills />

      <ProfessionalExperience />

      <ContactForm />
    </Styled_Wrapper>
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

const Styled_Hero = styled.div`
  height: 100vh;
  flex-direction: column;
  gap: 1rem;
  background: cyan;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  video {
    object-fit: cover;
    position: absolute;
    top: 0;
    bottom: 0;
    background-size: cover;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: -1;
    opacity: 0.04;
  }
`

const Styled_Wrapper = styled.div`
  width: 100%;

  display: flex;
  // padding: 10rem 0;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: blue;
  height: max-content;
`

const Styled_Button = styled.a`
  display: flex;
  width: 20%;
  margin: auto;
  padding: 20px;
  text-align: center;
  justify-content: center;
  font-size: 1.2rem;
  color: ${primary_color};
  border: 2px solid ${accent_color};
  text-decoration: none;
  border-radius: 70px;
  &:hover {
    cursor: pointer;
    font-size: 1.25rem;
    width: 21%;
    transition: 0.1s all ease-in-out;
    @media screen and (max-width: 768px) {
      display: flex;
      justify-content: center;
      text-align: center;
      width: 175px;
    }
  }
  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
    text-align: center;
    width: 175px;
  }
`

export default Main_Page
