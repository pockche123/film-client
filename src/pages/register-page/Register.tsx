import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import './Register.css'
import { register } from '../../components/services/API/Auth'
import UsernameInput from '../../components/register/UsernameInput'
import EmailInput from '../../components/register/EmailInput'
import PasswordInput from '../../components/register/PasswordInput'
import RePasswordInput from '../../components/register/RePasswordInput'
import InvalidCases from '../../components/register/InvalidCases'

const Register = () => {
  const [username, setUsername] = useState('')
  const [usernameTaken, setUsernameTaken] = useState<boolean>(false)
  const [invalidUserLength, setInvalidUserLength] = useState<boolean>(false)
  const [email, setEmail] = useState('')
  const [emailInvalid, setEmailInvalid] = useState<boolean>(false)
  const [password, setPassword] = useState<string>('')
  const [noCapitalLetter, setNoCapitalLetter] = useState<boolean>(false)
  const [noSpecialCharacter, setNoSpecialCharacter] = useState<boolean>(false)
  const [validPassword, setValidPassword] = useState<boolean>(false)
  const [invalidPasswordLength, setInvalidPasswordLength] =
    useState<boolean>(false)
  const [showPassword, setShowPassword] = useState(false)
  const [rePassword, setRePassword] = useState<string>('')
  const [showRePassword, setShowRePassword] = useState(false)
  const [passwordSame, setPasswordSame] = useState(false)
  const [registerSuccess, setRegisterSuccess] = useState(false)


  const invalidCasesProps = {
  registerSuccess,
  usernameTaken,
  username,
  invalidUserLength,
  password,
  emailInvalid,
  email,
  noCapitalLetter,
  noSpecialCharacter,
  invalidPasswordLength,
  passwordSame,
  rePassword
}


  const handleRegister = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const user = {
      username: username,
      email: email,
      password: password
    }
    if (
      !noCapitalLetter &&
      !noSpecialCharacter &&
      validPassword &&
      !emailInvalid &&
      !usernameTaken
    ) {
      register(user)
        .then(res => {
          setRegisterSuccess(true)
          setEmail('')
          setPassword('')
          setRePassword('')
          setUsername('')
        })
        .catch(e => {
          console.log(e)
          setRegisterSuccess(false)
        })
    }
  }

  return (
    <form
      className='register-form image-half-left'
      onSubmit={e => handleRegister(e)}
    >
      <div className='register-image'>
        <img
          src='https://wallpaperaccess.com/full/244942.jpg'
          alt='register-pic'
        />
      </div>
      <div className='register-form-container '>
        <div className='register-form-heading'>
          <h3>
            <b>Join us in the Studio</b>
          </h3>
        </div>
        <p />
        <div className='user-login-input'>
          <UsernameInput
            setUsername={setUsername}
            setUsernameTaken={setUsernameTaken}
            setInvalidUserLength={setInvalidUserLength}
            username={username}
            usernameTaken={usernameTaken}
          />
        </div>
        <div className='user-login-input'>
          <EmailInput
            setEmail={setEmail}
            setEmailInvalid={setEmailInvalid}
            email={email}
            emailInvalid={emailInvalid}
          />
        </div>
        <div className='user-login-password'>
          <PasswordInput
            showPassword={showPassword}
            password={password}
            validPassword={validPassword}
            setPassword={setPassword}
            setInvalidPasswordLength={setInvalidPasswordLength}
            setNoCapitalLetter={setNoCapitalLetter}
            setNoSpecialCharacter={setNoSpecialCharacter}
            setValidPassword={setValidPassword}
            setShowPassword={setShowPassword}
          />
        </div>
        <div className='user-login-password'>
          <RePasswordInput 
            showRePassword={showRePassword}
            rePassword={rePassword}
            password={password}
            setPasswordSame={setPasswordSame}
            setRePassword={setRePassword}
            validPassword={validPassword}
            passwordSame={passwordSame}
            setShowRePassword={setShowRePassword}
          />
        </div>
        <p />
        <button
          className='btn btn-primary'
          type='submit'
          style={{ paddingLeft: '7%', paddingRight: '7%', marginTop: '7%' }}
          disabled={
            noCapitalLetter ||
            noSpecialCharacter ||
            !validPassword ||
            emailInvalid ||
            usernameTaken
          }
        >
          Register
        </button>
        <div>
          <InvalidCases {...invalidCasesProps} />
        </div>
      </div>
    </form>
  )
}

export default Register
