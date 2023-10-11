import { Film } from './IFilm';
import { IUser } from './IUser';


export interface IFavourite{


    favouriteId: string 
    film: Film
    user: IUser
}