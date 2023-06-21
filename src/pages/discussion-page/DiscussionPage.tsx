import React, { useEffect, useState } from 'react'
import { getDiscussionById } from '../../components/services/API/Discussion'
import { useNavigate, useParams } from 'react-router-dom'
import { Discussion } from '../../components/interfaces/IDiscussion'
import './DiscussionPage.css'
import { Paths } from '../../components/services/Utils/Paths'

const DiscussionPage = () => {

const params = useParams()
    const id = params.id as string
    const [data, setData] = useState<Discussion>()
    const profilePic = data?.user.profilePic
    const navigate = useNavigate()
    const username = data?.user.username

    useEffect(() => {
        getDiscussionById(id)
            .then((res) => {
                setData(res.data)
                console.log("anything? ", res.data)
            })
        .catch(e => console.log(e))
         
        
    })

    const handleUser = () => {
  navigate(Paths.userProfile + username)
}



  return (
      <div className="discussion-page">
          <div className='discussion-flex-one'>
              
          </div>
          <div className='discussion-flex-two'>
              <div className='profile-pic'> 
                <img src={profilePic} alt='profile-pic' onClick={handleUser} />

              </div>
              {data?.title}
              

              </div>
      
      </div>
  )
}

export default DiscussionPage