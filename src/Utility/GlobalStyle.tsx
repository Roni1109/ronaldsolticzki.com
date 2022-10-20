import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        /* Here you add font family */
        font-family: 'Exo-soft', sans-serif;
    }

    body{
        background: #202020;
    }

    h1 {
        font-size: 3.75rem;
        line-height: 1rem;
        letter-spacing: 2px;
        font-weight: 600;
    }
   
    h2 {
        font-size: 2.5rem;
        font-weight: 500;
        letter-spacing: 1px;
    }
    
    h3 {
        font-size:2rem;
        line-height: 1rem;
        letter-spacing: 1px;
        font-weight: 500;
        font-style: normal;
    }

    h4 {
      font-size: 2rem;
      line-height: 2rem;
      letter-spacing: 0px;   
      font-weight: 400;
      font-style: normal;
    }

    h5 {
      font-size: 1.5rem;
      letter-spacing: 0px;    
      font-weight: 400;
      font-style: normal;
    }

    h6 {
      font-size: 1.2rem;
      letter-spacing: 1.3px;
      font-weight: 500;
      font-style: normal;
      font-family: 'Neonderthaw', cursive;

    } 
    
    p {
      font-size: 1.3rem;
      letter-spacing: 1.3px; 
      font-weight: 300;
      font-style: normal;
    }
`

export default GlobalStyle
