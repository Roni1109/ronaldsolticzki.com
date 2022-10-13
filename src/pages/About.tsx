import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import profileIMG from "../img/profileIMG.jpg"
import Icons from "../components/ReactIcons"
import Illustration from "../img/testing 2.svg"

// Brands SVG
import {
  faLinkedin,
  faBitcoin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons"
// Solid SVG
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import QAIllustration from "../components/QAIllustration"

const About = () => {
  return (
    <Styled_Container>
      <Styled_Description>
        <Styled_Photo src={profileIMG} />

        <p>
          Proactive quality assurance professional looking to bring extensive
          knowledge and value to a position of quality assurance. Motivated to
          maintain the level of excellence provided by your company through
          communication skills and meticulous attention to detail.
        </p>
      </Styled_Description>
      {/* <QAIllustration width={300} /> */}
    </Styled_Container>
  )
}

const Styled_Container = styled.div`
  width: 90%;
  margin: 5rem auto;
`

const Styled_Illustration = styled.div`
  width: 20%;
`

const Styled_Photo = styled.img`
  border-radius: 50%;
  width: 50%;
  justify-content: center;
  text-align: center;
  border: 3px solid orange;
`

const Styled_Description = styled.div`
  display: flex;
  width: 70%;

  margin: 0 auto;
  justify-content: space-evenly;
  align-items: center;
  p {
    text-indent: 2cm;
    color: white;
    width: 50%;
  }
`

export default About
