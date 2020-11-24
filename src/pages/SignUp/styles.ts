import styled from 'styled-components';
import { shade } from 'polished';
import signUpBg from '../../assets/sign-up-bg.jpg';

export const Container = styled.div`
    height: 100vh;
    display: flex;
    align-items: stretch;

`;

export const Content = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 60rem;

    form {
      margin: 8rem 0;
      margin-bottom: 4rem;
      width: 30rem;
      text-align: center;

      h1 {
        margin-bottom: 2.4rem;
      }

    }

      > a {
        color: #c2c1c2;
        display: block;
        margin-top: 2.4rem;
        text-decoration: none;
        transition: color 0.2s;
        display: flex;
        align-items: center;

        svg {
          margin-right: 1rem;
        }

      &:hover {
          color: ${shade(0.2, '#c2c1c2')};
      }
      }

`;

export const Background = styled.div`
    flex: 1;
    background: linear-gradient(0deg, rgba(189, 64, 137, 0.3), rgba(189, 64, 137, 0.3)), url(${signUpBg}) no-repeat center;
    background-size: cover;
`;
