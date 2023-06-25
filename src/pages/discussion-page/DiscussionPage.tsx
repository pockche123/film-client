import React, { useEffect, useState } from 'react'
import { getDiscussionById } from '../../components/services/API/Discussion'
import { useNavigate, useParams } from 'react-router-dom'
import { IDiscussion } from '../../components/interfaces/IDiscussion'
import './DiscussionPage.css'

import DiscussionHeading from '../../components/discussion/DiscussionHeading'
import { IComment } from '../../components/interfaces/IComment'
import { getCommentsByDiscussion } from '../../components/services/API/Comment'
import { AxiosResponse } from 'axios'
import AddComment from '../../components/comment/AddComment'
import CommentCard from '../../components/comment/CommentCard'

const DiscussionPage = () => {
  const params = useParams()
  const id = params.id as string
  const [data, setData] = useState<IDiscussion>()
  const [commentsLength, setCommentsLength] = useState(0)
  const [comments, setComments] = useState<Array<IComment>>([])

  useEffect(() => {
    getDiscussion()
    getComments()
  })

  const getDiscussion = () => {
    getDiscussionById(id)
      .then(res => {
        setData(res.data)
        console.log('anything? ', res.data)
      })
      .catch(e => console.log(e))
  }

  const handleComment = () => {
    const commentsSection = document.getElementById('comments-section')
    commentsSection?.scrollIntoView({ behavior: 'smooth', block: 'end' })
    console.log('inside comment handle')
  }

  const getComments = () => {
    getCommentsByDiscussion(id)
      .then(res => {
        setComments(res.data)
        setCommentsLength(res.data.length)
      })
      .catch(e => console.log(e))
  }

  return (
    <div className='discussion-page'>
      <div className='discussion-flex-one'>TBD</div>
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

          <div>
            <AddComment />
          </div>

          {/* <div className='comments-section'>
            {comments.map((comment:IComment) => {
              <div key={comment.commentId}>
              <CommentCard  />
              </div>
            })}
            
            </div> */}
          <div className='comments-section'>
            {comments.map((comment: IComment) => (
              <div key={comment.commentId}>
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
