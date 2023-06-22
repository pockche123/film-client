import React, { useEffect, useState } from 'react'
import { getDiscussionById } from '../../components/services/API/Discussion'
import { useNavigate, useParams } from 'react-router-dom'
import { Discussion } from '../../components/interfaces/IDiscussion'
import './DiscussionPage.css'

import DiscussionHeading from '../../components/discussion/DiscussionHeading'

const DiscussionPage = () => {
  const params = useParams()
  const id = params.id as string
  const [data, setData] = useState<Discussion>()
 
 
  

  useEffect(() => {
    getDiscussionById(id)
      .then(res => {
        setData(res.data)
        console.log('anything? ', res.data)
      })
      .catch(e => console.log(e))
  })

 

  return (
    <div className='discussion-page'>
      <div className='discussion-flex-one'></div>
      <div className='discussion-flex-two'>
        <DiscussionHeading data= {data}/>

      </div>
    </div>
  )
}

export default DiscussionPage
