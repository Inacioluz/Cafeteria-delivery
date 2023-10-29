import { createGlobalStyle } from 'styled-components'
export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

  :focus {
    outline: none;
    box-sizing: 0 0 0 2px ${(props) => props.theme['background']};
  }
  
  body {
    background: ${(props) => props.theme['pbackground']};
    color: ${(props) => props.theme['']};

  }
`