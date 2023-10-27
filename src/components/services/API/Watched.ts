import { getByUsername } from "./Api"
import { URI } from "./Http"





export const getWatchedByUser =  (username: string) => {
 return   getByUsername(URI.Watched, username);

}