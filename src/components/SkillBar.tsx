import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';  
import styled from 'styled-components';  
import React from 'react'
import VisibilitySensor from "react-visibility-sensor";
import { render } from 'react-dom'

const percentage = 77;

const SkillBar = () => {
  return (
    <CircularContainer>
    <div className="firstRow">
        <CircularProgressbar  value={70} text={`HTML & CSS`} />
        <CircularProgressbar  value={55} text={`JavaScript`} />
        <CircularProgressbar  value={50} text={`React`} />
        <CircularProgressbar  value={85} text={`Jira`} />
    </div>
    <div className="secondRow">
        <CircularProgressbar  value={65} text={`Postman`} />
        <CircularProgressbar  value={85} text={`Asana`} />
        <CircularProgressbar  value={65} text={`Selenium`} />
        <CircularProgressbar  value={55} text={`Cypres`} />
    </div>
    </CircularContainer>
  )
}

const CircularContainer = styled.div`
.firstRow{
    display: grid;
    grid-template-columns: 250px 250px 250px 250px;
    justify-content: space-evenly;
}
.secondRow{
    padding-top: 50px;
    display: grid;
    grid-template-columns: 250px 250px 250px 250px;
    justify-content: space-evenly;
    
}

`

export default SkillBar