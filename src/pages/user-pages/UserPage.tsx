import axios from 'axios'
import React, { useEffect, useState } from 'react'
import useRefreshToken from '../../hooks/useRefreshToken'
import useAuth from '../../hooks/useAuth'
import { useNavigate } from 'react-router-dom'
import { useLogout } from '../../hooks/useLogout'

const UserPage = () => {
  const api = 'http://localhost:8080/api/v1/check'
  const [data, setData] = useState('')
  const refresh = useRefreshToken()
  const { auth } = useAuth() as any
  const token = auth.accessToken
  const navigate = useNavigate()
  const handleLogout = useLogout()

  const fetchData = async () => {
    try {
      const response = await axios.get(api, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      console.log('res: ', response.data)
      setData(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    console.log('ACCESS TOKEN: ', token)
    fetchData()
  }, [])

  const handleClick = () => {
    navigate('/demoPage')
  }

  return (
    <div>
      UserPage
      <button onClick={() => refresh()}>Refresh</button>
      <div style={{ width: '500px' }}>{token}</div>
      <p />
      <button onClick={() => handleClick()}>Go to Demo page</button>
      <p />
      <button onClick={() => handleLogout()}>Logout</button>
    </div>
  )
}

export default UserPage
