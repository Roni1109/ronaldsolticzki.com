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
      <Styled_Description>
        <Styled_Image src={profileIMG} alt='' />
        <div className='desc_container'>
          <h1 className='title'>ABOUT</h1>
          <p>
            My name is Ronald, I am 22 years old and I am based in Romania. I am{" "}
            <span> a student in second year</span> at Nord University Baia Mare,
            Management. My passion for IT began early in October 2021, when I
            started a <span>QA Software Tester</span> course. Right after the
            course I have started to test a portfolio website for my friend and
            this was the time when I was drawn into programming. I have started
            with a <span>HTML & CSS</span> course after which I continued with{" "}
            <span>JavaScript</span> and finally with <span>React</span>. To
            deepen my knowledge in testing, I recently started a course is
            automated testing with <span>Cypress</span>.
          </p>
          <Styled_cvBTN className='cvBtn'>
            <div className='icon'>
              {" "}
              <ReactIcons type='download' size={50} />{" "}
            </div>{" "}
            <h6>DOWNLOAD MY CV</h6>
          </Styled_cvBTN>
        </div>
      </Styled_Description>
    </Styled_Wrapper>
  )
}

const Styled_Wrapper = styled.div`
  margin: 4rem 0rem;
  width: 100%;
`

const Styled_Description = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 90%;
  margin: 0 auto;
  .title{
    font-family: 'Arvo', serif;
  }

  .desc_container {
    display: flex;
    flex-direction: column;
    padding: 0 5rem;
    justify-content: center;
    gap: 1rem;
    .title {
    color: ${primary_color};
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  }
  
  p {
    color: white;
    text-indent: 2cm;
    text-align: center;

    .icon {
      align-items: center;
      display: flex;
      font-size: 2rem;
      color: black;
    }
  }
  span {
    font-weight: 400;
    color: ${primary_color};
  }
`

const Styled_Image = styled.img`
  width: 35%;

  border-radius: 5%;
`

const Styled_cvBTN = styled.button`
  background-color: white;
  align-self: center;
  border-radius: 1rem;
  padding: 0.5rem;
  gap: 1rem;
  color: ${primary_color};
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    transition: 0.15s all ease-in-out;
    color: white;
    background-color: black;
    cursor: pointer;
    .icon {
      color: ${primary_color};
    }
  }
`

export default About
