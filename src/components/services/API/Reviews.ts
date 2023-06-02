import { getReviewsByFilm } from "./Api";
import { URI } from "./Http";


export const getReviewsByFilmTitle = (title: string) => getReviewsByFilm(URI.Review, title);