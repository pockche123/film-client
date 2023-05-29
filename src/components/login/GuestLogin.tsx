import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faX } from '@fortawesome/free-solid-svg-icons'
import { useLocation, useNavigate } from 'react-router-dom'
import { handleLogin } from '../services/Utils/LoginUtils'
import { useEffect, useState } from 'react'
import useAuth from '../hooks/useAuth'
import { Paths } from '../services/Utils/Paths'
import { useAxiosPrivate } from '../hooks/useAxiosPrivate'

const GuestLogin = () => {
  const navigate = useNavigate()
  const [wrongCred, setWrongCred] = useState(false)
  const { setAuth, persist, setPersist } = useAuth() as any
  const [errMessage, setErrMessage] = useState('')
  const location = useLocation()
  // const username = 'guest1'
  const from = location.state?.from?.pathname || Paths.userPage;
  const axiosPrivate = useAxiosPrivate()


  const handleGuestLogin = () => {
    const guestLoginDetails = {
      username: 'guest1',
      password: 'Password9!'
    }

    handleLogin(
      guestLoginDetails,
      navigate,
      setWrongCred,
      setAuth,
      setErrMessage,
      from,
      axiosPrivate
    )
  }

  const togglePersist = () => {
  setPersist((prev: any) => !prev)
}

useEffect(() => {
  localStorage.setItem('persist', persist)
  if (persist === false) {
    localStorage.clear()
  }
}, [persist])


  return (
    <div className='guest-login-container' style={{ paddingTop: '5px' }}>
      <div className='guest-login-heading' style={{ marginBottom: '10%' }}>
        <h5>
          <b>Sign in as a guest</b>
        </h5>
      </div>
      <div>
        <FontAwesomeIcon
          className='fa-guest-user'
          icon={faUser}
          style={{
            height: '100px',
            // border: '6px solid gray',
            borderRadius: '5px',
            padding: '5px',
            cursor: 'pointer'
          }}
          onClick={handleGuestLogin}
        />
      </div>
      <label>Guest</label>
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
    </div>
  )
}

export default GuestLogin
