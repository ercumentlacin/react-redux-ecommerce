import styled from 'styled-components';

const SpinnerWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  z-index: 10;

  .spinner {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
    margin: 0 auto;
    border: 3px solid hsl(204 86% 86% / 100%);
    border-radius: 50%;
    border-top-color: transparent;
    border-left-color: transparent;
    animation: spin 1s linear infinite;
    margin-bottom: 15px;

    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }
`;

export default SpinnerWrapper;
