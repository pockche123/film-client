import React, { useEffect } from 'react'

const LoginNav = ({
  guestLogin,
  setGuestLogin
}: {
  guestLogin: boolean
  setGuestLogin: (value: boolean) => void
    }) => {
    
    useEffect(() => {
  const storedGuestLogin = localStorage.getItem('guestLogin')
  if (storedGuestLogin) {
    setGuestLogin(JSON.parse(storedGuestLogin))
  }
}, [])

    
    
  return (
    <div className='login-nav-container'>
      <div className='nav-to-guest'>
        <label
          className='login-nav-label'
          style={{
            cursor: 'pointer',
            boxShadow: guestLogin ? 'inset 0 0 8px rgba(0, 0, 0, 0.2)' : 'none',

              width: '50%',
            padding: '2%'
            
          }}
                  onClick={() => {
                      setGuestLogin(true)
                      localStorage.setItem('guestLogin', JSON.stringify(true))
                  }
          }
        >
          Guest
        </label>
        <label
          className='login-nav-label'
          style={{
            cursor: 'pointer',
            boxShadow: !guestLogin
              ? 'inset 0 0 8px rgba(0, 0, 0, 0.2)'
              : 'none',
              width: '50%',
            padding: '2%'

          }}
                  onClick={() => {
                      setGuestLogin(false)
                      localStorage.setItem('guestLogin', JSON.stringify(false))
                  }
                  }
        >
          User
        </label>
      </div>
    </div>
  )
}

export default LoginNav
