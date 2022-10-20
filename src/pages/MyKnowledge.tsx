import { computeHeadingLevel } from '@testing-library/react'
import React from 'react'
import styled from 'styled-components'
import { primary_color } from '../Utility/Colors'
import testingCard from '../img/testingCard.png'
import coding from '../img/coding.png'
import stairs from '../img/Stairs.png'

const MyKnowledge = () => {
    return(
        <Styled_Container>
        <div className="title">
            MY SKILLS
        </div>
        <Styled_Skills>
        <p>HTML</p>
            <div className="container">
            <div className="skills html">70%</div>
            </div>

        <p>CSS</p>
            <div className="container">
            <div className="skills css">55%</div>
            </div>

        <p>JavaScript</p>
            <div className="container">
            <div className="skills js">50%</div>
            </div>

        <p>React</p>
            <div className="container">
            <div className="skills react">50%</div>
            </div>
        <p>Cypress</p>
            <div className="container">
            <div className="skills cypress">60%</div>
            </div>
        </Styled_Skills>
            <img src={stairs}/>
        </Styled_Container>
    )
}

const Styled_Container = styled.div`
  margin: 5rem 0rem;
  width: 100%;
    .title{
    color: white;
    font-size: 3.5rem;
    font-family: 'Arvo', serif;
    padding-left: 25px;
    color: ${primary_color};
    display: flex;
    justify-content: flex-start;
    padding-right: 25px;
  }
  img{
    width: 40%;
  }
`

const Styled_Skills = styled.h2`
    padding: 10px 0px;
    width: 50%;
    p{
        color: white;
    }
    .container {
        width: 100%;
        background-color: #ddd;
        border-radius: 20px;
}

    .skills {
        text-align: right; 
        padding-top: 10px; 
        padding-bottom: 10px; 
        color: white;
    }
    .html{
        background-color: black;
        width: 70%;
    }
    .css{
        background-color: orange;
        width: 55%;
    }
    .js{
        background-color: blue;
        width: 50%;
    }
    .react{
        background-color: purple;
        width: 50%;
    }
    .cypress{
        background: green;
        width: 60%;
    }

`

export default MyKnowledge