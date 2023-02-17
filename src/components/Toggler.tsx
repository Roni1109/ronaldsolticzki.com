import React from 'react'
import { func, string } from 'prop-types';
import styled from "styled-components"


/* background: ${({ theme }) => theme.background};
border: 2px solid ${({ theme }) => theme.toggleBorder}; */

const ThemeButton = styled.button`
  color: ${({ theme }) => theme.text};
  z-index: 5;
  position: absolute;
  border-radius: 30px;
  cursor: pointer;
  font-size:0.8rem;
  padding: 0.6rem;
  `

const Toggle = ({theme,  toggleTheme } :{theme:string, toggleTheme: string}) => {
    return (
        <ThemeButton>
         <div className="iconButton"> 212
          </div>
        </ThemeButton>
    );
};
Toggle.propTypes = {
    theme: string.isRequired,
    toggleTheme: func.isRequired,
}
export default Toggle;
