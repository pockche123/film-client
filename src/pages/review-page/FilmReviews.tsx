

import React, { useEffect, useState } from 'react'
import './FilmReviews.css'
import { useParams } from 'react-router-dom'
import { getReviewsByFilmTitle } from '../../components/services/API/Reviews'
import { IReview } from '../../components/interfaces/IReview'
import ReviewContentCard from '../../components/review/ReviewContentCard'


const FilmReviews = () => {

  const params = useParams()
  const filmTitle = params.filmTitle as string
  const [data, setData] = useState<IReview[]>([]) 
  const userLoggedIn = JSON.parse(localStorage.getItem("loggedIn") || "false")

  useEffect(() => {
  getReviewsByFilmTitle(filmTitle).then(res => {
    console.log(res.data)
    const reversedData = res.data.reverse()
    setData(reversedData)
  })
})

  return (
    <div className="reviews">

  <div className="reviews-logged-in">
{userLoggedIn? (
     <div className="reviews-logged-in-yes">
            User is logged in. Fix this.

      </div>
):(
      <div className="reviews-logged-in-no">
            Login to write a review.

    </div>
)
}
      </div>
      
      <div className="reviews-list">

      {
        data?.map(review => (
      <div className="review-card">
          <ReviewContentCard props={{
            profilePic: review.userEntity.profilePic, username: review.userEntity.username,
            date: review.createdDate, rating:review.rating  ,review: review.review, reviewId: review.reviewId
          }}
          
          />
       </div>
        ))
      }

</div>
    </div>
  )
}

export default FilmReviews