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
            <h2>Ronald</h2>
            <h2>Solticzki</h2>
            <h3>QUALITY ASSURANCE</h3>

            <Styled_SocialMedia>
            <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
            <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
            <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
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
padding: 20px 20px;
margin: 20px;
display: flex;
justify-content: flex-end;
color: #ffa600;
`

const Styled_HobbyIcons = styled.div`
font-size: 60px;
padding: 20px;
margin: 20px;
display: flex;
justify-content: space-between;
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
    span{
      color: #ffa600;
    }
    .AboutTitle{
        color: #fff;
        text-align: center;
        padding: 20px;
    }

`

export default About