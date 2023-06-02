

export interface TrailerButtonProps {
  trailerLink: string
}

export interface Film {
    imdbId: string
    title: string 
    poster: string
    backdrops: string[]
    overview: string
    quote: string
  year: number
  releaseDate: Date
  pgRating: string
  duration: number
  genres: string[]
  trailerLink: string
}

  
  
export interface TrailerButtonProps {
  trailerLink: string
}


export interface FilmProps {
  film: Film
}


