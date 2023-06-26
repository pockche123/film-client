import React, { useState } from 'react'
import { IComment } from '../interfaces/IComment'
import './CommentCard.css'
import TimeAgo from '../time/TimeAgo'

import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt'
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt'
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt'
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faCommentAlt , faMessage} from '@fortawesome/free-solid-svg-icons'
import { Navigate, useNavigate } from 'react-router-dom'
import { Paths } from '../services/Utils/Paths'

const CommentCard = ({ comment }: { comment: IComment }) => {
  const [thumbsUp, setThumbsUp] = useState(false)
  const [thumbsDown, setThumbsDown] = useState(false)
  const [login, setLogin] = useState(false)
  
  const userLoggedIn = true
  const [reply, setReply] = useState("")
  const navigate = useNavigate()


  const handleThumbsUp = () => {
    if (thumbsDown === true) {
      setThumbsDown(false)
    } else {

      setThumbsUp(!thumbsUp)
    }
  }

  const handleThumbsDown = () => {
    if (thumbsUp === true) {
      setThumbsUp(false)
    } else {
      setThumbsDown(!thumbsDown)
    }
  }

  const handleReply = () => {
    if (userLoggedIn) {
       setLogin(!login)
     }
    
  }

  return (
    <div className='comment'>
      <div className='comment-user-profile'>
        <img src={comment.user.profilePic} alt='comment-profile' /> &nbsp;
        <div className='comment-heading'>
          <b id='comment-username'>{comment.user.username}</b>
          &nbsp; • &nbsp;
          <TimeAgo timestamp={comment.timestamp} />
        </div>
      </div>

      <div className='comment-content'>{comment.text}</div>
      <div className='comment-icons'>
        <div  className='comment-icons-thumbs' onClick={handleThumbsUp}>{thumbsUp ? <ThumbUpAltIcon style={{ cursor: 'pointer', color: 'black' }} /> : <ThumbUpOffAltIcon style={{ cursor:'pointer'}} />}</div>
        &nbsp;
        {comment.likes}
        &nbsp;
        <div  className='comment-icons-thumbs' onClick={handleThumbsDown}>{thumbsDown ? <ThumbDownAltIcon style={{ cursor: 'pointer', color: 'black', marginRight:'2em' }} /> : <ThumbDownOffAltIcon style={{ cursor: 'pointer' }} />}</div>
        <div className='comment-icon-reply' onClick={handleReply}>
          <FontAwesomeIcon icon={faMessage} style={{marginTop:'0.3em'}} /> &nbsp;
          <span style={{fontSize: '14px'}}>
            Reply 
            </span>
         </div>

      </div>

      {login && (
        <div className='comment-reply'>
          <textarea className='form-control' placeholder='What are your thoughts?' value={reply} onChange={(e) => setReply(e.target.value)}   rows={4} 
            cols={30} />
          <div className='comment-reply-buttons'>
            <button id='comment-reply-enter'>Reply</button>

            <b id='comment-reply-cancel'>Cancel</b>
           
              </div>

          </div>
      )}
    </div>
  )
}

export default CommentCard
