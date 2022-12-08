import React from "react"
import { useRef } from "react"
import styled from "styled-components"
import { accent_color, primary_color, secondary_color_tint } from "../Utility/Colors"
import bg from '../img/BGillustration.png'
import MyKnowledge from "./MySkills"
import About from "./About"
import Portfolio from "./Portfolio"

const Main_Page = () => {
  return (
  <>
    <Styled_Wrapper>

      <Styled_Bio>
        <h3>SOLTICZKI RONALD</h3>
        <h6>QA Tester & Frontend Developer</h6>
        <p>Hi there! 
          <br></br>
          My name is Ronald, I am 22 years old and I am living in Romania. I am an entusiastic man at the <span> beginning of his journey </span>in programming and testing. </p>
          <Styled_Button href="about">
            Read More
          </Styled_Button>
      </Styled_Bio>
        <img src={bg} alt="" />

    </Styled_Wrapper>
    <br />
    <br />
    <About />
    <MyKnowledge />
    <Portfolio />

  </>
  )
}

const Styled_Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  img{
    width: 60%;
    height: 60%;
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
  color: ${primary_color};
  padding-left: 25px;
  display: flex;
  justify-content: flex-start;
  padding-bottom: 30px;

}
h6{
  color: ${secondary_color_tint};
  padding-top: 20px;
  display: flex;
  justify-content: flex-end;
  padding-bottom: 25px;
  font-family: 'Arvo', serif;
  padding-bottom: 50px;
}
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
  &:hover{
    cursor: pointer;
    font-size: 1.25rem;
    width: 21%;
    transition: 0.1s all ease-in-out;
  }
`

export default Main_Page
