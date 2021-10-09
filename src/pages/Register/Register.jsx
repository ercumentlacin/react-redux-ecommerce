import Form from 'components/Form';

import Wrapper from './register.styled';

const Register = () => {
  console.log('Register :>> ', Register);
  return (
    <Wrapper>
      <h1>Signup</h1>

      <Form>
        <label htmlFor="username">
          <span>Your username</span>
          <input
            type="text"
            placeholder="Username"
            name="username"
            id="username"
          />
        </label>

        <label htmlFor="email">
          <span>Your e-mail</span>
          <input
            type="email"
            placeholder="name@gmail.com"
            name="email"
            id="email"
          />
        </label>

        <label htmlFor="password">
          <span>Password</span>
          <input
            type="password"
            placeholder="at least 6 characters"
            name="password"
            id="password"
          />
        </label>

        <button type="submit">Signup</button>
      </Form>
    </Wrapper>
  );
};

export default Register;
