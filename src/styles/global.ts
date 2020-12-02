import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      outline: 0;
    }

    html {
     --color-primary: #42213D;
    }

    body {
      background: var(--color-primary);
      color: #fff;
      font-size: 62.5%;
    }

    body, input, button {
      font-family: 'Roboto Slab', sans-serif;
      font-size: 1rem;
    }

    h1, h2, h3, h4, h5, h6, strong {
      font-weight: 500;
    }

    button {
      cursor: pointer;
    }
`;
