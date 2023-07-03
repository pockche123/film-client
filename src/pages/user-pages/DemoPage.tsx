import React, { useEffect, useState } from 'react'
import useAuth from '../../hooks/useAuth'
import { useAxiosPrivate } from '../../hooks/useAxiosPrivate'
import { useLocation, useNavigate } from 'react-router-dom'
import { Paths } from '../../components/services/Utils/Paths'
import { useLogout } from '../../hooks/useLogout'

const DemoPage = () => {
  const api = 'http://localhost:8080/api/v1/check'
  const [data, setData] = useState('')
  const { auth } = useAuth() as any
  const token = auth.accessToken
  const location = useLocation()

  const axiosPrivate = useAxiosPrivate()
  const navigate = useNavigate()
  const handleLogout = useLogout()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosPrivate.get(api, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })

        setData(response.data)
      } catch (error) {
        console.log(error)
        navigate(Paths.login, { state: { from: location }, replace: true })
      }
    }

    console.log('ACCESS TOKEN: ', token)
    fetchData()
  }, [])

  return (
    <div>
      {data}

      <div>
        <button onClick={() => handleLogout()}> logout </button>
      </div>
    </div>
  )
}

export default DemoPage
