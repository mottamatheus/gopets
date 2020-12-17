import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`

        background: var(--color-secondary);
        height: 5.6rem;
        font-size: 1.2rem;
        border-radius: 1rem;
        border: 0;
        padding: 0 1.6rem;
        color: var(--color-primary);
        width: 100%;
        font-weight: 600;
        margin-top: 1.6rem;
        transition: background-color 0.2s;

        &:hover {
          background: ${shade(0.2, '#f9665f')};

      }`;
