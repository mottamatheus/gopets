import styled from 'styled-components';
import { shade } from 'polished';
import signInBackgroundImg from '../../assets/sign-in-background.jpg';

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
    max-width: 50rem;

    form {
      margin: 8rem 0;
      margin-bottom: 4rem;
      width: 30rem;
      text-align: center;

      h1 {
        margin-bottom: 2.4rem;
      }

      a {
        color: #C2C1C2;
        display: block;
        margin-top: 2.4rem;
        text-decoration: none;
        transition: color 0.2s;

        &:hover {
          color: ${shade(0.2, '#c2c1c2')}
        }
      }
    }

      > a {
        color: #BD4089;
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
          color: ${shade(0.2, '#BD4089')};
      }
      }

`;

export const Background = styled.div`
    flex: 1;
    background: linear-gradient(0deg, rgba(189, 64, 137, 0.3), rgba(189, 64, 137, 0.2)), url(${signInBackgroundImg}) no-repeat center;
    background-size: cover;
`;
