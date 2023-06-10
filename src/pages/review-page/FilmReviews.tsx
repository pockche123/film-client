import React, { useEffect, useState } from 'react'
import './FilmReviews.css'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { getReviewsByFilmTitle } from '../../components/services/API/Reviews'
import { IReview } from '../../components/interfaces/IReview'
import ReviewContentCard from '../../components/review/ReviewContentCard'
import { Paths } from '../../components/services/Utils/Paths'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil } from '@fortawesome/free-solid-svg-icons'

const FilmReviews = () => {
  const params = useParams()
  const filmTitle = params.filmTitle as string
  const [data, setData] = useState<IReview[]>([])
   const userLoggedIn = JSON.parse(localStorage.getItem("loggedIn") || "false")
  // let userLoggedIn = true
  const navigate = useNavigate()
  let username = 'tester1'
  const location = useLocation()
  const poster = location.state && location.state.poster
  const year = location.state && location.state.year

  useEffect(() => {
    getReviewsByFilmTitle(filmTitle).then(res => {
      console.log(res.data)
      const reversedData = res.data.reverse()
      setData(reversedData)
    })
  })

  const handleReviewsLoggedIn = () => {
    navigate(Paths.createReview + username)
  }

  const handleBackToMain = () => {
    navigate(-1)
  }

  useEffect(() => {
    console.log('year', year)
  })

  return (
    <div className='reviews'>
      <div className='reviews-back-to-page'>
        <img src={poster} alt='film-poster' /> &nbsp; &nbsp;
        <div>
          <div style={{ display: 'flex' }}>
            <h1>{filmTitle}</h1>&nbsp;{' '}
            <h2 style={{ marginTop: '2%' }}>({year})</h2>
          </div>
          <label onClick={handleBackToMain} style={{ cursor: 'pointer' }}>
            <h5> ← Back to main</h5>
          </label>
        </div>
      </div>

      <div className='reviews-reviews'>
        <div className='reviews-logged-in'>
          {userLoggedIn ? (
            <div
              className='reviews-logged-in-yes'
              onClick={handleReviewsLoggedIn}
            >
              <FontAwesomeIcon icon={faPencil} /> &nbsp; WRITE A REVIEW
            </div>
          ) : (
            <div className='reviews-logged-in-no'>Login to write a review.</div>
          )}
        </div>

        <div className='reviews-list'>
          {data?.map(review => (
            <div className='review-card'>
              <ReviewContentCard
                props={{
                  profilePic: review.userEntity.profilePic,
                  username: review.userEntity.username,
                  date: review.createdDate,
                  rating: review.rating,
                  review: review.review,
                  reviewId: review.reviewId
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FilmReviews
