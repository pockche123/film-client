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
    navigate(Paths.allDiscussions)
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
          <div style={{ display: 'column' }}>
            <h4>{filmTitle}</h4>
            <h5>({year})</h5>
          </div>
        </div>
      </div>
       <p/>
      <div className='d-tags'>
        <label className='d-back' onClick={handleBack}>
           <h6>← Back to main</h6>
        </label>{' '}
        <p />
        <label className='d-back' onClick={handleToDiscussions}>
          <h6>  Go to all discussions → </h6>
        </label>
      </div>
    </div>
  )
}

export default DiscussionFlexOne
