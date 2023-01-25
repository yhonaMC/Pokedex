import styled, { keyframes } from "styled-components";

export const ProgressBar = styled.div`
  width: 90%;
  height: 0.5rem;
  border-radius: 0.25rem;
  background: #555;
  overflow: hidden;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  transform: translate3d(0, 0, 0);
  -webkit-transform: translate3d(0, 0, 0);
  -moz-transform: translate3d(0, 0, 0);
`;

const progressBar = keyframes`
    to {
      transform: initial;
    }
`;

export const ProgressBarFill = styled.div`
  width: ${(props) =>
    props.base_stat >= 100 ? "100%" : `${props.base_stat}%`};
  background: ${(props) => (props.base_stat >= 50 ? "#1CD80E" : "#FF364E")};
  box-shadow: 0 0 0.75rem 0.25rem
    ${(props) =>
      props.base_stat >= 50
        ? "rgba(28, 216, 14, 0.25)"
        : "rgba(255, 54, 78, 0.25)"};
  height: 0.5rem;
  border-radius: 0.25rem;
  transform: translate3d(-100%, 0, 0);
  animation: ${progressBar} 2s forwards;
`;

export const StatsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  span {
    font-size: 1rem;
    line-height: 1;
    font-weight: 400;
    display: inline-block;
  }

  span:nth-child(1) {
    min-width: 4.38rem;
  }

  span:nth-child(2) {
    min-width: 1.88rem;
    margin: 0 1.25rem;
    font-weight: 700;
    text-align: center;
  }

  li {
    display: flex;
    align-items: center;
  }

  @media (max-width: 31.25rem) {
    span:nth-child(2) {
      margin: 0 0.75rem;
    }
  }
`;
