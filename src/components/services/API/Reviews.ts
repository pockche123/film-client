import { get, getByFilmTitle } from "./Api";
import { URI } from "./Http";


export const getReviewsByFilmTitle = (title: string) => getByFilmTitle(URI.Review, title);

export const getReviewById = (id: string) => get(URI.Review, id);