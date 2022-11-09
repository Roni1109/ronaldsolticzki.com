// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    background: string
    toggleBorder: string
    text: string
    body: string
  }
  export interface ColorsInterface {
    primary: string
    secondary: string
  }
}



