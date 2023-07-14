import { Film } from "./IFilm"

export interface IStream{
    id: string
    name: string
    icon: string 
    link: string 
    film: Film
    country: string 
}