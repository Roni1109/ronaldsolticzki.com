// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    text: string
    body: string
  }
  export interface ColorsInterface {
    text: string
    body: string

  }
  export interface DarkMode{
    text: string
    body: string
  }
}




