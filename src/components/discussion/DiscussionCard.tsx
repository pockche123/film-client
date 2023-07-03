import React, { useEffect, useState } from 'react'
import { IDiscussion } from '../../interfaces/IDiscussion'
import './DiscussionCard.css'
import { useNavigate } from 'react-router-dom'
import { format } from 'date-fns'
import { enGB } from 'date-fns/locale'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCircleArrowUp,
  faCircleArrowDown
} from '@fortawesome/free-solid-svg-icons'
import { Paths } from '../services/Utils/Paths'
// import { faDown } from '@fortawesome/free-regular-svg-icons'

interface DiscussionCardProps {
  data: IDiscussion
}

const DiscussionCard: React.FC<DiscussionCardProps> = ({ data }) => {
  const username = data.user.username
  const navigate = useNavigate()
  const date = data.timestamp
  const formattedDate = date
    ? `${format(new Date(date), 'MMMM d, yyyy')} at ${format(
        new Date(date),
        'HH:mm'
      )}`
    : ''
  const [isSmaller, setIsSmaller] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const [isBigger, setIsBigger] = useState(false)
  const title = data.title
  const likes = data.likes
  const id = data.id

  useEffect(() => {
    console.log('inside ', data)
  })

  const handleUsername = () => {
    navigate(Paths.userProfile + username)
  }

  const handleToDiscussion = () => {
    navigate(Paths.discussionPage + id)
  }

  const handleUpVote = () => {
    if (isBigger) {
      setIsBigger(false)
    } else {
      setIsSmaller(true)
    }
  }

  const handleDownVote = () => {
    if (isSmaller) {
      setIsSmaller(false)
    } else {
      setIsBigger(true)
    }
  }

  const handleLogin = () => {
    navigate(Paths.login)
  }

  return (
    <div className='discussion-card'>
      <div className='discussion-card-likes'>
        <FontAwesomeIcon
          icon={faCircleArrowUp}
          className={`fa-circle-arrow-up ${isSmaller ? 'smaller' : ''}`}
          onClick={isLoggedIn ? handleUpVote : handleLogin}
        />
        <h6>{likes}</h6>
        <FontAwesomeIcon
          icon={faCircleArrowDown}
          className={`fa-circle-arrow-down ${isBigger ? 'bigger' : ''}`}
          onClick={isLoggedIn ? handleDownVote : handleLogin}
        />
      </div>
      <div>
        <div className='discussion-card-top'>
          <label>
            Posted by{' '}
            <span className='discussion-card-user' onClick={handleUsername}>
              {username}
            </span>{' '}
            on {formattedDate}
          </label>
        </div>

        <div className='discussion-card-title' onClick={handleToDiscussion}>
          <h4>{title}</h4>
        </div>
      </div>
    </div>
  )
}

export default DiscussionCard
