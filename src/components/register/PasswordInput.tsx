import { faEye, faEyeSlash, faLock } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { ChangeEvent } from 'react'
import { PasswordInputProps } from '../../interfaces/IAuth'
import { handleTogglePassword } from '../services/Utils/PasswordUtils'

const PasswordInput = (props: PasswordInputProps) => {
  const {
    showPassword,
    password,
    validPassword,
    setPassword,
    setInvalidPasswordLength,
    setNoCapitalLetter,
    setNoSpecialCharacter,
    setValidPassword,
    setShowPassword
  } = props

  const handlePassword = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    const inputPassword = e.target.value

    setPassword(inputPassword)

    const hasCapitalLetter = /[A-Z]/.test(inputPassword)
    const hasSpecialCharacter = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/.test(
      inputPassword
    )
    const isPasswordValid =
      inputPassword.length > 7 && hasCapitalLetter && hasSpecialCharacter

    setInvalidPasswordLength(
      inputPassword.length < 8 && inputPassword.length > 0
    )
    setNoCapitalLetter(!hasCapitalLetter)
    setNoSpecialCharacter(!hasSpecialCharacter)
    setValidPassword(isPasswordValid)
  }

  return (
    <div className='user-login-password'>
      <div className='icon-box'>
        <FontAwesomeIcon icon={faLock} className='fa-user-password' />
      </div>
      <input
        type={showPassword ? 'text' : 'password'}
        className='form-control login-input'
        placeholder='Create a password'
        value={password}
        style={{
          boxShadow:
            !validPassword && password.length > 7 ? '0 0 3px #CC0000' : 'none'
        }}
        onChange={handlePassword}
      />
      <FontAwesomeIcon
        icon={showPassword ? faEyeSlash : faEye}
        className='fa-user-eye'
        onClick={() => handleTogglePassword(setShowPassword, showPassword)}
      />
    </div>
  )
}

export default PasswordInput
