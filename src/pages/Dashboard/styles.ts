import styled from 'styled-components';
import { shade } from 'polished';
import ArrowLeftIcon from '../../assets/ArrowLeftIcon.svg';
import ArrowRightIcon from '../../assets/ArrowRightIcon.svg';

export const Container = styled.div``;

export const Header = styled.header`
  padding: 24px;
  background-color: ${shade(0.2, '#f9665f')};
`;
export const HeaderContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;

  > img {
    height: 50px;
  }

  button {
    margin-left: auto;
    background: transparent;
    border: 0;
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;
export const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-left: 80px;
  color: var(--color-primary);

  img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
  }

  div {
    display: flex;
    flex-direction: column;
    margin-left: 16px;
    line-height: 24px;
  }

  span {
    color: var(--color-primary);
    font-weight: 300;
    font-size: 15px;
  }
`;

export const Content = styled.main`
  max-width: 1200px;
  margin: 64px 5vw;
  display: flex;
`;
export const Schedule = styled.div`
  flex: 1;
  margin-right: 120px;

  h1 {
    font-size: 36px;
  }

  p {
    margin-top: 8px;
    display: flex;
    align-items: center;
    color: var(--color-secondary);

    span {
      display: flex;
      align-items: center;
    }

    span + span::before {
      content: '';
      width: 1px;
      height: 12px;
      background: red;
      margin: 0 8px;
    }
  }
`;

export const Section = styled.section`
  margin-top: 48px;

  & + div {
    margin-top: 16px;
  }

  > strong {
    color: var(--text-primary);
    font-size: 20px;
    line-height: 26px;
    border-bottom: 1px solid var(--color-secondary);
    display: block;
    padding-bottom: 16px;
    margin-bottom: 16px;
  }
`;

export const NextAppointment = styled.div`
  margin-top: 64px;

  strong {
    color: var(--text-primary);
    font-size: 20px;
    font-weight: 400;
  }

  div {
    background: var(--card-primary);
    display: flex;
    align-items: center;
    padding: 16px 24px;
    border-radius: 10px;
    margin-top: 24px;
    position: relative;

    &::before {
      position: absolute;
      height: 80%;
      width: 2px;
      left: 0;
      top: 10%;
      content: '';
      background: var(--color-secondary);
    }

    img {
      width: 80px;
      height: 80px;
      border-radius: 50%;
    }

    strong {
      margin-left: 24px;
      color: var(--color-secondary);
    }

    span {
      margin-left: auto;
      display: flex;
      align-items: center;
      justify-content: center;

      p {
        margin-top: 0;
        color: ${shade(0.2, '#ebd3c1')};
      }

      svg {
        color: var(--color-secondary);
        margin: 0 8px;
      }
    }
  }
`;

export const Appointment = styled.section`
  display: flex;
  align-items: center;

  div {
    margin-bottom: 16px;
  }

  span {
    margin-left: auto;
    display: flex;
    align-items: center;

    svg {
      color: var(--color-secondary);
      margin-right: 8px;
    }
  }

  div {
    background: var(--card-primary);
    display: flex;
    flex: 1;
    align-items: center;
    padding: 16px 24px;
    border-radius: 10px;
    margin-left: 24px;
  }

  img {
    width: 56px;
    height: 56px;
    border-radius: 50%;
  }

  strong {
    margin-left: 24px;
    color: var(--color-secondary);

    font-size: 20px;
  }
`;

export const Calendar = styled.aside`
  width: 380px;

  .DayPicker {
    border-radius: 0.6rem;
  }

  .DayPicker-wrapper {
    padding-bottom: 0;
    background: var(--color-secondary);
    border-radius: 0.6rem;
  }

  .DayPicker,
  .DayPicker-Month {
    width: 100%;
  }

  .DayPicker-NavButton {
    color: var(--color-secondary) !important;
  }

  .DayPicker-NavButton--prev {
    background: url(${ArrowLeftIcon}) no-repeat center;
    right: auto;
    left: 1.5em;
    margin-right: 0;
  }

  .DayPicker-NavButton--next {
    color: var(--text-primary);
    background: url(${ArrowRightIcon}) no-repeat center;
  }

  .DayPicker-Month {
    border-collapse: separate;
    border-spacing: 8px;
    margin: 1rem 0 0 0;
    padding: 16px;
    background-color: var(--card-primary);
    border-radius: 0 0 10px 10px;
  }

  .DayPicker-Caption {
    margin-bottom: 1rem;
    padding: 0 1rem;
    color: #f4ede8;

    > div {
      text-align: center;
    }
  }

  .DayPicker-Weekday {
    color: #c4ae9e;
  }

  .DayPicker-Day {
    width: 2.5rem;
    height: 2.5rem;
  }

  .DayPicker-Day--available:not(.DayPicker-Day--outside) {
    background: #ebd3c1;
    border-radius: 0.6rem;
  }

  .DayPicker:not(.DayPicker--interactionDisabled)
    .DayPicker-Day:not(.DayPicker-Day--disabled):not(.DayPicker-Day--selected):not(.DayPicker-Day--outside):hover {
    background: ${shade(0.2, '#ebd3c1')};
  }

  .DayPicker-Day--today {
    font-weight: normal;
    color: var(--color-primary);
  }

  .DayPicker-Day--disabled {
    color: #666360;
    background: transparent !important;
  }

  .DayPicker-Day--selected {
    background: var(--color-secondary) !important;
    border-radius: 0.6rem;
    color: var(--color-primary) !important;
  }
`;
