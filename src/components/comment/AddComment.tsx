import React from 'react'
import './AddComment.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
import { Paths } from '../services/Utils/Paths'

const AddComment = () => {

    const navigate = useNavigate();


    const handleLogin = () => {
        navigate(Paths.login);
    }


    return (
    <div>
    <div className='add-comment' onClick={handleLogin} >
      <FontAwesomeIcon icon={faPlus} />
      &nbsp;
      <span>Add a comment</span>
            </div>
    </div>
  )
}

export default AddComment
