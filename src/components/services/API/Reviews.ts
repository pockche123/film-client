import { get, getByFilmTitle, getByUsername } from "./Api";
import { URI } from "./Http";


export const getReviewsByFilmTitle = (title: string) => getByFilmTitle(URI.Review, title);

export const getReviewById = (id: string) => get(URI.Review, id);

export const getReviewsByUsername = (username: string) => getByUsername(URI.Review, username);