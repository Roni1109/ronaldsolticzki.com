import { computeHeadingLevel } from '@testing-library/react'
import React from 'react'
import styled from 'styled-components'
import { primary_color } from '../Utility/Colors'
import SkillBar from '../components/SkillBar'

const MySkills = () => {
    return(
      <>
      <Styled_Title>My Skills</Styled_Title>
      <div className="cardContainer">
        <div className="js">JavaScript</div>
        <div className="selenium">Selenium</div>
        <div className="js">JavaScript</div>
      </div>
      </>

    )
}

const Styled_Title = styled.h2`
  font-size: 3rem;
  color: ${primary_color};
`
export default MySkills