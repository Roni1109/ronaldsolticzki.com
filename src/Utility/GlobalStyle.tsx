import { createGlobalStyle } from "styled-components"
import { DefaultTheme, ColorsInterface } from "styled-components"

export const GlobalStyle = createGlobalStyle<DefaultTheme>`

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        /* Here you add font family */
        font-family: 'Exo-soft', sans-serif;
    }

    body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    }

    .test{
      padding: 0 7vw;
    }
    
    @media screen and (max-width:768px){
      .test{
        padding: 0 2rem;
      }
    }

    h1 {
        font-size: 3.5rem;
        line-height: 5rem;
        letter-spacing: 2px;
        font-weight: 700;
    }
   
    h2 {
        font-size: 2.5rem;
        font-weight: 700;
        letter-spacing: 1px;
    }
    
    h3 {
        font-size:2rem;
        line-height: 1rem;
        letter-spacing: 1px;
        font-weight: 600;
        font-style: normal;
    }

    h4 {
      font-size: 2rem;
      line-height: 2rem;
      letter-spacing: 0px;   
      font-weight: 600;
      font-style: normal;
    }

    h5 {
      font-size: 1.5rem;
      letter-spacing: 0px;    
      line-height: 40px;
      font-weight: 600;
      font-style: normal;
    }

    h6 {
      font-size: 1.2rem;
      letter-spacing: 1.3px;
      font-weight: 600;
      font-style: normal;

    } 
    
    p {
      font-size: 1rem;
      letter-spacing: 1.3px; 
      font-weight: 200;
      font-style: normal;
    }
`
