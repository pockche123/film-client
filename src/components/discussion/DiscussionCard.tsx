


import React, { useEffect } from 'react'
import { Discussion } from '../interfaces/IDiscussion'

interface DiscussionCardProps {
  data: Discussion
}

const DiscussionCard: React.FC<DiscussionCardProps> = ({ data }) => {



    useEffect(() => {
        console.log("inside ", data)
    })
  return (
    <div className='discussion-card'>
      <h3>{data.title}</h3>
     
    </div>
  )
}


export default DiscussionCard