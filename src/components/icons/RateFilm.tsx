import React, { useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import './RateFilm.css'
import Rate from './Rate'

const RateFilm = () => {
  const userLoggedIn = true

  const [showPopover, setShowPopover] = useState(false)

  const handleClick = () => {
    if (userLoggedIn) {
      setShowPopover(prevState => !prevState)
    }
  }

  return (
    <>
      <div
        className={`rate-film ${userLoggedIn ? 'logged-in' : ''}`}
        onClick={handleClick}
      >
        <FontAwesomeIcon icon={faStar} />
    </div>
      { showPopover &&(
        <div className='rating-popover'>
          <Rate />
        </div>
      )}


    
      {/* <div>{showPopover && <Rate />}</div> */}
    </>
  )
}

export default RateFilm
