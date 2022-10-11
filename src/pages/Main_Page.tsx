import React from "react";
import img1 from '../img/ProfilePic.png'
import styled from "styled-components";
import Cards from '../components/Learning_Cards'

const Main_Page= ()=>{

    return(
        <Styled_Container>
        <Styled_ProfileIMG src={img1} alt="" />
        <Styled_MyDescription className="AboutMe"> My name is Ronald, I am 22 years old and I live in Romania. I am in my second year of university at Management profile. I am addicted to learn programming, this addiction started when I finished the Software Testing course and I started to test a portfolio website for my friend. </Styled_MyDescription>
        <Styled_ReadMoreBTN href="/about">READ MORE</Styled_ReadMoreBTN>
        <Cards />
        </Styled_Container>
    )
}

const Styled_ReadMoreBTN = styled.a`
    text-decoration: none;
    color: #f4f4f4;
    position: absolute;
    background-color: #000;
    border-radius: 50px;
    font-size: 23px;
    padding: 6px;
    margin-left: 680px;
    margin-top: 340px;
    &:hover{
        background: #94B49F;
        color: #e6e6e6d2
    }
`

const Styled_Container = styled.div`
    width: 100%;
    height: 500px;
`

const Styled_ProfileIMG = styled.img`
    border-radius: 50%;
    width: 20%;
    margin: 50px 60px;
    display: inline-block;
    justify-content: center;
    text-align: center;
`

const Styled_MyDescription = styled.h6`
        display: inline-block;
        position: absolute;
        text-align: center;
        margin-left: 350px;
        padding-top: 120px;
        width: 40%;
    
`
export default Main_Page
