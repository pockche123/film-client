import React, { useEffect, useRef, useState } from 'react'
import { Film } from '../../interfaces/IFilm'
import { getReviewsByFilmTitle } from '../services/API/Reviews'
import { IReview } from '../../interfaces/IReview'
import { format } from 'date-fns'
import enGB from 'date-fns/locale/en-GB'
import { useNavigate } from 'react-router-dom'
import { Paths } from '../services/Utils/Paths'
import ReviewContentCard from './ReviewContentCard'
import './ReviewBlock.css'

const ReviewBlock = ({ film }: { film: Film }) => {
  const filmTitle = film.title
  const poster = film.poster
  const year = film.year
  const [data, setData] = useState<IReview | undefined>(undefined)
  const rating = data?.rating ?? 0
  const navigate = useNavigate()
  const [totalReviews, setTotalReviews] = useState(0)
  const username = data?.userEntity.username
  const profilePic = data?.userEntity.profilePic
  const review = data?.review
  const reviewId = data?.reviewId
  const date = data?.createdDate
  const formattedDate = data
    ? format(new Date(data?.createdDate), 'MMMM d, yyyy', { locale: enGB })
    : ''
  
  const likes = data?.likes

  useEffect(() => {
    getReviewsByFilmTitle(filmTitle).then(res => {
      const lastReview = res.data[res.data.length - 1]
      console.log(lastReview)
      setTotalReviews(res.data.length)
      setData(lastReview)
    })

    console.log('poster , ', poster)
    console.log('this be film', film)
  })

  const navToReviewPage = () => {
    navigate(Paths.reviews + filmTitle, {
      state: { poster, filmTitle, year, film }
    })
  }

  const reviewCardProps = {
    profilePic,
    username,
    rating,
    date,
    review,
    reviewId,
    likes

  }

  return (
    <div className='review'>
      {totalReviews === 0 ? (
        <div className='no-reviews'>
          <>
            We don't have any reviews for {filmTitle}. You could be the first
            one.
          </>
        </div>
      ) : (
        <div>
          <ReviewContentCard props={reviewCardProps} />
        </div>
      )}

      {totalReviews > 0 && (
        <div className='review-page-nav' onClick={navToReviewPage}>
          <h6>
            <b>Read All Reviews</b>
          </h6>
        </div>
      )}
    </div>
  )
}

export default ReviewBlock
