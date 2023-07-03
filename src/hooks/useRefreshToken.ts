import useAuth from './useAuth'
import { getRefreshToken } from '../components/services/API/Auth'
import { getTheCurrentUser } from '../components/services/API/Users'

const useRefreshToken = () => {
  const { auth, setAuth } = useAuth() as any

  const refresh = async () => {
    // const response = await getRefreshToken(auth.refreshToken)

    const rtoken = localStorage.getItem('REFRESHTOKEN') || 'null'
    const response = await getRefreshToken(rtoken)

    const user = await getTheCurrentUser(response.data.token)
    setAuth((prev: any) => {
      console.log('prev, ', prev)
      console.log('new access token, ', response.data.token)
      // console.log("user role ", user.data.role)

      return {
        ...prev,
        role: user.data.role,
        accessToken: response.data.token
      }
    })

    return response.data.token
  }

  return refresh
}

export default useRefreshToken
