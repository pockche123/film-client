import React, { useState, useEffect, useRef } from 'react'
import { IComment } from '../../interfaces/IComment'
import './CommentCard.css'
import TimeAgo from '../time/TimeAgo'

import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt'
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt'
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt'
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBold, faMessage } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
import { CommentBox } from './CommentBox'
import { getChildrenComments } from '../services/API/Comment'

const CommentCard = ({ comment }: { comment: IComment }) => {
  const [thumbsUp, setThumbsUp] = useState(false)
  const [thumbsDown, setThumbsDown] = useState(false)
  const [login, setLogin] = useState(false)

  const userLoggedIn = true
  const [reply, setReply] = useState('')
  const navigate = useNavigate()
  const [childComments, setChildComments] = useState<Array<IComment>>([])
  const [displayComments, setDisplayComments] = useState(false)

  const date = new Date(comment.timestamp)

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

  const getComments = () => {
    getChildrenComments(comment.id)
      .then(res => {
        setChildComments(res.data)
        console.log('CHILDREN, ', res.data.length)
      })
      .catch(e => console.log(e))
  }

  //   useEffect(() => {
  //   const commentDate = document.querySelector('.comment-date')
  //     commentDate?.style.setProperty('--dynamic-content', 'hello')

  // }, [])

  useEffect(() => {
    getComments()

    console.log('date ', date.toString())
  }, [])

  const showChildComments = () => {
    setDisplayComments(prevState => !prevState)
  }

  const commentDate = document.querySelector('.comment-date') as HTMLElement

  useEffect(() => {
    commentDate?.addEventListener('mouseover', () => {
      commentDate.style.setProperty('content', `hello`)
    })

    commentDate?.addEventListener('mouseout', () => {
      commentDate.style.setProperty('content', '')
    })
  })

  return (
    <div className='comment'>
      <div className='comment-user-profile'>
        <div className='comment-profile'>
          <img src={comment.user.profilePic} alt='comment-profile' /> &nbsp;
        </div>
        <div className='comment-heading'>
          <b id='comment-username'>{comment.user.username}</b>
          &nbsp; • &nbsp;
          <span className='comment-date'>
            <TimeAgo timestamp={comment.timestamp} />
          </span>
        </div>
      </div>

      <div className='comment-content'>{comment.text}</div>
      <div className='comment-icons'>
        <div className='comment-icons-thumbs' onClick={handleThumbsUp}>
          {thumbsUp ? (
            <ThumbUpAltIcon style={{ cursor: 'pointer', color: 'black' }} />
          ) : (
            <ThumbUpOffAltIcon style={{ cursor: 'pointer' }} />
          )}
        </div>
        &nbsp;
        {comment.likes}
        &nbsp;
        <div className='comment-icons-thumbs' onClick={handleThumbsDown}>
          {thumbsDown ? (
            <ThumbDownAltIcon style={{ cursor: 'pointer', color: 'black' }} />
          ) : (
            <ThumbDownOffAltIcon style={{ cursor: 'pointer' }} />
          )}
        </div>
        <div className='comment-icon-reply' onClick={handleReply}>
          <FontAwesomeIcon icon={faMessage} style={{ marginTop: '0.3em' }} />{' '}
          &nbsp;
          <span style={{ fontSize: '14px' }}>Reply</span>
        </div>
      </div>

      {login && (
        <CommentBox reply={reply} setReply={setReply} setLogin={setLogin} />
      )}

      {childComments.length > 0 ? (
        <div className='child-c' onClick={showChildComments}>
          <b id='child-length'>{childComments.length} reply</b>
        </div>
      ) : childComments.length > 1 ? (
        <div className='child-c' onClick={showChildComments}>
          <b id='child-length'>{childComments.length} replies</b>
        </div>
      ) : (
        ''
      )}

      {/* 
      { displayComments && (
        <div className="child-comments">
          {childComments?.map((comment: IComment) => (
            <div key={comment.id}>
              <CommentCard comment={comment} />
            </div>
          ))}
          
        </div>
      )} */}

      {displayComments && (
        <div className='child-comments'>
          {childComments?.map((comment: IComment) => (
            <div key={comment.id} className='comment-with-connector'>
              <div className='comment-connector'></div>
              <CommentCard comment={comment} />
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default CommentCard
