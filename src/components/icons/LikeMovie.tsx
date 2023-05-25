
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import './LikeMovie.css'


const LikeMovie = () => {
  return (
   <div className='like-movie'>
  <FontAwesomeIcon icon={faHeart} />
</div>

  )
}

export default LikeMovie