import { computeHeadingLevel } from '@testing-library/react'
import React from 'react'
import styled from 'styled-components'
import { primary_color } from '../Utility/Colors'
import SkillBar from '../components/SkillBar'

const MySkills = () => {
    return(
        <Styled_Wrapper>
            <h1>MY SKILLS</h1>
            <br />
            <br />
            <br />
        <Styled_Skills>
          < SkillBar/>
        </Styled_Skills>
        </Styled_Wrapper>
    )
}

const Styled_Wrapper = styled.div`
  margin: 10rem 0rem;
  width: 100%;
  height: auto;
  h1{
    font-family: 'Arvo', serif;
    color: ${primary_color};
    padding-bottom: 10px;
  }
    
`

const Styled_Skills = styled.h2`
    
`

export default MySkills