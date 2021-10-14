import signInRequest from 'actions/signInAction';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import WrapperLogin from './scHome';

const field = ['email', 'password'];

const renderFields = ({ values, onChange }) =>
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
          />
        </div>
      </label>
    </div>
  ));

// eslint-disable-next-line no-lone-blocks
{
  /* <div className="control">
<input {...input} className="input" type={type} placeholder={label} />
{touched && error && <span>{error}</span>}
</div> */
}

const Login = () => {
  const dispatch = useDispatch();
  const { isSignIn } = useSelector((state) => state.signIn);

  useEffect(() => {
    if (isSignIn) {
      window.location.href = '/';
    }
  }, [isSignIn]);

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(signInRequest({ ...formData, returnSecureToken: true }));
  };

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.id]: e.target.value });

  return (
    <WrapperLogin>
      <h1>Login</h1>
      <p>
        Not a member ? <Link to="/register">Register</Link>
      </p>

      <form onSubmit={onSubmit}>
        {renderFields({ values: formData, onChange })}

        <div className="field">
          <div className="control">
            <button type="submit" className="button is-link">
              Login
            </button>
          </div>
        </div>
      </form>
    </WrapperLogin>
  );
};

export default Login;
