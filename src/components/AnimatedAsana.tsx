import React from 'react';
import styled, { keyframes, Keyframes } from 'styled-components';
import { ReactComponent as AsanaLogo } from '../img/Icons/ASAN.svg';

const hoverAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.3);
  }
  100% {
    transform: scale(1);
  }
`;

const Logo = styled(AsanaLogo)`
height: 70px;
width: 70px;
transition: transform 0.2s ease-in-out;
cursor: pointer;
&:hover {
    animation: ${hoverAnimation} 0.5s forwards;
  }
  
`;

const AnimatedAsana = () => {
  return (
    <div>
      <Logo />
    </div>
  );
};

export default AnimatedAsana;
