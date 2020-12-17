import styled from 'styled-components';
import { shade } from 'polished';
import BackgroundImg from '../../assets/background.jpg';

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

    img {
      width: 250px;
    }

    form {
      margin: 8rem 0;
      margin-bottom: 4rem;
      width: 30rem;
      text-align: center;

      h1 {
        font-weight: 700;
        margin-bottom: 2.4rem;
      }

      a {
        color: var(--text-primary);
        font-size: 500;
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
        color: var(--color-secondary);
        display: block;
        margin-top: 2.4rem;
        text-decoration: none;
        transition: color 0.2s;
        display: flex;
        align-items: center;

        svg {
          margin-right: 10px;
        }

      &:hover {
          color: ${shade(0.2, '#f9665f')};
      }
      }

`;

export const Background = styled.div`
    flex: 1;
    background:  url(${BackgroundImg}) no-repeat center;
    background-size: cover;
`;
