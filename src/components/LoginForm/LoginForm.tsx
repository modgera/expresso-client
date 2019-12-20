import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CellNumber from '../Form/Fields/CellNumber';

import { loginRequest } from '../../store/auth/actionCreators';

import './LoginForm.scss';

const { useState } = React;

const LoginForm: React.FC = () => {
  const auth = useSelector((store) => store.auth);
  console.log(auth);
  const [cellNumber, setCellNumber] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = (e: any): void => {
    e.preventDefault();
    console.log('send');
    const user = {
      cellNumber,
      password,
    };
    dispatch(loginRequest(user));
  };

  const handleChangeCellPhone = (e: any): void => {
    setCellNumber(e.target.value);
  };

  const handleChangePassword = (e: any): void => {
    setPassword(e.target.value);
  };

  return (
    <div className="login-form-container">
      <h3>Login</h3>
      <form onSubmit={handleSubmit}>

        <CellNumber />

        <label>
          Password
          <input type="password" onChange={handleChangePassword} value={password} />
        </label>
        <button type="submit">Sign up  </button>
      </form>
    </div>
  );
};


export default LoginForm;
