import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;

        /* Here you add font family */
        font-family: 'exo-soft', Helvetica, sans-serif;
    }

    body{
      
        background: rgb(24,24,24)
       
    }

    h1 {
        font-size: 3.75rem;
        line-height: 1rem;
        letter-spacing: 2px;
        font-weight: 600;
    }
    h2 {
         font-size: 3rem;
  font-weight: 600;
  letter-spacing: 1px;
    }
    h3 {
          font-size:2.5rem;
        line-height: 1rem;
        letter-spacing: 1px;


 
font-weight: 500;
font-style: normal;

    }
    h4 {
       font-size: 2rem;
  line-height: 1rem;
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
  font-size: 1.25rem;
 
  letter-spacing: 0px;

font-weight: 400;
font-style: normal;
}

p {
  font-size: 1rem;

  letter-spacing: 1px;
     
font-weight: 400;
font-style: normal;
}
`

export default GlobalStyle
