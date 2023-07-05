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
import DiscussionIcons from './DiscussionIcons'

const DiscussionHeading = ({
  data,
  comments,
  handleComment,
  commentsLength
}: {
  data: any
    comments: any
    handleComment: any
    commentsLength: any
}) => {
  const navigate = useNavigate()
  const film = data?.film
  const profilePic = data?.film.poster
  const username = data?.user.username
  const imdbId = data?.film.imdbId
  const description = data?.description

  const id = data?.id

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
  let discussionBit = true as boolean

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

      <DiscussionIcons id={id} likes={likes} discussionBit={true} commentsLength={commentsLength}/>

    </div>
  )
}

export default DiscussionHeading
