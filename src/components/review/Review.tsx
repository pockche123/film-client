import React from 'react'
import { Film } from '../interfaces/IFilm'

const Review = ({ film }: { film: Film }) => {
    
    const filmTitle = film.title; 


  return (
    <div>Review</div>
  )
}

export default Review