import React, { useEffect, useState } from 'react'
import { IUser } from '../../../interfaces/IUser'
import './UserReviewsSection.css'
import { IReview } from '../../../interfaces/IReview';
import { getReviewsByUsername } from '../../../components/services/API/Reviews';
import ReviewContentCard from '../../../components/review/ReviewContentCard';

const UserReviewsSection = ({ data }: { data: IUser | undefined }) => {

  const [reviews, setReviews] = useState<IReview[]>([]);
  const username = data?.username as string 



  const getUserReviews = () => {
    getReviewsByUsername(username)
    .then(res => setReviews(res.data))
    .catch(e => console.log(e));
  }

  useEffect(() => {
    getUserReviews(); 
  })
  
    
  return (
    <section className="user-reviews-section">
      <h6>REVIEWS</h6>
      <hr />
    
      <div className={data ?'reviews-list': 'user-reviews-container'}>
  {reviews?.map(review => (
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



    </section>
  )
}

export default UserReviewsSection