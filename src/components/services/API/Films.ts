import { getTitle, getAll } from './Api'
import { URI } from './Http'

export const getFilmByTitle = (title: string) => getTitle(URI.Films, title)

export const getAllFilms = () => getAll(URI.Films)
