import { getByFilmTitle } from "./Api";
import { URI } from "./Http";



export const getStreamByFilm = (title: string) => getByFilmTitle(URI.Stream, title);