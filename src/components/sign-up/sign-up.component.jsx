import React, { useState } from "react"
import { connect } from 'react-redux'
import FormInput from "../form-input/form-input.component"
import CustomButton from "../custom-button/custom-button.component"

import './sign-up.styles.scss'
import { signUpStart } from '../../redux/user/user.actions'

const SignUp = ({ signUpStart }) => {
  const [userCredentials, setCredentials] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  const { displayName, email, password, confirmPassword } = userCredentials
  const handleSubmit = async event => {
    event.preventDefault()
    if (password !== confirmPassword) {
      alert("passwords don't match")
      return
    }

    signUpStart({ displayName, email, password })
  }

  const handleChange = event => {
    const { name, value } = event.target
    setCredentials({ ...userCredentials, [name]: value })
  }

  return (
      <div className='sign-up'>
        <h2 className="title">I do not have an account</h2>
        <span>Sign up with your email and password</span>
        <form onSubmit={ handleSubmit } className="sign-up-form">
          <FormInput
              type='text'
              name='displayName'
              value={ displayName }
              onChange={ handleChange }
              label='Display Name'
          />
          <FormInput
              type='email'
              name='email'
              value={ email }
              onChange={ handleChange }
              label='Email'
          />
          <FormInput
              type='password'
              name='password'
              value={ password }
              onChange={ handleChange }
              label='Password'
          />
          <FormInput
              type='password'
              name='confirmPassword'
              value={ confirmPassword }
              onChange={ handleChange }
              label='Confirm Password'
          />
          <CustomButton type='submit'>Sign UP </CustomButton>
        </form>
      </div>
  )
}

const mapDispatchToProps = dispatch => ({
  signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
})

export default connect(null, mapDispatchToProps)(SignUp)