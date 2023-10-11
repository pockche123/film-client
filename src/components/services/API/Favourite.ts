
import { create, deleteObject, getByUsername } from "./Api";
import { URI } from "./Http";



export const getFavouritesByUsername = (username: string) => getByUsername(URI.Favourite, username);

export const createFavourites = (favourite: any) => create(URI.Favourite, favourite);


export const deleteFavouriteObject = (id: string) => deleteObject(URI.Favourite, id); 