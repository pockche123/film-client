import React, { useState } from 'react'
import './AddToWatch.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'


const AddToWatch = () => {
const [bookmarkColour, setBookmarkColour] = useState('white')
const userLoggedIn  = JSON.parse(localStorage.getItem("loggedIn")|| "false")

// const userLoggedIn = true

  const handleAddToWatch = () => {
    if ( userLoggedIn === true && bookmarkColour === 'white') {
  setBookmarkColour('red')
} else {
  setBookmarkColour('white')
}


    
  }

  return (
 
   <div
  className={`add-to-watch ${userLoggedIn ? 'logged-in' : ''}  ${bookmarkColour === 'red' ? 'red' : ''}`}
  onClick={handleAddToWatch}
>
  <FontAwesomeIcon icon={faBookmark} style={{ color: bookmarkColour }} />
</div>

  )
}

export default AddToWatch