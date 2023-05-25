import React, { FormEvent, useEffect, useState } from 'react'
import { handleLogin } from '../services/Utils/LoginUtils'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faEye,
  faLock,
  faUser,
  faEyeSlash,
  faX
} from '@fortawesome/free-solid-svg-icons'
import useAuth from '../hooks/useAuth'
import { Paths } from '../services/Utils/Paths'

const UserLogin = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false)
  const [wrongCred, setWrongCred] = useState(false)
  const [errMessage, setErrMessage] = useState('')
  const location = useLocation()
  const from = location.state?.from?.pathname || Paths.userPage + username

  const { setAuth, persist, setPersist } = useAuth() as any

  const handleTogglePassword = () => {
    setShowPassword(!showPassword)
  }

  const handleUserLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('INNSIDE THE BUTTON')
    const userLoginDetails = {
      username: username,
      password: password
    }
    // handleLogin(userLoginDetails, navigate)
    await handleLogin(
      userLoginDetails,
      navigate,
      setWrongCred,
      setAuth,
      setErrMessage,
      from
    )
  }

  const togglePersist = () => {

    setPersist((prev: any) => !prev);
  
  
  }

  useEffect(() => {
    localStorage.setItem("persist", persist)
   if (persist === false) {
  localStorage.clear()
}


  }, [persist])

  return (
    <form className='user-login-container' onSubmit={handleUserLogin}>
      <div className='user-login-heading'>
        <h5>
          <b>Sign in</b>
        </h5>
      </div>
      <div className='user-login-username'>
        <div className='icon-box'>
          <FontAwesomeIcon icon={faUser} className='fa-user-user' />
        </div>
        <input
          type='text'
          className='form-control login-input'
          placeholder='Type your username'
          value={username}
          onChange={e => {
            setUsername(e.target.value)
            setWrongCred(false)
          }}
        />
      </div>

      <div className='user-login-password'>
        <div className='icon-box'>
          <FontAwesomeIcon icon={faLock} className='fa-user-password' />
        </div>
        <input
          type={showPassword ? 'text' : 'password'}
          className='form-control login-input'
          placeholder='Type your password'
          value={password}
          onChange={e => {
            setPassword(e.target.value)
            setWrongCred(false)
          }}
        />
        <FontAwesomeIcon
          icon={showPassword ? faEyeSlash : faEye}
          className='fa-user-eye'
          onClick={handleTogglePassword}
        />
      </div>

      <div
        className='user-login-forgot'
        style={{
          textAlign: 'left',
          marginLeft: '9%',
          fontSize: 'small',
          paddingTop: '4px'
        }}
      >
        <Link to='/'>Forgot password</Link>
      </div>
      <p />
      <div className="persist-check">
        <input type="checkbox"
          id="persist"
          onChange={togglePersist}
          checked={persist}
        />
        <label htmlFor='persist'>Trust this device</label>
       

      </div>
      <div style={{ height: '30px' }}>
        {wrongCred && (
          <span className='alert alert-danger' style={{ height: '20px' }}>
            <FontAwesomeIcon
              icon={faX}
              style={{
                height: '10px',
                paddingBottom: '2px',
                borderRadius: '50%'
              }}
            />{' '}
            <span />
            {errMessage}
          </span>
        )}
      </div>

      <p />
      <div>
        <button
          className='btn btn-primary'
          type='submit'
          style={{ paddingLeft: '10%', paddingRight: '11%' }}
        >
          Login
        </button>
      </div>
    </form>
  )
}

export default UserLogin
