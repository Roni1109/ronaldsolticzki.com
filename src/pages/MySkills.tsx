import { computeHeadingLevel } from '@testing-library/react'
import React from 'react'
import styled from 'styled-components'
import { primary_color } from '../Utility/Colors'
import stairs from '../img/Stairs.png'

const MySkills = () => {
    return(
        <Styled_Wrapper>
            <h1>MY SKILLS</h1>
        <Styled_Skills>
            {/* <Styled_Img src={stairs}/> */}
        </Styled_Skills>
        </Styled_Wrapper>
    )
}

const Styled_Wrapper = styled.div`
  margin: 10rem 0rem;
  width: 100%;
  h1{
    font-family: 'Arvo', serif;
    color: ${primary_color};
  }
    
`

const Styled_Skills = styled.h2`
    padding: 10px 0px;
    width: 100%;

`
const Styled_Img = styled.img`
    width: 50%;
    display: flex;
    float: right;
`

export default MySkills