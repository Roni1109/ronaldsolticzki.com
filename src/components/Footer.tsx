import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
  return (
    <Styled_Wrapper className='footer'>
         <FooterWrapper>
         <LeftText>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam suscipit cupiditate, laudantium tempore qui repellat aliquid, sed error facilis, in sunt sapiente. Tempora harum iste nam placeat illo recusandae tenetur neque, et officiis vitae culpa corporis voluptas ipsa atque velit libero, mollitia adipisci commodi cupiditate dolore aliquid! Quis provident impedit, temporibus dolorem praesentium deserunt perferendis voluptatibus officia nam eum recusandae voluptatum consectetur excepturi quod sapiente dolor tempore, doloribus facere. Saepe ad quidem accusantium quod similique aliquam laboriosam iste id vel laudantium quisquam blanditiis debitis odit quasi, error porro, earum non ratione consequuntur necessitatibus beatae. Porro obcaecati fuga inventore recusandae? Architecto.</LeftText>
      <SocialIcons>
        <li>
          <SocialIconLink href="https://www.linkedin.com">
            <FontAwesomeIcon icon={faLinkedin} />
          </SocialIconLink>
        </li>
        <li>
          <SocialIconLink href="https://www.github.com">
            <FontAwesomeIcon icon={faGithub} />
          </SocialIconLink>
        </li>
        <li>
          <SocialIconLink href="https://www.instagram.com">
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