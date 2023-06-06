

import React, { useEffect, useState } from 'react'
import './Review.css'
import { useParams } from 'react-router-dom'
import { getReviewsByFilmTitle } from '../../components/services/API/Reviews'
import { IReview } from '../../components/interfaces/IReview'
import ReviewContentCard from '../../components/review/ReviewContentCard'


const FilmReviews = () => {

  const params = useParams()
  const filmTitle = params.filmTitle as string
  const [data, setData] = useState<IReview[]>([]) 

  useEffect(() => {
  getReviewsByFilmTitle(filmTitle).then(res => {
  console.log(res.data)
    setData(res.data)
  })
})

  return (
    <div className="reviews-list">
      {
        data?.map(review => (

          <ReviewContentCard props={{
            profilePic: review.userEntity.profilePic, username: review.userEntity.username,
             date: review.createdDate, review: review.review, reviewId: review.reviewId  }} />

        ))
      }


    </div>
  )
}

export default FilmReviews