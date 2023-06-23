import { Film } from "./IFilm"
import { IUser } from "./IUser"



export interface IDiscussion{
    film: Film
    user: IUser
    title: string
    description: string 
    likes: number
    id: string
    timestamp: string
}