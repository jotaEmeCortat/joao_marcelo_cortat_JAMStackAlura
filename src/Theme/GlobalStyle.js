import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
 * {
    box-sizing: border-box;
  }
  ${normalize}

  h1,p {
    margin: 0;
  }

  html,
  body {
    background: ${({ theme }) => theme.colors.background};
    font-family: ${({ theme }) => theme.fontFamily};
    margin: 0;
    padding: 0;
    
  }
  /* Full height layout */
  html, body {
    display: flex;
    min-height: 100vh;
    width: 100%;
  }
  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
  
`;
