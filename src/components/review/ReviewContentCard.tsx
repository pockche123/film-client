import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Paths } from '../services/Utils/Paths'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons'
import { format } from 'date-fns'
import { enGB } from 'date-fns/locale'
import './ReviewContentCard.css'

const ReviewContentCard = ({ props }: { props: any }) => {
  const navigate = useNavigate()
  const reviewTextRef = useRef<HTMLDivElement>(null)
  const [isOverflowed, setIsOverflowed] = useState(false)
  const stars = []
  const { profilePic, username, rating, date, review, reviewId } = props
  const fullStars = Math.floor(rating / 2)
  const hasHalfStar = rating % 2 !== 0
  const formattedDate = date
    ? format(new Date(date), 'MMMM d, yyyy', { locale: enGB })
    : '';
  
  const [likeClicked, setLikeClicked] = useState(false)
  const userLoggedIn = false

  for (let i = 0; i < fullStars; i++) {
    stars.push(<FontAwesomeIcon key={i} icon={faStar} />)
  }

  if (hasHalfStar) {
    stars.push(<FontAwesomeIcon key='half' icon={faStarHalf} />)
  }

  useEffect(() => {
    const reviewTextElement = reviewTextRef.current

    if (reviewTextElement) {
      const isContentOverflowed =
        reviewTextElement.scrollHeight > reviewTextElement.clientHeight ||
        reviewTextElement.scrollHeight > reviewTextElement.offsetHeight
      console.log('is true, ', isContentOverflowed)

      setIsOverflowed(isContentOverflowed)
    }
  }, [])

  const handleUser = () => {
    navigate(Paths.userProfile + username)
  }

  const handleReviewLikes = () => {
    if (userLoggedIn) {
      setLikeClicked(prev => !prev);
    }

  }

  return (
    <>
      <div className='reviews-present'>
        <div className='profile-pic'>
          <img src={profilePic} alt='profile-pic' onClick={handleUser} />
          <div className='profile-pic-user'>
            <div className='profile-pic-rating'>
              <h5 style={{ marginBottom: '0', paddingBottom: '0' }}>
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
        <div className='review-content' ref={reviewTextRef}>
          {review}
        </div>
        {isOverflowed && (
          <a
            href={Paths.review + `${reviewId}`}
            className='read-more'
            style={{
              color: 'black',
              display: 'block',
              textAlign: 'right',
              paddingRight: '20px'
            }}
          >
            <u style={{ textAlign: 'right' }}>Read the rest</u>
          </a>
        )}

        
        <div className={`review-likes ${likeClicked? 'clicked': ''}`} onClick={handleReviewLikes}>
       
          <FontAwesomeIcon icon={faHeart} /> &nbsp;
          {!likeClicked && userLoggedIn? (
            <b>Like Review</b> 
          ): (
          <b>Liked</b> 
          )}
          &nbsp;
          <label>{props.likes}</label>

        </div>
   

      </div>
    </>
  )
}
export default ReviewContentCard
