import styled from 'styled-components';

const WrapperHeader = styled.header`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 20px;
  height: 60px;
  background: hsl(201, 24%, 18%);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  border-bottom: 1px solid #e0e0e0;

  a {
    position: relative;
    display: flex;
    cursor: pointer;
    color: #fff;
    text-decoration: none;
    padding: 5px 10px;
    border: 1px solid #bbe1fa;
    overflow: hidden;
    z-index: 100;
    transition: all 750ms ease-in-out;

    strong {
      padding-left: 5px;
    }

    &::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: scale(0) translate(-50%, -50%);
      background: #bbe1fa;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      transition: all 750ms ease-in-out;
      z-index: -1;
    }

    &:hover {
      color: hsl(201, 24%, 18%);
      border-color: hsl(0 0% 0%);

      &::before {
        transform: scale(12) translate(-50%, -50%);
        left: 106%;
        top: 200%;
      }
    }
  }
`;
export default WrapperHeader;
