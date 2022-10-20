import React from "react"
import { useRef } from "react"
import styled from "styled-components"
import { accent_color, primary_color, secondary_color_tint } from "../Utility/Colors"
import profileIMG from '../img/ProfilePic.png'
import QAIllustration from "../components/QAIllustration"
import { DownloadSign } from "../components/ReactIcons";

const About = () => {
  return (
    <Styled_Container>
      <h1 className="title">ABOUT</h1>
      <Styled_Description>
      <Styled_Image src={profileIMG} alt="" />
        <p>
          My name is Ronald, I am 22 years old and I am based in Romania. I am <span> a student in second year</span> at Nord University Baia Mare, Management. My passion for IT began early in October 2021, when I started a <span>QA Software Tester</span> course. Right after the course I have started to test a portfolio website for my friend and this was the time when I was drawn into programming. I have started with a <span>HTML & CSS</span> course after which I continued with <span>JavaScript</span> and finally with <span>React</span>. To deepen my knowledge in testing, I recently started a course is automated testing with <span>Cypress</span>.
        <Styled_cvBTN className='cvBtn'> <div className="icon"> <DownloadSign /> </div> Download My CV</Styled_cvBTN>
        </p>
      </Styled_Description>
      {/* <QAIllustration width={300} /> */}
    </Styled_Container>
  )
}

const Styled_Container = styled.div`
  padding-right: 25px;
  margin: 5rem 0rem;
  width: 100%;
  .title{
    color: white;
    color: ${primary_color};
    display: flex;
    justify-content: flex-end;
  }
`

const Styled_Description = styled.div`
   display: flex;
   justify-content: flex-end;
   text-align: center;
   width: 100%;
  p{
    width: 50%;
    color: white;
    justify-content: flex-end;
    padding-right: 10px;
    position: relative;
    z-index: 1;
    .icon{
      align-items: center;
      display: flex;
      font-size: 2rem;
      color: black;

    }
  }
  span{
    font-weight: 400;
    color: ${primary_color};
  }
`

const Styled_Image = styled.img`
    width: 35%;
    position: relative;
    display: flex;
    justify-content: space-between;
    margin: auto;
    border-radius: 5%;
`

const Styled_cvBTN = styled.button`
background-color: white;
border-radius: 20px;
color: ${primary_color};
font-size: 1.5rem;
border: none;
position: absolute;
z-index: 2;
display: flex;
justify-content: center;
padding: 30px;
align-items: center;
margin-left: 300px ;
margin-top: 70px;
&:hover{
  transition: 0.15s all ease-in-out;
  color: white;
  background-color:black;
  .icon{
    color: ${primary_color};
  }
}
`


export default About
