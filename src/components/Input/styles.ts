import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  color: var(--text-primary);
  background: #f2e9e2;
  border-radius: 1rem;
  border: 2px solid #232129;
  padding: 1.6rem;
  width: 100%;
  display: flex;
  align-items: center;

  & + div {
    margin-top: 0.8rem;
  }

  ${props =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}

  ${props =>
    props.isFocused &&
    css`
      color: var(--color-secondary);
      border-color: var(--color-secondary);
    `}

        ${props =>
    props.isFilled &&
    css`
      color: var(--color-secondary);
    `}



  input {
    color: var(--text-primary);
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

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 1.6rem;
  font-weight: 700;

  svg {
    margin: 0;
  }

  span {
    background: #e44040;
    color: #fff;
    transition: all 0.4s ease;

    &::before {
      border-color: #e44040 transparent;
    }
  }

  &:hover span {
    opacity: 1;
    visibility: visible;
  }
`;
