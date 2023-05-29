
import { login } from '../API/Auth'
import { URI } from '../API/Http';
import { AxiosInstance } from 'axios';


export const handleLogin = (
  loginDetails: any,
  navigate: Function,
  setWrongCred: Function,
  setAuth: Function,
  setErrMessage: Function,
  from: any,
  axiosPrivate: AxiosInstance
) => {
  login(loginDetails)
    .then(res => {
      console.log('handlelogin ', res.data)
      const accessToken = res.data.token
      const refreshToken = res.data.refreshToken

     localStorage.setItem('REFRESHTOKEN', refreshToken)

      handleCurrentUser(
        accessToken,
        navigate,
        setWrongCred,
        setAuth,
        refreshToken,
        from, 
        axiosPrivate
      )
    })
    .catch(e => {
      console.log(e)
      if (!e?.response) {
        setErrMessage('No Server Reponse')
      } else if (e.response?.status === 400) {
        setErrMessage('Missing Username or Password')
      } else if (e.response?.status === 403) {
        setErrMessage('Unauthorized')
      } else {
        setErrMessage('Login failed')
      }

      setWrongCred(true)
    })
}

export const handleCurrentUser = (
  accessToken: string,
  navigate: Function,
  setWrongCred: Function,
  setAuth: Function,
  refreshToken: string,
  from: any,
  axiosPrivate: AxiosInstance
) => {

  axiosPrivate.get(URI.Auth + '/current-user', {
  headers: {
    Authorization: `Bearer ${accessToken}`
  }
})
  // getTheCurrentUser(accessToken)
    .then(response => {
      // Handle the successful response here
      // console.log("handleCurrentUser ,", response.data)
      const user = response?.data
      const role = response?.data.role
      // console.log("this is ROLE, ", role)

      setAuth({ user, accessToken, role, refreshToken })
      const username = response.data.username

      // navigate(Paths.userPage + username)
      navigate(from, { replace: true, state:{user} })
    })
    .catch(error => {
      // Handle the error here
      setWrongCred(true)

      console.error(error)
    })
}

