
import { create, refreshTheToken } from './Api';
import { URI } from './Http'


export const login = (loginDetails: any) => {
  const loginURI = URI.Auth + '/login'
  return create(loginURI, loginDetails)
}


export const register = (userDetails: any) => {
  const registerURI = URI.Auth + '/register'
  return create(registerURI, userDetails)
}


export const getRefreshToken = (refreshToken: string) => {
  return refreshTheToken(URI.Auth, refreshToken)
}



