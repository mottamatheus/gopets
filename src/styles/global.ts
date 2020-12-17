import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

:root {
  --text-primary: #303033;
  --color-primary: #fff5ee;
  --color-secondary: #f9665f;
  --card-primary: #f2e2d5;
  --card-secondary: #ebd3c1;
}
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      outline: 0;
    }

    body {
      background: var(--color-primary);
      color: var(--text-primary);
      font-size: 62.5%;
    }

    body, input, button {
      font-family: 'Fira Sans', sans-serif;
      font-size: 1rem;
    }

    h1, h2, h3, h4, h5, h6, strong {
      font-weight: 500;
    }

    button {
      cursor: pointer;
    }
`;
