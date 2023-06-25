import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Paths } from '../services/Utils/Paths'
import { format } from 'date-fns'
import up from '../assets/up.png'
import {
  faArrowUpFromBracket,
  faCircleArrowDown,
  faCircleArrowUp,
  faCommentAlt
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './DiscussionHeading.css'

const DiscussionHeading = ({
  data,
  comments,
  handleComment
}: {
  data: any
    comments: any
    handleComment: any
}) => {
  const navigate = useNavigate()
  const film = data?.film
  const profilePic = data?.film.poster
  const username = data?.user.username
  const imdbId = data?.film.imdbId
  const description = data?.description
  const commentsLength = comments?.length

  const date = data?.timestamp
  const likes = data?.likes
  const formattedDate = date
    ? `${format(new Date(date), 'MMMM d, yyyy')} at ${format(
        new Date(date),
        'HH:mm'
      )}`
    : ''

  const [isSmaller, setIsSmaller] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const [isBigger, setIsBigger] = useState(false)

  const handleUser = () => {
    navigate(Paths.userProfile + username)
  }

  const handleFilm = () => {
    navigate(`${Paths.imdbId}${imdbId}`, { state: { film: film } })
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
    <div className='discussion-intro'>
      <div className='discussion-heading'>
        <img src={profilePic} alt='profile-pic' onClick={handleFilm} />
        <div className='discussion-heading-texts'>
          <span style={{ fontSize: '14px' }}>
            Posted by{' '}
            <b onClick={handleUser} className='discussion-user'>
              {username}
            </b>{' '}
            on {formattedDate}
          </span>

          <h3 style={{ marginBottom: '0', paddingBottom: '0' }}>
            <b>{data?.title}</b>
          </h3>
        </div>
      </div>

      <div className='discussion-description'>{description}</div>

      <div className='discussion-icons'>
        <div className='discussion-icons-bit'>
          <FontAwesomeIcon
            icon={faCircleArrowUp}
            className={`fa-circle-arrow-up ${isSmaller ? 'smaller' : ''}`}
            style={{ marginTop: '0.3em', marginLeft: '0.3em' }} 
            onClick={isLoggedIn ? handleUpVote : handleLogin}
          />
          &nbsp;
          <span style={{ fontSize: '12px', marginTop:'0.5em' }}>{likes}</span>
          &nbsp;
          <FontAwesomeIcon
            icon={faCircleArrowDown}
            className={`fa-circle-arrow-down ${isBigger ? 'bigger' : ''}`}
            style={{ marginTop: '0.3em' }} 
            onClick={isLoggedIn ? handleDownVote : handleLogin}
          />
        </div>

        <div className='discussion-icons-comments'>
          &nbsp;
          <FontAwesomeIcon icon={faCommentAlt} style={{ marginTop: '0.4em', marginLeft: '0.5em' }} onClick={handleComment} />
          &nbsp;
          <span style={{ fontSize: '12px', marginTop: '0.3em' }}>{commentsLength}</span>
        </div>
        <div className='discussion-icons-bit'>
          <FontAwesomeIcon icon={faArrowUpFromBracket} style={{ marginTop: '0.3em', marginLeft: '0.5em' }} />
          &nbsp; <h6 style={{fontSize: '13px', marginTop:'0.45em'}}>Share </h6>
        </div>
      </div>
    </div>
  )
}

export default DiscussionHeading
