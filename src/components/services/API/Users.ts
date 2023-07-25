
import { IUser } from '../../../interfaces/IUser'
import { create, getAll, getCurrentUser, get } from './Api'
import { URI } from './Http'

export const getAllUsers = () => getAll(URI.Users)

export const getTheCurrentUser = (token: string) => {
  return getCurrentUser(URI.Auth, token)
}

export const createNewUser = (user: IUser) => {
  return create(URI.Users, user)
}

export const getAUser = (username: string) => get(URI.User,username);
