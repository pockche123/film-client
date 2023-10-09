import axios, { AxiosInstance } from "axios"

const BASE_URL="http://localhost:8080"
const version="/api/v1"
const site = BASE_URL + version
export const URI = {
    Films: site + "/films",
    Users: site + "/users",
    Auth: site + "/auth",
  Review: site + "/review",
  Discussion: site + "/discussion",
    comment: site + "/comment",
    Stream: site  + "/stream",
  User: site + "/user",
    Favourite: site+"/favourites"
}


export const axiosPrivate: AxiosInstance = axios.create({
  baseURL: BASE_URL
})
