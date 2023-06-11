import React, { useEffect } from 'react'
import { useLocation } from 'react-router';
import './CreateReview.css'
import Rate from '../../components/icons/Rate';

const CreateReview = () => {

  const location = useLocation();
  const poster = location.state && location.state.poster;
  const filmTitle = location.state && location.state.filmTitle;
  const year = location.state && location.state.year;
  const username = "testing1"


  useEffect(() => {
    console.log("year ", year)
  })
  
  return (
    <div className="create-review">
       <div className="create-review-poster">
        <img src={poster} alt="film-poster" />
      </div>
      
      <div className="create-review-forum">
        <div className="create-review-heading">
          <h3><b>A review by {username}</b></h3>
          <h5>Film: {filmTitle} ({year})</h5>
          
          </div>
      </div>
      <div className="create-review-rating">
        <Rate inCreatePage={true}/>
      </div>




    </div>
  )
}

export default CreateReview