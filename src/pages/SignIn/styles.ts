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
    max-width: 60rem;

    form {
      margin: 8rem 0;
      margin-bottom: 4rem;
      width: 30rem;
      text-align: center;

      h1 {
        margin-bottom: 2.4rem;
      }

      input {
        color: #C2C1C2;
        background: #232129;
        border-radius: 1rem;
        border: 2px solid #232129;
        padding: 1.6rem;
        width: 100%;

        &::placeholder {
          color: #666360;
        }

        & + input {
        margin-top: 0.8rem;
         }
      }



      button {
        background: #F51AA4;
        height: 5.6rem;
        border-radius: 1rem;
        border: 0;
        padding: 0 1.6rem;
        color: #312e38;
        width: 100%;
        font-weight: 500;
        margin-top: 1.6rem;
        transition: background-color 0.2s;

        &:hover {
          background: ${shade(0.2, '#f51aa4')};
        }
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
    background: url(${signInBackgroundImg}) no-repeat center;
    background-size: cover;
`;
