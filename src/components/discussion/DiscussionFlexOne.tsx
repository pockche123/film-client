import { faFilm } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect } from 'react'
import './DiscussionFlexOne.css'
import { useNavigate } from 'react-router-dom'
import { Paths } from '../services/Utils/Paths'

const DiscussionFlexOne = ({ film }: { film: any }) => {
  const navigate = useNavigate()
  const filmTitle = film?.title
  const imdb = film?.imdbId
  const poster = film?.poster
  const year = film?.year

  const handleBack = () => {
    navigate(Paths.imdbId + imdb, { state: { film } })
  }

  const handleToDiscussions = () => {
    
  }

  return (
    <div className='discussion-one'>
      <FontAwesomeIcon icon={faFilm} />
      Studio
      {/* <div className='film-diss-back' onClick={handleBack}>
       <h5 style={{marginLeft: '0.5em'}}> Back to {filmTitle}</h5>
      </div> */}
      <p />
      <div className='discussion-back'>
        <img src={poster} alt='film-poster' /> &nbsp; &nbsp;
        <div>
          <div style={{ display: 'column', marginLeft: '1em' }}>
            <h1>{filmTitle}</h1>
            <h2>({year})</h2>
          </div>
        </div>
      </div>
      <div className='d-tags'>
        <label className='d-back' onClick={handleBack}>
          <h5> ← Back to main</h5>
        </label>{' '}
        <p />
        <label className='d-back' onClick={handleToDiscussions}>
          <h5> Go to all discussions →</h5>
        </label>
      </div>
    </div>
  )
}

export default DiscussionFlexOne
