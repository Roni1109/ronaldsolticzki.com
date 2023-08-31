import React from "react"
import styled from "styled-components"
import {
  accent_color,
  primary_color,
  secondary_color_tint,
} from "../Utility/Colors"

import Projects from "../Data/Projects.json"
import { Link } from "react-router-dom"

const ProfessionalExperience = () => {
  return (
    <Styled_Wrapper>
      <h1>Professional Experience</h1>
      <Styled_Experience_Container>
        {Projects.map((project, i) => {
          return (
            <Styled_Entry key={i}>
              <div>
                <h6>{project.name}</h6>
                <p>{project.duration}</p>
              </div>
              <Styled_Buttons_Container>
                <Link target={"_blank"} to={project?.url}>
                  VISIT SITE
                </Link>
                <Link to={`/project?name=${project?.name}`}>MORE</Link>
              </Styled_Buttons_Container>
            </Styled_Entry>
          )
        })}
      </Styled_Experience_Container>
    </Styled_Wrapper>
  )
}

const Styled_Buttons_Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 1rem;
  a {
    text-decoration: none;
    color: white;
    letter-spacing: 0.1rem;
    padding: 0.2rem 1rem;
    border-radius: 0.5rem;
    background-color: #008080  ;  }
`

const Styled_Experience_Container = styled.div`
  display: grid;
  width: 100%;
  gap: 2rem;
  grid-template-columns: repeat(3, minmax(0, 1fr));
`

const Styled_Entry = styled.div`
  background-color: rgba(5, 8, 11, 0.8);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border-radius: 1rem;
`

const Styled_Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 15rem;
`

export default ProfessionalExperience
