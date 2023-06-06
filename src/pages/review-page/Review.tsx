import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getReviewById } from '../../components/services/API/Reviews'
import { IReview } from '../../components/interfaces/IReview'
import './Review.css'
import '../film-page/FilmPage.css'
import { Paths } from '../../components/services/Utils/Paths'
import { format } from 'date-fns'
import { enGB } from 'date-fns/locale'

const Review = () => {
  const params = useParams()
  const objectId = params.id as string
  const [data, setData] = useState<IReview>()
  const username = data?.userEntity.username
  const poster = data?.film.poster
  const title = data?.film.title
  const date = data
  ? format(new Date(data?.createdDate), 'MMMM d, yyyy', { locale: enGB })
  : ''


  useEffect(() => {

    console.log("date ", date)
    console.log('id, ', objectId)
    getReviewById(objectId).then(res => {
      console.log('review? ', res.data)
      setData(res.data)
    })
  })

  return (
    <div className='review-container'>
      <div className='review-poster'>
       <img src={poster} alt='review-poster'/>
      </div>

      <div className='review-content'>

        <div className='review-heading'>
          <h1>{title}</h1>
          <h5> <b>Written by <a href={Paths.userProfile + username}><u>{username}</u> </a> on {date}</b> </h5>

        </div>

        <div className='review-review'>
          {data?.review}
          </div>
        </div>
    </div>
  )
}

export default Review
