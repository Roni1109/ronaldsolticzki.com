import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router';
import queryString from 'query-string';
import { useSearchParams } from 'react-router-dom';
import Projects from "../Data/Projects.json"
import styled from 'styled-components';
import { accent_color } from "../Utility/Colors"



interface Project {
  id: number;
  name: string;
}
type CurrentProject ={
  name: string;
  duration: string;
  description: string;
  programs?: string;
  image?: string;
  tested?: string[]
  bugs?: string[]
  
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
      {/* eslint-disable-next-line @typescript-eslint/no-var-requires */}
      <Image src={require(`../img/Projects/${currentProject.image}`)} alt={currentProject.name} /> 
      <h2>{currentProject.name}</h2>
      <h6>{currentProject.duration}</h6>
      <p>
        <Styled_Subtitle>
          DESCRIPTION
        </Styled_Subtitle>
        {currentProject.description}
      </p>
        <br />

        {currentProject.tested && currentProject.tested.length > 0 && (
      <div>
        <Styled_Subtitle> 
          MY CONTRIBUTIONS
        </Styled_Subtitle>
          <ul>
            {currentProject.tested.map((item, index) => (
            <Styled_List key={index}>{item}</Styled_List>
            ))}
          </ul>
      </div>
)}

  {(currentProject.bugs?.length ?? 0) > 0 && (
    <div>
      <Styled_Subtitle>
        BUGS IDENTIFIED 
      </Styled_Subtitle>
      <ul>
        {currentProject.bugs?.map((bug, index) => (
          <Styled_List key={index}>
            {bug}
            <br />
            <Styled_Button>REPORT</Styled_Button>
          </Styled_List>
        ))}
      </ul>
    </div>
  )}
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
      padding-top: 2rem;
      @media (max-width: 768px) {
        font-size: 1.3rem;
      }
      @media (min-width: 769px) and (max-width: 1024px) {
      }
    }
    p{
    font-size: 1.2rem;
    padding-top: 2rem;
    @media (max-width: 768px){
      font-size: .6rem;
      font-weight: 300;
    }
    @media (min-width: 769px) and (max-width: 1024px) {
      font-size: .2rem;
      }
  }
    h6{
      font-size: 1rem;
      font-weight: 350;
      text-align: center;
      justify-content: center;
      padding-top: 5px;
      color: #FF7F50;
      @media (max-width: 768px) {
        font-size: .6rem;
      }
      @media (min-width: 769px) and (max-width: 1024px) {
      }
    }
`
const Image = styled.img`
    width: 80%;
    display: flex;
    align-items: center;
    margin: 0 auto;
    justify-content: center;
    @media (max-width: 768px) {
      width: 100%;
      height: 20vh;
    }
    @media (min-width: 769px) and (max-width: 1024px) {
      }
  `;

const Styled_Subtitle = styled.div`
    font-size: 1.4rem;
    font-weight: bold;
    padding-bottom: 1rem;
    padding-top: 2rem;
    @media (max-width: 768px){
      font-size: .8rem;
      justify-content: center;
      align-items: center;
      text-align: center;
      padding-top: .8rem;
  }
    @media (min-width: 769px) and (max-width: 1024px) {

    }
`

const Styled_List = styled.li`
    font-size: 1rem;
    line-height: 1.8rem;
    padding-left: 20px;
    @media (max-width: 768px){
      font-size: .6rem;
      line-height: 1.1rem;
  }
    @media (min-width: 769px) and (max-width: 1024px) {
    }
`

const Styled_Button = styled.button`
  background-color: #F7DCEC;
  padding: 10px 10px;
  color: #9B223E;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  @media (max-width: 768px){
    font-weight: 300;
    font-size: 0.6rem;
    padding: 3px 3px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  @media (min-width: 769px) and (max-width: 1024px) {
  }
`

export default Project