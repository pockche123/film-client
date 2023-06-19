import {URI} from './Http'
import { getByFilmTitle } from "./Api";


export const getDiscussionByFilmTitle = (title: string) => getByFilmTitle(URI.Discussion, title);