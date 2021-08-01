import { createGlobalStyle} from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    min-height: 100vh;
    background: ${({theme}) => theme.background.main};
    color: ${props => props.theme.text["theme-color"]};
    font-family: Spartan;
    font-weight: 700;
    height: 100vh;
  }
  h1, h2, h3, h4, h5, h6 {
    margin: 0;
  }
  #root {
    display: flex;
    justify-content: center;
    align-items: center;
    height: inherit;
  }
`;