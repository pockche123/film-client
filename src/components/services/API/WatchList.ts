import { getByUsername } from "./Api"
import { URI } from "./Http"


export const getWatchListByUsername = (username: string) => {
    return getByUsername(URI.WatchList, username); 
}