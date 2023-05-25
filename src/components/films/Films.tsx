import React, { useEffect, useState } from 'react'
import axios from 'axios'
import FilmCard from './FilmCard'
import { Film } from '../interfaces/IFilm'
import Carousel from 'react-material-ui-carousel'

import './Films.css'
import { getAllFilms } from '../services/API/Films'

const Films = () => {
  const [films, setFilms] = useState<Array<Film>>([])

  const getFilms = async () => {
    try {
      const response = await getAllFilms()

      setFilms(response.data.slice(5, 9))
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getFilms()
  })

  return (
    <div className='homePage'>
      <div className='film-carousel-container'>
        <Carousel>
          {films?.map(film => (
            <FilmCard key={film.imdbId} film={film} /> //"ths is interfaceProps: this is the value that is being passed"
          ))}
        </Carousel>
      </div>
    </div>
  )
}

export default Films
