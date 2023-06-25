import React from 'react'
import { IComment } from '../interfaces/IComment'
import './CommentCard.css'

const CommentCard = ({ comment }: { comment: IComment }) => {






    
  return (
      <div className='comment'>
          <div className='comment-user-profile'>
              <img src={comment.user.profilePic} alt='comment-profile' /> &nbsp;
               <div className='comment-heading'>
                  <b id='comment-username'>{comment.user.username}</b>
                 &nbsp; • &nbsp;

              </div>
            

              </div>
          
    </div>
  )
}

export default CommentCard