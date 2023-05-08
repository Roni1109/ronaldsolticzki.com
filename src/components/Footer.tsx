import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
  return (
    <Styled_Wrapper className='footer'>
         <FooterWrapper>
         <LeftText>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus tempora voluptatem vitae officia voluptatum. Aperiam soluta vero nesciunt explicabo repellendus.</LeftText>
      <SocialIcons>
        <li>
          <SocialIconLink href="https://www.linkedin.com/in/ronaldsolticzki/" target="_blank">
            <FontAwesomeIcon icon={faLinkedin} />
          </SocialIconLink>
        </li>
        <li>
          <SocialIconLink href="https://github.com/Roni1109" target="_blank">
            <FontAwesomeIcon icon={faGithub} />
          </SocialIconLink>
        </li>
        <li>
          <SocialIconLink href="https://www.instagram.com" target="_blank">
            <FontAwesomeIcon icon={faInstagram} />
          </SocialIconLink>
        </li>
      </SocialIcons>
    </FooterWrapper>
    </Styled_Wrapper>
  )
}

const Styled_Wrapper = styled.div`
    background-color: gray;
   h4{
    padding-top: 20px;
   }
`

const LeftText = styled.p`
  font-size: 14px;
  margin: 0;
`;


const FooterWrapper = styled.footer`
  background-color: rgba(0, 0, 0, 0.8);
  color: #fff;
  padding: 30px 0;
`;

const SocialIcons = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  li{
    text-decoration: none;
    list-style:none
    
  }
`;

const SocialIconLink = styled.a`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background-color: #fff;
  text-align: center;
  line-height: 40px;
  border-radius: 50%;
  color: #000;
  margin: 0 10px;
  transition: all 0.3s ease-in-out;
  opacity: 0.8;
`;


export default Footer