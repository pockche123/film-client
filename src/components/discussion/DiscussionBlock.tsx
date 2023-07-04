import React, { useState, useEffect } from 'react'
import { Film } from '../../interfaces/IFilm'
import { getDiscussionByFilmTitle } from '../services/API/Discussion'
import { IDiscussion } from '../../interfaces/IDiscussion'
import DiscussionCard from './DiscussionCard'
import { useNavigate } from 'react-router-dom'
import './DiscussionBlock.css'
import { Paths } from '../services/Utils/Paths'

const DiscussionBlock = ({ film }: { film: Film }) => {
  const filmTitle = film.title
  const [data, setData] = useState<IDiscussion[]>([])
  const [totalDiscussion, setTotalDiscussion] = useState(0)
  const navigate = useNavigate()

 
  const handleDiscussions = () => {
    navigate(Paths.discussions + filmTitle)
  }

  useEffect(() => {
    getDiscussionByFilmTitle(filmTitle).then(res => {
      console.log('discussions: ', res.data)
      setTotalDiscussion(res.data.length)
      const lastThreeDiscussions = res.data.slice(-3)
      setData(lastThreeDiscussions)
      console.log(
        'ids: ',
        lastThreeDiscussions.map((d: any) => d.id)
      )
    })
  }, [filmTitle])

  return (
    <div className='discuss-block'>
      {totalDiscussion === 0 ? (
        <div className='no-discussions'>
          We don't have any discussions for {filmTitle}.
        </div>
      ) : (
        data.map(discussion => (
          <div key={discussion.id}>
            <DiscussionCard data={discussion} />
          </div>
        ))
      )}
      <div>
        {
          totalDiscussion > 0 && (
            <div className='discussions-nav' onClick={handleDiscussions}>
              <h6>
                <b>Read all Discussions</b>
              </h6>

              </div>
          )
        }
      </div>
    </div>
  )
}

export default DiscussionBlock
