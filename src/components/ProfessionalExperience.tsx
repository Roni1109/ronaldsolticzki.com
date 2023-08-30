import React from 'react'
import styled from "styled-components"
import {
  accent_color,
  primary_color,
  secondary_color_tint,
} from "../Utility/Colors"
import profileIMG from "../img/ProfilePic.png"
import { useState } from 'react';
import ReactDOM from 'react-dom';


const ProfessionalExperience = () => {
  return (
    <Styled_Wrapper>
        <Styled_Title>
            <h1>Professional</h1> 
            <h1>Experience</h1>
        </Styled_Title>
        <ColumnContainer>
      <Bar>
        <h5>QA Manual Tester @Siciliamia</h5>
        <h6 className='duration'>03.2023 - Present </h6>
      </Bar>
      <Bar>
        <h5>QA Manual Tester @Skibikecentre</h5>
        <h6 className='duration'>11.2022 - 07.2023 </h6>
      </Bar>
      <Bar>
        <h5>Website Manager @Skibikecentre</h5>
        <h6 className='duration'>11.2022 - 03.2023 </h6>
      </Bar>
      <Bar>
        <h5>QA Manual Tester @TheSinners</h5>
        <h6 className='duration'>06.2022 - 11.2022 </h6>
      </Bar>
    </ColumnContainer>

    </Styled_Wrapper>
    
  )
}

const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Bar = styled.div `
  width: 50%;
  display: flex;
  justify-content: space-between;
  height: 95px;
  background-color: rgba(5, 8, 11, 0.8); 
  margin: 10px;
  z-index: -1;
  padding-top: 20px;
  h5{
    display: flex;
    justify-content: flex-start;
    width: 65%;
    text-align: center;
    z-index: 2;
    padding-left: 10px;
  }
  .duration{
    display: flex;
    justify-content: flex-end;
    text-align: center;
    padding-right: 10px;
    width: 35%;
  }
  p{
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 100%;
  }
`;

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
    padding-bottom: 20px;
    line-height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    @media screen and (max-width: 768px) {
        padding-right: 25px;
    }
}
`

export default ProfessionalExperience