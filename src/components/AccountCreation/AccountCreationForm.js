// AccountCreationForm.js
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addUser } from './action'; // Import your addUser action

const AccountCreationForm = ({ dispatchAddUser }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = () => {
    // Check if both username and password are not empty
    if (username.trim() === '' || password.trim() === '') {
      setErrorMessage('Username and password cannot be empty');
      return;
    }

    // Assuming you have a function to create a new user
    const newUser = { username, password };

    // Clear any previous error message
    setErrorMessage('');

    // Dispatch the addUser action to add the new user to the Redux store
    dispatchAddUser(newUser);

    // Optionally, you can clear the form fields or perform other actions
    setUsername('');
    setPassword('');
  };

  return (
    <div className="account-form-container">
      <label>Username:</label>
      <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />

      <label>Password:</label>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

      <button onClick={handleSubmit}>Create Account</button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchAddUser: (user) => dispatch(addUser(user)),
  };
};

export default connect(null, mapDispatchToProps)(AccountCreationForm);
