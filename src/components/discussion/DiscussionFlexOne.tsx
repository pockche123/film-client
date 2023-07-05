import { faFilm } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './DiscussionFlexOne.css'
import { useNavigate } from 'react-router-dom'

const DiscussionFlexOne = ({filmTitle}: {filmTitle: string}) => {
  const navigate = useNavigate()

  const handleBack = () => {
    navigate(-1)
  }

  return (
    <div className='discussion-one'>
      <FontAwesomeIcon icon={faFilm} />
      Studio
      <div className='film-diss-back' onClick={handleBack}>
       <h5 style={{marginLeft: '0.5em'}}> Back to {filmTitle}</h5>
      </div>
    </div>
  )
}

export default DiscussionFlexOne
