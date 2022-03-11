import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

import EBGaramondRegular from '../../vendor/fonts/EBGaramond-Regular.ttf';

export const GlobalStyle = createGlobalStyle`
  ${normalize}

  @font-face {
    font-family: 'EBG';
    font-weight: 400;
    src: local('GB'), url(${EBGaramondRegular}) format('truetype'),
  }

  html {
    box-sizing: border-box;
  }

  body {
      margin: 0;
      font-family: 'EBG', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  h1, h2, h3, h4, h5, h6, p {
      margin: 0;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: none;
  }
`;