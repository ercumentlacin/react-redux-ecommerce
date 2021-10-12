import signUpAction from 'actions/signUp';
import Form from 'components/Form';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Wrapper from './register.styled';

const Register = () => {
  const signUp = useSelector((state) => state.signUp);
  const dispatch = useDispatch();
  console.log('signUp :>> ', signUp);

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    returnSecureToken: true,
  });

  const { email, password } = formData;

  const onChangeInput = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const formSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    dispatch(signUpAction(formData));
  };

  return (
    <Wrapper>
      <h1>Signup</h1>

      <Form onSubmit={formSubmit}>
        <label htmlFor="email">
          <span>Your e-mail</span>
          <input
            type="email"
            placeholder="name@gmail.com"
            name="email"
            id="email"
            value={email}
            onChange={onChangeInput}
          />
        </label>

        <label htmlFor="password">
          <span>Password</span>
          <input
            type="password"
            placeholder="at least 6 characters"
            name="password"
            id="password"
            value={password}
            onChange={onChangeInput}
          />
        </label>

        <button type="submit">Signup</button>
      </Form>
    </Wrapper>
  );
};

export default Register;
