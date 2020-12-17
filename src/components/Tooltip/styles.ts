import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  span {
    width: 15rem;
    color: var(--color-primary);
    background: var(--color-secondary);
    padding: 0.8rem;
    border-radius: 4px;
    font-size: 1.3rem;
    font-weight: 400;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.4s;
    position: absolute;
    bottom: calc(100% + 1.2rem);
    left: 50%;
    transform: translateX(-50%);

    &::before {
      content: '';
      position: absolute;
      border-style: solid;
      border-color: var(--color-secondary) transparent;
      border-width: 6px 6px 0 6px;
      top: 100%;
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;
