import { UseScrollTriggerOptions } from "@mui/material/useScrollTrigger/useScrollTrigger"
import { Film } from "./IFilm"
import { IUser } from "./IUser"



export interface Discussion{
    film: Film
    user: IUser
    title: string
    description: string 
    likes: number
    id: string
}