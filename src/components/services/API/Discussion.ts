import {URI} from './Http'
import { getByFilmTitle, get } from "./Api";


export const getDiscussionByFilmTitle = (title: string) => getByFilmTitle(URI.Discussion, title);


export const getDiscussionById = (id: string) => get(URI.Discussion, id);