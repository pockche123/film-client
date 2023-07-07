import React, { useEffect, useState } from 'react'
import { getAllDiscussions } from '../../components/services/API/Discussion'
import { IDiscussion } from '../../interfaces/IDiscussion'
import './AllDiscussions.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilm } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
import DiscussionBlock from '../../components/discussion/DiscussionBlock'
import DiscussionCard from '../../components/discussion/DiscussionCard'

const AllDiscussions = () => {

  const [data, setData] = useState<Array<IDiscussion>>([])
  const navigate = useNavigate()



  const getAll = () => {
    getAllDiscussions()
      .then(res => {
      setData(res.data)
    }).catch(e => console.log(e))

  }

  useEffect(() => {
    getAll()
  })

  const handleStudio = () => {
    navigate("/")
  }


  return (
    <div className='all-discussions'>
      <div className='all-discuss-one'>
          <div className='discuss-studio' onClick={handleStudio}>
        <FontAwesomeIcon icon={faFilm} />
          Studio
          </div>
      </div>

      <div className='all-discuss-two'>
        {data.map(discussion => (
          
          <div key={discussion.id}>
           <DiscussionCard data={discussion} discussionBit={true} />
            </div>
        )


        )}


      </div>


    </div>
  )
}

export default AllDiscussions