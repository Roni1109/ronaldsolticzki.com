import React from "react"
import img1 from "../img/ProfilePic.png"
import styled from "styled-components"
import Cards from "../components/LearningCards"
import bg from "../img/bg.png"

const Main_Page = () => {
  return (
    <Styled_Wrapper>
      <Styled_Background src={bg} alt='' />
      <Styled_ProfileIMG src={img1} alt='' />
      <Styled_MyDescription className='AboutMe'>
        {" "}
        My name is Ronald, I am 22 years old and I live in Romania. I am in my
        second year of university at Management profile. I am addicted to learn
        programming, this addiction started when I finished the Software Testing
        course and I started to test a portfolio website for my friend.{" "}
      </Styled_MyDescription>
      <Styled_ReadMoreBTN href='/about'>FIND MORE ABOUT ME</Styled_ReadMoreBTN>
    </Styled_Wrapper>
  )
}

const Styled_Wrapper = styled.div`
  width: 100%;
  position: relative;
`

const Styled_Background = styled.img`
  width: 100%;

  position: absolute;
`

const Styled_ReadMoreBTN = styled.a`
  text-decoration: none;
  color: #000;
  position: absolute;
  background-color: #ffa600;
  border-radius: 50px;
  font-size: 23px;
  padding: 6px;
  margin-left: 610px;
  margin-top: 340px;
  &:hover {
    background: #fff;
    color: #ffa600;
  }
`

const Styled_ProfileIMG = styled.img`
  border-radius: 50%;
  width: 20%;
  margin: 50px 60px;
  display: inline-block;
  justify-content: center;
  text-align: center;
  border: 3px solid orange;
`

const Styled_MyDescription = styled.h6`
  display: inline-block;
  position: absolute;
  text-align: center;
  margin-left: 350px;
  padding-top: 120px;
  width: 40%;
  color: #a6a6a6;
`
export default Main_Page
