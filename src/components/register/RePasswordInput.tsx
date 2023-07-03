import { faEye, faEyeSlash, faKey } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { handleTogglePassword } from '../services/Utils/PasswordUtils'
import { ChangeEvent } from 'react'
import { RePasswordInputProps } from '../../interfaces/IAuth'

const RePasswordInput = (props: RePasswordInputProps) => {
  const {
    showRePassword,
    rePassword,
    password,
    setPasswordSame,
    setRePassword,
    validPassword,
    passwordSame,
    setShowRePassword
  } = props

  const handleRePassword = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    const inputRePassword = e.target.value
    setRePassword(inputRePassword)
    const samePasswords = inputRePassword === password
    setPasswordSame(samePasswords)
  }

  return (
    <div className='user-login-password'>
      <div className='icon-box'>
        <FontAwesomeIcon icon={faKey} className='fa-user-password' />
      </div>
      <input
        type={showRePassword ? 'text' : 'password'}
        className='form-control login-input'
        placeholder='Reenter the password'
        value={rePassword}
        onChange={handleRePassword}
        disabled={!validPassword}
        style={{
          boxShadow:
            !passwordSame && rePassword.length > 7 ? '0 0 3px #CC0000' : 'none'
        }}
      />
      <FontAwesomeIcon
        icon={showRePassword ? faEyeSlash : faEye}
        className='fa-user-eye'
        onClick={() => handleTogglePassword(setShowRePassword, showRePassword)}
      />
    </div>
  )
}

export default RePasswordInput
