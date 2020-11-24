import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
}

export const Container = styled.div<ContainerProps>`
       color: #666360;
        background: #232129;
        border-radius: 1rem;
        border: 2px solid #232129;
        padding: 1.6rem;
        width: 100%;
        display: flex;
        align-items: center;

        & + div {
        margin-top: 0.8rem;
         }

        ${(props) => props.isFocused && css`
          color: #12547a;
          border-color: #12547a;
        `}

        ${(props) => props.isFilled && css`
          color: #12547a;
        `}

  input {
    color: #C2C1C2;
    flex: 1;
    border: 0;
    background: transparent;


        &::placeholder {
          color: #666360;
        }


      }

      svg {
        margin-right: 1.6rem;

      }
      `;
