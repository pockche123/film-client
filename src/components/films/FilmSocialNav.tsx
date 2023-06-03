import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const FilmSocialNav = ({
  activeSection,
  onSectionChange
}: {
  activeSection: string
  onSectionChange: Function
  }) => {
  

  const totalReviews = localStorage.getItem("totalReviews")
  const totalDiscussions = localStorage.getItem("totalDiscussions")

  useEffect(() => {
    console.log("totalreviews ", totalReviews)
  })


  const handleReviews = () => {
    onSectionChange('reviews')
  }
  const handleDiscussions = () => {
    onSectionChange('discussions')
  }
  return (
    <div className='film-social-nav-container'>
      <h4 style={{marginLeft:'20px', marginRight:'40px', textAlign:'left'}} >Social</h4>
      <label
        className='film-social-nav-label'
        style={{
          cursor: 'pointer',
          display: 'flex',
          width: '10vw',
          borderBottom:
            activeSection === 'reviews' ? '4px solid black' : 'none'
        }}
        onClick={handleReviews}
      >
          {/* <h5>Reviews</h5> {totalReviews} */}
     <h5>Reviews {' '}
      <span style={{color: 'gray'}}>{ totalReviews}</span>
    </h5>
      </label>
      <label
        className='film-social-nav-label'
        style={{
          cursor: 'pointer',
          width: '12vw',
          borderBottom:
            activeSection === 'discussions' ? '4px solid black' : 'none'
        }}
        onClick={handleDiscussions}
      >
       <h5>
  Discussions <span style={{ color: 'gray' }}>{totalDiscussions}</span>
</h5>

      </label>
    </div>
  )
}

export default FilmSocialNav
