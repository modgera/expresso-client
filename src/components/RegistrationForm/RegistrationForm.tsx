
import * as React from 'react';

import './RegistrationForm.scss';

const { useState } = React;

const RegistrationForm: React.FC = () => {
  const [cellNumber, setCellNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (): void => {
    console.log('send');
  };
  const handleChangeCellPhone = (e: any): void => {
    setCellNumber(e.target.value);
  };

  const handleChangePassword = (e: any): void => {
    setPassword(e.target.value);
  };

  const handleChangeConfirmPassword = (e: any): void => {
    setConfirmPassword(e.target.value);
  };

  const handleChangeName = (e: any): void => {
    setName(e.target.value);
  };

  return (
    <div className="registration-form-container">
      <h3>Registration</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input type="text" onChange={handleChangeName} value={name} />
        </label>

        <label>
          Cell Number
          <input type="text" onChange={handleChangeCellPhone} value={cellNumber} />
        </label>

        <label>
          Password
          <input type="password" onChange={handleChangePassword} value={password} />
        </label>

        <label>
          Confirm Password
          <input type="password" onChange={handleChangeConfirmPassword} value={confirmPassword} />
        </label>

        <button type="submit">Sign up  </button>

      </form>
    </div>
  );
};

export default RegistrationForm;
