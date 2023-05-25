import React from 'react'
import './AddToWatch.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'


const AddToWatch = () => {
  return (
      <div className="add-to-watch">
        <FontAwesomeIcon icon={faBookmark}/>
   </div>
  )
}

export default AddToWatch