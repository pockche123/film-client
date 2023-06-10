
import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import './LikeMovie.css'


const LikeMovie = () => {

   const userLoggedIn = JSON.parse(localStorage.getItem('loggedIn') || 'false')
const [bookmarkColour, setBookmarkColour] = useState('white')
  // const userLoggedIn = true;
  
  const handleLikeMovie = () => {
    if (userLoggedIn === true && bookmarkColour === 'white') {
      setBookmarkColour('red')
    } else {
      setBookmarkColour('white')
    }
    
  }

  return (
    <div className={`like-movie ${userLoggedIn ? 'logged-in' :''} ${bookmarkColour==='red'? 'red':''}`}
         onClick={handleLikeMovie}>

            <FontAwesomeIcon icon={faHeart} style={{ color: bookmarkColour }}  />
            </div>


  )
}

export default LikeMovie