import createCart from 'actions/cart';
import signUpAction from 'actions/signUp';
import { getCookie } from 'helpers';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import Wrapper from './register.styled';

const field = ['email', 'password'];

const renderFields = ({ formData: values, onChange }) =>
  field.map((name) => (
    <div key={name} className="field">
      <label className="label" htmlFor="email">
        <span>{name.charAt(0).toUpperCase() + name.slice(1)}</span>
        <div className="control">
          <input
            id={name}
            className="input"
            type={name}
            placeholder={`Please enter your ${name} `}
            value={values[name]}
            onChange={onChange}
            name={name}
          />
        </div>
      </label>
    </div>
  ));

const Register = () => {
  const signUp = useSelector((state) => state.signUp);
  const dispatch = useDispatch();
  const history = useHistory();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    returnSecureToken: true,
  });

  useEffect(() => {
    const condition = signUp.userData.email.length || getCookie('email');
    if (condition) {
      history.push('/');
    }
  }, [history, signUp.userData.email.length]);

  const { email } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const formSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    dispatch(signUpAction(formData));
    dispatch(createCart({ email, cart: [] }));
  };

  console.log('signUp :>> ', signUp);

  return (
    <Wrapper>
      <h1>Signup</h1>

      <form onSubmit={formSubmit}>
        {renderFields({ formData, onChange })}

        <div className="field">
          <div className="control">
            <button type="submit" className="button is-link">
              Signup
            </button>
          </div>
        </div>
      </form>
    </Wrapper>
  );
};

export default Register;
