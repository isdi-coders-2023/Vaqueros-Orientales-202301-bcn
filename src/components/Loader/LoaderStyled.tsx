import styled from "styled-components";

const LoaderStyled = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 10rem;
  align-items: center;
  justify-content: flex-start;
  min-width: auto;
  height: 100%;
  top: 10rem;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: white;
  z-index: 1;
  font-size: 36px;
  padding-top: 10rem;

  .loader__info {
    padding: 20px;
    text-align: center;
  }

  .loader-info__accent {
    color: #cd4631;
  }

  .dot-wave {
    --uib-size: 147px;
    --uib-speed: 1s;
    --uib-color: #333;
    --uib-color-accent: #cd4631;

    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-between;
    width: var(--uib-size);
    height: calc(var(--uib-size) * 0.17);
    padding-top: calc(var(--uib-size) * 0.34);
  }

  .dot-wave__dot {
    flex-shrink: 0;
    width: calc(var(--uib-size) * 0.17);
    height: calc(var(--uib-size) * 0.17);
    border-radius: 50%;
    background-color: var(--uib-color);
    will-change: transform;
  }

  .dot-wave__dot:nth-child(1) {
    background-color: var(--uib-color-accent);
    animation: jump var(--uib-speed) ease-in-out calc(var(--uib-speed) * -0.45)
      infinite;
  }

  .dot-wave__dot:nth-child(2) {
    animation: jump var(--uib-speed) ease-in-out calc(var(--uib-speed) * -0.3)
      infinite;
  }

  .dot-wave__dot:nth-child(3) {
    animation: jump var(--uib-speed) ease-in-out calc(var(--uib-speed) * -0.15)
      infinite;
  }

  .dot-wave__dot:nth-child(4) {
    animation: jump var(--uib-speed) ease-in-out infinite;
  }

  @keyframes jump {
    0%,
    100% {
      transform: translateY(0px);
    }

    50% {
      transform: translateY(-200%);
    }
  }
`;

export default LoaderStyled;
