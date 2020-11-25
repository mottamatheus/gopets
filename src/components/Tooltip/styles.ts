import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  span {
    width: 15rem;
    color: #312e38;
    background: #BD4089;
    padding: 0.8rem;
    border-radius: 4px;
    font-size: 1.4rem;
    font-weight: 500;
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
      border-color: #BD4089 transparent;
      border-width: 6px 6px 0 6px;
      top: 100%;
      left: 50%;
      transform: translateX(-50%);

    }
  }

`;
