import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import './RateFilm.css'
import Rate from './Rate'

const RateFilm = () => {
  let userLoggedIn = true
  const [showPopover, setShowPopover] = useState(false)
  const [bookmarkColour, setBookmarkColour] = useState('white')
  let existingRating = 0
//  const userLoggedIn = JSON.parse(localStorage.getItem('loggedIn') || 'false')

  useEffect(() => {
    colorChange()
  })

  const colorChange = () => {
    if (
      userLoggedIn === true &&
      existingRating > 0 &&
      bookmarkColour === 'white'
    ) {
      setBookmarkColour('gold')
    }

    if (!userLoggedIn || existingRating === 0) {
      setBookmarkColour('white')
    }
  
  }

  const handleClick = () => {
    if (userLoggedIn) {
      setShowPopover(prevState => !prevState)
    }
  }

  return (
    <>
      <div
        className={`rate-film ${userLoggedIn ? 'logged-in' : ''} ${
          bookmarkColour === 'gold' ? 'gold' : ''
        }`}
        onClick={handleClick}
      >
        <FontAwesomeIcon icon={faStar} style={{ color: bookmarkColour }} />
        {showPopover && (
          <div className='rating-popover' onClick={e => e.stopPropagation()}>
            <Rate inCreatePage={false} />
          </div>
        )}
      </div>
    </>
  )
}

export default RateFilm
