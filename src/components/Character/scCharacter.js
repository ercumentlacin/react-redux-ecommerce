import styled from 'styled-components';

const WrapperCharacter = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;

  .close {
    position: absolute;
    top: 10px;
    right: 10px;
    width: 30px;
    height: 30px;
    background-color: #fff;
    border-radius: 50%;
    border: 1px solid #000;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    color: #000;
    cursor: pointer;
  }

  img {
    width: 100%;
    object-fit: cover;
    border-radius: 2rem;
  }

  h2 {
    font-size: 1rem;
    font-weight: bold;
    margin: 0.3rem 0;
  }

  .price {
    color: #3282b8;
  }

  button {
    cursor: pointer;
    background: hsl(204, 77%, 26%);
    border: none;
    font-size: 1rem;
    font-weight: bold;
    color: white;
    margin-top: 0.5rem;
    padding: 0.5rem 1rem;
    font-family: 'Karla', sans-serif;
    border-radius: 0.5rem;
    transition: all 0.3s ease-in-out;

    &:hover {
      background: hsl(204, 77%, 30%);
    }
  }
`;

export default WrapperCharacter;
