
import { create, getByUsername } from "./Api";
import { URI } from "./Http";



export const getFavouritesByUsername = (username: string | undefined) => getByUsername(URI.Favourite, username);

export const createFavourites = (favourite: any) => create(URI.Favourite, favourite);