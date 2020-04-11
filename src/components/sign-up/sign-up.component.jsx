import React, { useState } from 'react';
import { connect } from 'react-redux';

import { SignUpContainer, SignUpTitle } from './sign-up.styles';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { signUpStart } from '../../redux/user/user.actions';

const SignUp = ({ signUpStart }) => {
  const [userCredentials, setUserCredentials] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const { displayName, email, password, confirmPassword } = userCredentials;

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("password don't match");
      return;
    }

    signUpStart({ email, password, displayName });

    // clear form out
    setUserCredentials({
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
    });
  };

  const handleChange = (event) => {
    const { value, name } = event.target;

    setUserCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <SignUpContainer>
      <SignUpTitle>I do not have an account</SignUpTitle>
      <span className='sub-title'>Sign up with email and password</span>
      <form className='sign-up-form' onSubmit={handleSubmit}>
        <FormInput
          type='text'
          name='displayName'
          value={displayName}
          label='Display Name'
          handleChange={handleChange}
          required
        />
        <FormInput
          type='email'
          name='email'
          value={email}
          label='Email'
          handleChange={handleChange}
          required
        />
        <FormInput
          type='password'
          name='password'
          value={password}
          label='Password'
          handleChange={handleChange}
          required
        />
        <FormInput
          type='password'
          name='confirmPassword'
          value={confirmPassword}
          label='Confirm Password'
          handleChange={handleChange}
          required
        />
        <CustomButton type='submit'>Sign Up</CustomButton>
      </form>
    </SignUpContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials))
});

export default connect(null, mapDispatchToProps)(SignUp);
