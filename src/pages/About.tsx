import React from "react";
import styled from "styled-components";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

// Brands SVG
import {faLinkedin, faBitcoin, faGithub} from '@fortawesome/free-brands-svg-icons'
// Solid SVG
import {faChartLine, faMusic, faGamepad,faCamera, faEnvelope,} from '@fortawesome/free-solid-svg-icons'

const About = ()=>{
    return(
        <Styled_Container>
            <Styled_TitleContainer>
            <Styled_Title>Ronald</Styled_Title>
            <Styled_Position>QUALITY ASSURANCE</Styled_Position>
            <Styled_Title>Solticzki</Styled_Title>
            </Styled_TitleContainer>

            <Styled_SocialMedia>
            <FontAwesomeIcon className="linkedIn" icon={faLinkedin}></FontAwesomeIcon>
            <FontAwesomeIcon className="gitHub" icon={faGithub}></FontAwesomeIcon>
            <FontAwesomeIcon className="envelope" icon={faEnvelope}></FontAwesomeIcon>
            </Styled_SocialMedia>

            <h3 className="AboutTitle">A few words about me</h3>
            <p>My name is Ronald, I am from Romania and I am 22 years old. I am in my second year of college, <span>majoring in Management</span> within the Northern University of Cluj-Napoca. I finished high school at the Nicolae Titulescu Economic College on the Tourism profile. <span>My initial contact with the IT field</span> was in October last year when I started the Software Tester course. After completing the course I managed to obtain the <span>diploma for the QA Tester</span> position and I started to test a portfolio website for my friend. Here is the point where the passion for programming became like an obsession, which made me to start studying this field, through the Udemy Platform. My <span>first programming languages</span> that I learned was HTML & CSS, after this course I kept going with JavaScript course and then with React. </p>

            <Styled_HobbyTitle>My Hobbies</Styled_HobbyTitle>

            <Styled_HobbyIcons>
            <FontAwesomeIcon icon={faBitcoin}></FontAwesomeIcon>
            <FontAwesomeIcon icon={faChartLine}></FontAwesomeIcon>
            <FontAwesomeIcon icon={faMusic}></FontAwesomeIcon>
            <FontAwesomeIcon icon={faGamepad}></FontAwesomeIcon>
            <FontAwesomeIcon icon={faCamera}></FontAwesomeIcon>
            </Styled_HobbyIcons>

        </Styled_Container>
    )
}

const Styled_SocialMedia = styled.div`
    font-size: 60px;
    margin: 20px;
    display: flex;
    justify-content: flex-end;
    color: #ffa600;
    .linkedIn{
        padding: 20px;
        cursor: pointer;
    }
    .gitHub{
        padding: 20px;
    }
    .envelope{
        padding: 20px;
    }
`

const Styled_HobbyIcons = styled.div`
font-size: 60px;
padding: 20px;
margin: 20px;
display: grid;
grid-template-columns: repeat(3, minmax(0, 1fr));
color: #ffa600;
`

const Styled_HobbyTitle = styled.div`
    font-size: 2rem;
    text-align: center;
    align-items: center;
    padding: 40px 0px;
    color:#ffa600 ;
`

const Styled_Container = styled.div`
    color: #A6A6A6;
    text-align: center;
    padding: 20px 0px;
    span{
      color: #ffa600;
    }
    .AboutTitle{
        color: #fff;
        text-align: center;
        padding: 20px;
    }

`

const Styled_Title = styled.h2`
    padding: 15px;
    line-height: 1.6rem;
    padding-top: 20px;
    width: 50%;
`
const Styled_TitleContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));

`

const Styled_Position = styled.h3`
    justify-content: flex-end;
    padding: 15px;
    margin-bottom: 10px;
    width: 50%;
       
`

export default About