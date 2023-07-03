import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { ChangeEvent } from 'react'
import { EmailInputProps } from '../../interfaces/IAuth'

const EmailInput = (props: EmailInputProps) => {
  const { setEmail, setEmailInvalid, email, emailInvalid } = props

  const handleEmail = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    const inputEmail = e.target.value
    setEmail(inputEmail)

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    setEmailInvalid(!emailRegex.test(inputEmail))
  }

  return (
    <div className='user-login-input'>
      <div className='icon-box'>
        <FontAwesomeIcon icon={faEnvelope} />
      </div>
      <input
        type='text'
        className='form-control login-input'
        placeholder='Enter your email'
        value={email}
        style={{
          boxShadow:
            emailInvalid && email.length > 15 ? '0 0 3px #CC0000' : 'none'
        }}
        onChange={handleEmail}
      />
    </div>
  )
}

export default EmailInput
