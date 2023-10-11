import axios from 'axios'
import { useAxiosPrivate } from '../../../hooks/useAxiosPrivate'

export const getAll = async (URI: string) => await axios.get(URI)

export const get = async (URI: string, id: string) =>
  await axios.get(URI + '/' + id)



export const getByUsername = async (URI: string, username: string| undefined) => 
  await axios.get(URI + '/user/' + username)



export const getTitle = async (URI: string, title: string) =>
  await axios.get(URI + '/title/' + title)

export const getByFilmTitle = async (URI: string, title: string) =>
  await axios.get(URI + '/film/' + title)

export const getByDiscussionId = async (URI: string, id: string) =>
  await axios.get(URI + '/discussion/' + id)

export const getChildrenById = async (URI: string, id: string) =>
  await axios.get(URI + '/children/' + id)

export const getParentByDiscussionId = async (URI: string, id: string) =>
  await axios.get(URI + '/parent/discussion/' + id)

export const getChildrenByDiscussionid = async (URI: string, id: string) =>
  await axios.get(URI + '/children/discussion/' + id)

export const getCurrentUser = async (URI: string, token: string) =>
  await axios.get(URI + '/current-user', {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })

export const GetCurrentUser = async (URI: string, token: string) => {
  const axiosPrivate = useAxiosPrivate()
  return await axiosPrivate.get(URI + '/current-user', {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
}

export const refreshTheToken = async (URI: string, token: string) =>
  await axios.get(URI + '/refresh-token', {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })

export const create = async (URI: string, newObject: any) =>
  await axios.post(URI, newObject)


export const deleteObject = async (URI: string, id: string) => 
    await axios.delete(URI + '/' + id)
  