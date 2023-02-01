import React from 'react'
import styled from 'styled-components'
import { primary_color } from '../Utility/Colors'
import { secondary_color_tint } from '../Utility/Colors'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaJira } from "react-icons/fa";
import { DiReact, DiJavascript1 } from "react-icons/di";
import { SiAsana, SiCypress, SiSelenium, SiHtml5, SiCss3 } from "react-icons/si";

const MySkills = () => {
  return (
    <Styled_Wrapper>
        <h1>My Skills</h1>
        <div className="skills-container">
    <ul>
          <li>
          <h3>Manual Testing</h3>
            <Styled_ListItem>Jira</Styled_ListItem>
            <Styled_ListItem>Asana</Styled_ListItem>
            <Styled_ListItem>Bugzilla</Styled_ListItem>
          </li>
          <li>
            <h3>Automation Testing</h3>
            <Styled_ListItem>Cypress</Styled_ListItem>
            <Styled_ListItem>Selenium</Styled_ListItem>
            <Styled_ListItem>Katalon</Styled_ListItem>
          </li>
          <li>
            <h3>Web Development</h3>
            <Styled_ListItem>HTML & CSS</Styled_ListItem>
            <Styled_ListItem>JavaScript</Styled_ListItem>
            <Styled_ListItem>React</Styled_ListItem>
          </li>
     </ul>
</div>

    </Styled_Wrapper>
  )
}

const Styled_Wrapper = styled.div`
    margin: 7rem 0rem;
    width: 100%;
    h1{
        color: ${primary_color};
        padding-left: 1rem;
    }
    ul{
    display: flex; 
      h3{
        padding: 2rem 2rem;
      }
    }
    li{
      list-style-type: none;
      width: 100%;
      h3{
            color: ${secondary_color_tint};
            font-style: italic;
        }  
    }`

const Styled_ListItem = styled.li`
    position: relative;
    padding-left: 30px;
    font-size: 1.5rem;
`

const Styled_Icons = styled.div`
  font-size: 45px;
  padding-top: 20px;
  color: turquoise;
  display: flex;

`


export default MySkills