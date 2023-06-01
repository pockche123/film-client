import React, { useState } from 'react'
import { Film } from '../interfaces/IFilm'
import { useLocation } from 'react-router-dom'

const FilmPoster = ({ film }: { film: Film }) => {
    
    const location = useLocation();
    const poster = location.state && location.state.film.poster

    const [enlarged, setEnlarged] = useState(false)


    function toggleEnlarged () {
  setEnlarged(!enlarged)
}

    return (
      <div className='poster'>
  <img src={poster} alt='film poster' onClick={() => toggleEnlarged()} />
  {enlarged && (
    <div className='overlay' onClick={() => toggleEnlarged()}>
      <img src={poster} alt='film poster' className='enlarged' />
    </div>
  )}
</div>

  )
}

export default FilmPoster