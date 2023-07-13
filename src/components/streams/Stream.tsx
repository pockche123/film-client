import React from 'react'
import TrailerButton from '../icons/TrailerButton'
import { Film } from '../../interfaces/IFilm'
import './Stream.css'

const Stream = ({ film }: { film: Film }) => {
    const trailerLink = film.trailerLink

  return (
    <div className='streams'>
          <div className="stream-head">
              <h5 id="stream-head-tag"><b>Watch here</b></h5>
          <TrailerButton trailerLink={trailerLink} />
          </div>
          <div>
              
          </div>
</div>

  )
}

export default Stream