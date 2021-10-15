import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ccc;

  .left {
    border-radius: 10px;
    img {
      width: 100px;
      height: 100px;
      margin-right: 10px;
    }
  }

  .right {
  }
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100px;

  .top {
    h3 {
      margin-bottom: 5px;
      font-size: 1.1rem;
    }
    p {
      font-size: 0.9rem;
      color: hsl(204 86% 86% / 70%);
    }
  }

  .bottom {
  }
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  user-select: none;

  button {
    all: unset;
    border: 1px solid hsl(204 86% 86% / 100%);
    color: hsl(204 86% 86% / 100%);
    background: none;
    cursor: pointer;
    border-radius: 50%;
    width: 1.5rem;
    height: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s ease-in-out;

    i {
      font-size: 13px;
    }

    &:hover {
      background: hsl(204 86% 86% / 100%);
      color: #1b262c;
    }
  }

  .left {
    display: flex;
    align-items: center;
    font-size: 0.9rem;
    color: hsl(204 86% 86% / 70%);
    font-size: 1.2rem;
    line-height: 1.5rem;

    p {
      margin: 0 10px;
    }
  }
`;

export default {
  Bottom,
  Wrapper,
  Item,
  Right,
};
