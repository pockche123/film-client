import React from 'react'
import { Film } from '../../interfaces/IFilm'
import { useNavigate } from 'react-router-dom'
import { Paths } from '../services/Utils/Paths'

const BackToMain = ({ film }: { film: Film }) => {
    const navigate = useNavigate()
    const poster = film.poster
    const filmTitle = film.title
    const year = film.year
    const imdb = film.imdbId

    const handleBackToMain = () => {
  navigate(Paths.imdbId +  imdb, {state: {film}})
}

  return (
    <div className='reviews-back-to-page'>
  <img src={poster} alt='film-poster' /> &nbsp; &nbsp;
  <div>
    <div style={{ display: 'flex' }}>
      <h1>{filmTitle}</h1>&nbsp; <h2 style={{ marginTop: '2%' }}>({year})</h2>
    </div>
    <label onClick={handleBackToMain} style={{ cursor: 'pointer' }}>
      <h5> ← Back to main</h5>
    </label>
  </div>
</div>

  )
}

export default BackToMain