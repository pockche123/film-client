import React, { useEffect, useState } from 'react'
import { getDiscussionById } from '../../components/services/API/Discussion'
import { useNavigate, useParams } from 'react-router-dom'
import { IDiscussion } from '../../interfaces/IDiscussion'
import './DiscussionPage.css'

import DiscussionHeading from '../../components/discussion/DiscussionHeading'
import { IComment } from '../../interfaces/IComment'
import {
  getCommentsByDiscussion,
  getParentCommentsByDiscussion
} from '../../components/services/API/Comment'
import { AxiosResponse } from 'axios'
import AddComment from '../../components/comment/AddComment'
import CommentCard from '../../components/comment/CommentCard'
import { CommentBox } from '../../components/comment/CommentBox'
import DiscussionFlexOne from '../../components/discussion/DiscussionFlexOne'

const DiscussionPage = () => {
  const params = useParams()
  const id = params.id as string
  const [data, setData] = useState<IDiscussion>()
  const [commentsLength, setCommentsLength] = useState(0)
  const [comments, setComments] = useState<Array<IComment>>([])
  const [login, setLogin] = useState(true)
  const [reply, setReply] = useState('')
  const [parentComments, setParentComments] = useState<Array<IComment>>([])

  useEffect(() => {
    getDiscussion()
    getComments()
    getParentComments()
  })

  const getDiscussion = () => {
    getDiscussionById(id)
      .then(res => {
        setData(res.data)
      })
      .catch(e => console.log(e))
  }

  const handleComment = () => {
    const commentsSection = document.getElementById('comments')
    commentsSection?.scrollIntoView({ behavior: 'smooth', block: 'end' })
  }

  const getComments = () => {
    getCommentsByDiscussion(id)
      .then(res => {
        setComments(res.data)
        setCommentsLength(res.data.length)
      })
      .catch(e => console.log(e))
  }

  const getParentComments = () => {
    getParentCommentsByDiscussion(id)
      .then(res => {
        setParentComments(res.data)
      })
      .catch(e => console.log(e))
  }

  return (
    <div className='discussion-page'>
      <div className='discussion-flex-one'><DiscussionFlexOne/></div>
      <div className='discussion-flex-two'>
        <div className='discussion-flex-two-contents'>
          <DiscussionHeading
            data={data}
            comments={comments}
            handleComment={handleComment}
          />

          <div className='discussion-heading-break'>
            <hr style={{ width: '90%' }} />
            <label
              style={{ fontSize: '12px', color: 'gray', marginTop: '7px' }}
            >
              <b>{commentsLength} comments</b>
            </label>
          </div>

          {login ? (
            <div>
              <CommentBox
                reply={reply}
                setReply={setReply}
                setLogin={setLogin}
              />
            </div>
          ) : (
            <div>
              <AddComment />
            </div>
          )}

          <div id='comments'>
            {parentComments.map((comment: IComment) => (
              <div key={comment.id}>
                <CommentCard comment={comment} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default DiscussionPage
