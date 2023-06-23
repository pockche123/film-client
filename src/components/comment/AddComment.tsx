import React from 'react'
import './AddComment.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const AddComment = () => {


    



  return (
 
<div className='add-comment'>
          <FontAwesomeIcon icon={faPlus} /> &nbsp;
          <button className='btn btn-primary-outline'>
              Add a comment
              </button>
</div>

  )
}

export default AddComment