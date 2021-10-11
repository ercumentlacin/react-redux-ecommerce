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

  span {
    cursor: pointer;

    strong {
      padding-left: 5px;
    }
  }
`;
export default WrapperHeader;
