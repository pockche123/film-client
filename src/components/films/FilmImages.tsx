import React, { useEffect } from 'react'
import Carousel from 'react-material-ui-carousel';
import { useLocation } from 'react-router-dom'
import { Film } from '../interfaces/IFilm';
import './FilmNav.css'


const FilmImages = ({ film }: { film: Film }) => {
    
    const location = useLocation()
    const backdrops = film.backdrops;

    useEffect(() => {
        console.log("BACKDROPS, ", backdrops)
    },[])

  return (
      <div className="film-images-container">
          <Carousel>
             {
  backdrops.map((image, index) => (
    <img src={image} alt={`Backdrop ${index}`} key={index} />
  ))
}

          </Carousel>
          

      </div>
  )
}

export default FilmImages