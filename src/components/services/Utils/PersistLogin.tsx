import { useEffect, useState } from 'react'
import useRefreshToken from '../../hooks/useRefreshToken'
import useAuth from '../../hooks/useAuth'
import { Outlet } from 'react-router-dom'

const PersistLogin = () => {
  const [isLoading, setIsLoading] = useState(true)
  const refresh = useRefreshToken()
  const { auth, persist } = useAuth() as any

  useEffect(() => {


    const verifyRefreshToken = async () => {
      try {
        await refresh()
      } catch (err) {
        console.error(err)
      } finally {
     setIsLoading(false)
      }
    }

    !auth?.accessToken ? verifyRefreshToken() : setIsLoading(false)
  

  }, [])

  return (
    <>{!persist ? <Outlet /> :
      isLoading ? <p>Loading...</p> :
        <Outlet />}</>
  )
}

export default PersistLogin
