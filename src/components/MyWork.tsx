import React from 'react'
import styled from "styled-components"
import {
  accent_color,
  primary_color,
  secondary_color_tint,
} from "../Utility/Colors"
import profileIMG from "../img/ProfilePic.png"

const MyWork = () => {
  return (
    <Styled_Wrapper>
        <Styled_Title>
            <h1>My Work</h1>
        </Styled_Title>
        <Styled_Description>
            <Left_Description>
            <h4>My Experience as a QA Tester:</h4>
            <p>I collaborated on 5 projects where I experienced both teamwork and individual work </p>
            </Left_Description>
            <Right_Description>
            <h4>My Experience as a Frontend Developer:</h4>
            <p>This is my first website, the start of my journey</p>
            </Right_Description>
        </Styled_Description>

    </Styled_Wrapper>
    
  )
}

const Styled_Wrapper = styled.div`
    @media screen and (max-width: 768px) {
        padding-left: 30px;
        grid-template-columns: 0.5fr;
        align-items: center;
        text-align: center;
    }
`

const Styled_Title = styled.div`
h1{
    line-height: 70px;
    @media screen and (max-width: 768px) {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
    }
}
`
const Left_Description = styled.div`
    width: 50%;
    @media screen and (max-width: 768px) {
        align-items: center;
        text-align: center;
        width: 200%;
    }
    h4{
        @media screen and (max-width: 768px) {
            width: auto;
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
            padding-bottom: 20px;
        }
    }
    p{
        @media screen and (max-width: 768px) {
            line-height: 1,2rem;
            display: flex;
            width: auto;
        }
    }
`
const Right_Description = styled.div`
    width: 50%;
        @media screen and (max-width: 768px) {
        display: none;
    }
`

const Styled_Description = styled.div`
display: flex;
padding-top: 2rem;
`
export default MyWork