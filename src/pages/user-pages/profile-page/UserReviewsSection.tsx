import React, { ChangeEvent, useEffect, useState } from 'react'
import { IUser } from '../../../interfaces/IUser'
import './UserReviewsSection.css'
import { IReview } from '../../../interfaces/IReview';
import { getReviewsByUsername } from '../../../components/services/API/Reviews';
import ReviewContentCard from '../../../components/review/ReviewContentCard';
import { Pagination } from '@mui/material';
import ReactPaginate from 'react-paginate'


const UserReviewsSection = ({ data }: { data: IUser | undefined }) => {

  const [reviews, setReviews] = useState<IReview[]>([]);
  const username = data?.username as string 
  const [currentPage, setCurrentPage] = useState(1) // Add current page state
const itemsPerPage = 5

const startIndex = (currentPage - 1) * itemsPerPage
const endIndex = Math.min(startIndex + itemsPerPage, reviews.length)

const paginatedReviews = reviews.slice(startIndex, endIndex)



  const getUserReviews = () => {
    getReviewsByUsername(username)
    .then(res => setReviews(res.data))
    .catch(e => console.log(e));
  }

  useEffect(() => {
    getUserReviews(); 
  })
  

  const handlePageChange = (event: ChangeEvent<unknown>, page: number) => {
  setCurrentPage(page)
}


    
  return (
    <section className="user-reviews-section">
      <h6>REVIEWS</h6>
      <hr />
    
      <div className={data ?'reviews-list': 'user-reviews-container'}>
  {paginatedReviews?.map(review => (
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

      {/* <ReactPaginate
  pageCount={Math.ceil(reviews.length / itemsPerPage)}
  marginPagesDisplayed={2}
  pageRangeDisplayed={5}
  onPageChange={handlePageChange}
  containerClassName={'pagination'}
  activeClassName={'active'}
/> */}
      
      <Pagination
        count={Math.ceil(reviews.length / itemsPerPage)}
        showFirstButton
        showLastButton 
        onChange={handlePageChange}
      />





      {/* <div className='pagination'> */}
  {/* <button
    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
    disabled={currentPage === 1}
    className = 'btn btn-secondary'

  >
    Previous Page
  </button>
  <span><b>Page {currentPage}</b></span>
  <button
    onClick={() => setCurrentPage(prev => prev + 1)}
          disabled={endIndex >= paginatedReviews.length}
          
    className="btn btn-secondary"
  >
    Next Page
  </button>
</div>

<Pagination count ={10}/> */}


    </section>
  )
}

export default UserReviewsSection