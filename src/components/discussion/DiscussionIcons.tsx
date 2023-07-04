import React, { useState } from 'react'
import {
  faArrowUpFromBracket,
  faCircleArrowDown,
  faCircleArrowUp,
  faCommentAlt
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const DiscussionIcons = () => {

const [isSmaller, setIsSmaller] = useState(false)
const [isLoggedIn, setIsLoggedIn] = useState(false)

const [isBigger, setIsBigger] = useState(false)

    
    
  return (
<div className='discussion-icons'>
  <div className='discussion-icons-bit'>
    <FontAwesomeIcon
      icon={faCircleArrowUp}
      className={`fa-circle-arrow-up ${isSmaller ? 'smaller' : ''}`}
      style={{ marginTop: '0.3em', marginLeft: '0.3em' }}
      onClick={isLoggedIn ? handleUpVote : handleLogin}
    />
    &nbsp;
    <span style={{ fontSize: '12px', marginTop: '0.5em' }}>{likes}</span>
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
    <FontAwesomeIcon
      icon={faCommentAlt}
      style={{ marginTop: '0.4em', marginLeft: '0.5em' }}
      onClick={handleComment}
    />
    &nbsp;
    <span style={{ fontSize: '12px', marginTop: '0.3em' }}>
      {commentsLength}
    </span>
  </div>
  <div className='discussion-icons-bit'>
    <FontAwesomeIcon
      icon={faArrowUpFromBracket}
      style={{ marginTop: '0.3em', marginLeft: '0.5em' }}
    />
    &nbsp; <h6 style={{ fontSize: '13px', marginTop: '0.45em' }}>Share </h6>
  </div>
</div>

  )
}

export default DiscussionIcons