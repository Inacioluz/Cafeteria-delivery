import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

  :focus {
    outline: none;
    box-sizing: 0 0 0 2px ${(props) => props.theme["background"]};
  }
  
  body {
    background: ${(props) => props.theme["background"]};
    color: ${(props) => props.theme["base-title"]};
    -webkit-font-smoothing: antialiased;
    margin: 0 auto;
    padding: 0;
  }
  body, input, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }
  input {
    color: ${(props) => props.theme["base-input"]};
  }
`;
