import React from 'react'
import { IUser } from '../../../interfaces/IUser'
import './UserReviewsSection.css'

const UserReviewsSection = ({ data }: { data: IUser | undefined }) => {
    
  return (
    <section className="user-reviews-section">
      <h6>REVIEWS</h6>
      <hr />
      <div className='user-reviews-container'>


      </div>


    </section>
  )
}

export default UserReviewsSection