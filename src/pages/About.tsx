import React from "react";
import styled from "styled-components";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import profileIMG from '../img/profileIMG.jpg'
import Icons from '../components/ReactIcons'
import Illustration from '../img/testing 2.svg'

// Brands SVG
import {faLinkedin, faBitcoin, faGithub} from '@fortawesome/free-brands-svg-icons'
// Solid SVG
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'


const About = ()=>{
    return(
        <Styled_Container>
            <Styled_TopContainer>
            <Styled_Name> 
                <i>
                    Ronald
                </i> 
                <br /> 
                <span className="Name">
                    <i>
                        Solticzki
                    </i>
                </span> 
                <hr className="horizontalLine" />
                </Styled_Name>
            <Styled_Photo src={profileIMG} />
            <Styled_Position>QUALITY ASSURANCE</Styled_Position>
            </Styled_TopContainer>
            <Styled_Illustration> <img src={Illustration} /> </Styled_Illustration>

            <Styled_FindMe>
                <h2>Find <span>me</span> through: </h2>
            </Styled_FindMe>
            
            <Styled_SocialMedia>
            <FontAwesomeIcon className="linkedIn" icon={faLinkedin}></FontAwesomeIcon>
            <FontAwesomeIcon className="gitHub" icon={faGithub}></FontAwesomeIcon>
            <FontAwesomeIcon className="envelope" icon={faEnvelope}></FontAwesomeIcon>
            </Styled_SocialMedia>

            <h3 className="AboutTitle">A few words about me</h3>
            <p>My name is Ronald, I am from Romania and I am 22 years old. I am in my second year of college, <span>majoring in Management</span> within the Northern University of Cluj-Napoca. I finished high school at the Nicolae Titulescu Economic College on the Tourism profile. <span>My initial contact with the IT field</span> was in October last year when I started the Software Tester course. After completing the course I managed to obtain the <span>diploma for the QA Tester</span> position and I started to test a portfolio website for my friend. Here is the point where the passion for programming became like an obsession, which made me to start studying this field, through the Udemy Platform. My <span>first programming languages</span> that I learned was HTML & CSS, after this course I kept going with JavaScript course and then with React. </p>
            <br />

            <Styled_HobbyTitle>My Hobbies <hr /> </Styled_HobbyTitle>

            <Styled_HobbyIcons>
                <Icons />
            </Styled_HobbyIcons>

        </Styled_Container>
    )
}

const Styled_Illustration = styled.div`
width: 20%;
`

const Styled_Photo = styled.img`
    border-radius: 50%;
    width: 20%;
    height: 300px;
    margin: 50px 60px;
    display: inline-block;
    justify-content: center;
    text-align: center;
    border: 3px solid orange;
`

const Styled_FindMe = styled.div`
    display: flex;
    justify-content: flex-end;
    padding: 0px 30px;
`

const Styled_SocialMedia = styled.div`
    font-size: 60px;
    display: flex;
    margin-right: 100px;
    justify-content: flex-end;
    
    .linkedIn{
        padding: 20px;
        cursor: pointer;
        color: #ffa600;
    }
    .gitHub{
        padding: 20px;
        cursor: pointer;
        color: #ffa600;
    }
    .envelope{
        padding: 20px;
        cursor: pointer;
        color: #ffa600;
    }
`

const Styled_HobbyIcons = styled.div`
font-size: 60px;
padding-left: 10px;
display: grid;
grid-template-columns: repeat(3, minmax(0, 0.06fr));
color: #ffa600;
`

const Styled_HobbyTitle = styled.div`
    font-size: 2rem;
    padding: 30px 10px 20px 45px;
    color:#ffa600 ;
    hr{
        width: 240px;
        height: 2px;
        border-radius: 40%;
    }
`

const Styled_Container = styled.div`
    color: #A6A6A6;
    span{
      color: #ffa600;
    }
    .Name{
        padding: 30px;
    }
    .FirstName{
        color: purple;
    }
    .AboutTitle{
        color: #fff;
        text-align: center;
        padding: 20px;
    }
    p{
        text-align: center;
        width: 100%;
        padding: 0px 10px;
    }

`

const Styled_Name = styled.h2`
    padding: 50px 20px 0px 10px;
    line-height: 2.5rem;
    width: 50%;
    height: 20%;
    .horizontalLine{
        width: 40%;
        height: 2px;
        border-radius: 50%;
    }
`

const Styled_Position = styled.h3`
    justify-content: flex-end;
    display: flex;
    padding: 50px 10px;
    margin-bottom: 10px;
    width: 50%;
       
`

const Styled_TopContainer = styled.div`
    display: flex;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    
`


export default About