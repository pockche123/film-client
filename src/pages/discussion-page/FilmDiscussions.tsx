import React, { useEffect, useState } from 'react'
import { useNavigate, useParams} from 'react-router-dom'
import { IDiscussion } from '../../interfaces/IDiscussion';
import { getDiscussionByFilmTitle } from '../../components/services/API/Discussion';
import './FilmDiscussions.css'
import DiscussionFlexOne from '../../components/discussion/DiscussionFlexOne';
import DiscussionCard from '../../components/discussion/DiscussionCard';

const FilmDiscussions = () => {
  const params = useParams();
  const filmTitle = params.filmTitle as string
  const [data, setData] = useState<Array<IDiscussion>>([])
  const navigate = useNavigate()


  useEffect(() => {
    getDiscussionByFilmTitle(filmTitle)
      .then(res => {
      setData(res.data)
    }).catch(e => console.log(e))
  })



  return (
    <div className='film-discussions'>
      <div className= 'film-diss-flex-one'>
        <DiscussionFlexOne filmTitle={filmTitle} />
      </div>

      <div className='film-diss-flex-two'>

       
        <div className='film-diss-card'>
        {data.map(discussion => (
          <div key={discussion.id}>
            <DiscussionCard data={discussion} />
          </div>
        ))}
          </div>

      </div>




    </div>
  )
}

export default FilmDiscussions