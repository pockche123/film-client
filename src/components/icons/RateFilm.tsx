import React from 'react'
import './RateFilm.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'


const RateFilm = () => {
  return (
   <div className='rate-film'>
  <FontAwesomeIcon icon={faStar} />
</div>

  )
}

export default RateFilm