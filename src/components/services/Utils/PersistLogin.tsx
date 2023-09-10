import { useEffect, useState } from 'react'
import useRefreshToken from '../../../hooks/useRefreshToken'
import useAuth from '../../../hooks/useAuth'
import { Outlet } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilm, faUtensils } from '@fortawesome/free-solid-svg-icons'
import './Loading.css'

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
    <>{!persist ? <Outlet /> : isLoading ? 
    <section className='loading'>
  <FontAwesomeIcon className="beating" icon={faFilm}/>
  <h3>
    Loading &nbsp;<span>.</span>&nbsp;<span>.</span>&nbsp;<span>.</span>
  </h3>
</section>

    
    
    : <Outlet />}</>
  )
}

export default PersistLogin
