import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  color: #bbe1fa;
  background: #1b262c;
  border: 2px solid #bbe1fa;
  max-width: 500px;
  margin: auto;
  padding: 20px;
  border-radius: 20px;
  box-shadow: 0px 0px 10px #0f4c75;

  h1 {
    font-size: 30px;
    margin-bottom: 20px;
    text-align: center;
  }

  p {
    font-size: 20px;
    margin-bottom: 20px;
    text-align: center;

    a {
      color: hsl(204deg, 86%, 70%);
      text-decoration: none;
      position: relative;

      &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 0;
        height: 1px;
        background: hsl(204deg, 86%, 70%);
        transition: width 0.3s;
      }

      &:hover::after {
        width: 100%;
      }
    }
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 20px;

    label {
      span {
        font-size: 20px;
        margin-bottom: 10px;
        display: inline-block;
      }
    }

    input {
      width: min(300px, 70vw);
      height: 40px;
      border-radius: 20px;
      border: 2px solid hsl(204deg, 86%, 70%);
      padding: 0 10px;
      margin-bottom: 20px;
      font-size: 16px;
      color: #bbe1fa;
      background: #1b262c;
      transition: all 0.3s;

      &:focus {
        border: 2px solid hsl(204deg, 86%, 80%);
        outline: none;
      }

      &:hover {
        border: 2px solid hsl(204deg, 86%, 80%);
      }

      &::placeholder {
        color: #bbe1fa;
      }
    }

    button {
      width: min(300px, 70vw);
      height: 40px;
      border-radius: 20px;
      border: 2px solid hsl(204deg, 86%, 90%);
      padding: 0 10px;
      margin-bottom: 20px;
      background: hsl(201deg 24% 14%);
      color: #bbe1fa;
      transition: all 0.3s;
      cursor: pointer;
      font-family: 'Karla', sans-serif !important;

      &:hover {
        transform: translateY(-0.25em);
        box-shadow: 0 0.5em 0.5em -0.4em black;
      }
    }
  }
`;

export default Wrapper;
