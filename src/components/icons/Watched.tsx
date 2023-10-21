

import { faEye } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import './Watched.css'

const Watched = () => {

    const [watchedColour, setWatchedColour] = useState('white')
  const userLoggedIn = JSON.parse(localStorage.getItem('loggedIn') || 'false')
  


  const handleWatched = () => {

    if (userLoggedIn === true && watchedColour === 'white') {
      setWatchedColour("red")
    } else {
      setWatchedColour("white")

    }
  }

    
  return (
    <div
      
      className={`watched ${userLoggedIn ? 'logged-in' : ''} ${watchedColour === 'red' ? 'red' : ''}`}
      onClick={handleWatched}
    
    >
      <FontAwesomeIcon icon={faEye} style={{ color: watchedColour }} />
    </div>
  )
}

export default Watched