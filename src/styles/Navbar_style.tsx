import styled from "styled-components";

export const Styled_Navbar = styled.div`
padding: 0 2rem;
display: flex;
justify-content: space-between;
align-items: center;
flex-wrap: wrap;
background: #16272c;
`;

export const Logo = styled.a`
padding: 1rem 0rem;
color: #ffffff;
text-decoration: none;
font-weight: 800;
font-size: 1.7rem;
&:hover{
  color: #e6ae92;
  transition: 0.2s all ease-in;
}
`; 

export const Hamburger = styled.div`
display: none;
flex-direction: column;
cursor: pointer;
  span{
    height: 2px;
    width: 25px;
    background: #fff;
    margin-bottom: 4px;
    border-radius: 5px;
  }
  @media (max-width: 768px){
    display: flex;

  }
`;

export const Menu = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
position: relative;

@media (max-width: 768px){
    overflow: hidden;
    flex-direction: column;
    width: 100%;
}
.darkMode{
  cursor: pointer;
  color: #d9ff00;
}
`;

export const MenuLink = styled.a`
padding: 1rem 2rem;
cursor: pointer;
text-decoration: none;
text-align: center;
color: #365674;
transition: all 0.3s ease-in;
font-size: 1.18rem;
&:hover{
    color: #e6ae92;
}
`;


