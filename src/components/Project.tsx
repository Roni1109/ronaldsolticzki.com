import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router';
import queryString from 'query-string';
import { useSearchParams } from 'react-router-dom';
import Projects from "../Data/Projects.json"
import styled from 'styled-components';

interface Project {
  id: number;
  name: string;
}
type CurrentProject ={
  name: string;
  duration: string;
  description: string;
  programs?: string;
  image?: string
}

const Project = () => {
  const [currentProject, setCurrentProject] = useState<CurrentProject | undefined>();
  const [searchParams, setSearchParams] = useSearchParams();

  const getProject = () =>{
  const projectName = searchParams.get("name")

  const filteredProject = Projects.filter((project)=>project.name === projectName) 
  setCurrentProject(filteredProject[0])
  }

  useEffect(()=>{
    getProject()
    // If it`s not working add: searchParams.get("name") as a dependency
  }, [])
  

  return <Styled_Container>
    {currentProject && 
    <div>
      <h2>{currentProject.name}</h2>
      <h6>{currentProject.duration}</h6>
      <p>
        <Styled_Subtitle>
          DESCRIPTION
        </Styled_Subtitle>
        {currentProject.description}</p>
    </div>}
  </Styled_Container>;
};

const Styled_Container = styled.div`
  height: 100vh;
  width: 100%;
  color: white;
  padding-top: 5rem;
    h2{
      font-size: 3rem;
      font-weight: bold;
      text-align: center;
      justify-content: center;
    }
    p{
    font-size: 1.2rem;
    padding-top: 2rem;
  }
    h6{
      font-size: 1rem;
      font-weight: 100;
      text-align: center;
      justify-content: center;
      padding-top: 15px;
      color: grey;
    }
`
const Styled_Subtitle = styled.div`
  font-size: 1.4rem;
  font-weight: bold;
  padding-bottom: 1rem;
`

export default Project