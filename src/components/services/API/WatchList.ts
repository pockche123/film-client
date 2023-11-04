import { getByUsername } from "./Api"
import { URI } from "./Http"


export const getWatchListByUser = (username: string) => {
    return getByUsername(URI.WatchList, username); 
}