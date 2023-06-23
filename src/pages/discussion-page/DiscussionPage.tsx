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

const DiscussionPage = () => {
  const params = useParams()
  const id = params.id as string
  const [data, setData] = useState<IDiscussion>()
  const [commentsLength, setCommentsLength] = useState(0)
  const [comments, setComments] = useState<IComment>()

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

  const getComments = () => {
    getCommentsByDiscussion(id)
      .then((res: AxiosResponse) => {
        setComments(res.data)
        console.log('length, ', res.data.length)
        setCommentsLength(res.data.length)
      })
      .catch((e: Error) => console.log(e))
  }

  return (
    <div className='discussion-page'>
      <div className='discussion-flex-one'>
         TBD

      </div>
      <div className='discussion-flex-two'>
        <div className='discussion-flex-two-contents'>
          <DiscussionHeading data={data} comments={comments} />

          <div className='discussion-heading-break'>
            <hr style={{ width: '90%' }} />
            <label
              style={{ fontSize: '12px', color: 'gray', marginTop: '7px' }}
            >
              <b>{commentsLength} comments</b>
            </label>
          </div>

       <AddComment/>



        </div>
      </div>
    </div>
  )
}

export default DiscussionPage
