import { get, getReviewsByFilm } from "./Api";
import { URI } from "./Http";


export const getReviewsByFilmTitle = (title: string) => getReviewsByFilm(URI.Review, title);

export const getReviewById = (id: string) => get(URI.Review, id);