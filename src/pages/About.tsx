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

const About = () => {
  return (
    <Styled_Wrapper>
      <Styled_Title>
        <h1>About Me</h1>
      </Styled_Title>
    </Styled_Wrapper>
  )
}

const Styled_Wrapper = styled.div`
  margin: 4rem 0rem;
  width: 100%;
`

const Styled_Title = styled.div`
  
`

export default About
