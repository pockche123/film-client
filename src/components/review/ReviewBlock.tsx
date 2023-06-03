import React, { useEffect, useState } from 'react'
import { Film } from '../interfaces/IFilm'
import { getReviewsByFilmTitle } from '../services/API/Reviews'
import { IReview } from '../interfaces/IReview'
import { format } from 'date-fns'
import enGB from 'date-fns/locale/en-GB'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
import { Paths } from '../services/Utils/Paths'

const ReviewBlock = ({ film }: { film: Film }) => {
  const filmTitle = film.title
  const [data, setData] = useState<IReview | undefined>(undefined)
  const rating = data?.rating ?? 0
  const navigate = useNavigate();
  const [totalReviews, setTotalReviews] = useState(0);
  const username = data?.userEntity.username;


  const fullStars = Math.floor(rating / 2)
  const hasHalfStar = rating % 2 !== 0 

  const stars = []
  for (let i = 0; i < fullStars; i++) {
    stars.push(<FontAwesomeIcon key={i} icon={faStar} />)
  }

  if (hasHalfStar) {
    stars.push(<FontAwesomeIcon key='half' icon={faStarHalf} />)
  }

  const formattedDate = data
    ? format(new Date(data?.reviewId.date), 'MMMM d, yyyy', { locale: enGB })
    : ''

  useEffect(() => {
    getReviewsByFilmTitle(filmTitle).then(res => {
      const lastReview = res.data[res.data.length - 1]
      console.log(lastReview);
      setTotalReviews(res.data.length);
      localStorage.setItem("totalReviews", res.data.length)
      setData(lastReview)
    })
  })

  const navToReviewPage = () => {
    navigate(Paths.reviewPage + filmTitle )
  }

  const handleUser = () => {
    navigate(Paths.userProfile  + username)
  }

  return (
    <div className='review'>
      {totalReviews ===0 ? (
        <div className='no-reviews'>
          <>
            We don't have any reviews for {filmTitle}. You could be the first one.
          </>
        </div>
      ) : (
        <div className='reviews-present'>
          <div className='profile-pic'>
            <img src={data?.userEntity.profile_pic} alt='profile-pic' onClick={handleUser} />
            <div className='profile-pic-user'>
              <div className='profile-pic-rating'>
                <h5 style={{ marginBottom:'0', paddingBottom: '0'}}>
                    <b>A review by {username}</b>
                </h5>
                <div style={{ paddingLeft: '10px' }}>
                  {stars}
                  {rating}
                </div>
              </div>
              <span style={{ fontSize: '14px' }}>
                Written by <b>{username}</b> on {formattedDate}
              </span>
            </div>
            </div>
          <div className='review-content'>
              {data?.review}
          </div>
        </div>
      )}

      {totalReviews>0 && (
        <div  className="review-page-nav" onClick={navToReviewPage}>
          <h6><b>Read All Reviews</b></h6>
          </div>
      )

      }
    </div>
  )
}

export default ReviewBlock
