import React from 'react'

const FilmSocialNav = ({
  activeSection,
  onSectionChange
}: {
  activeSection: string
  onSectionChange: Function
}) => {
  const handleReviews = () => {
    onSectionChange('reviews')
  }
  const handleDiscussions = () => {
    onSectionChange('discussions')
  }
  return (
    <div className='film-social-nav-container'>
      <label
        className='film-social-nav-label'
        style={{
          cursor: 'pointer',
          borderBottom:
            activeSection === 'reviews' ? '4px solid #00BFFF' : 'none'
        }}
        onClick={handleReviews}
      >
        <h6>Reviews</h6>
      </label>
      <label
        className='film-social-nav-label'
        style={{
          cursor: 'pointer',
          borderBottom:
            activeSection === 'discussions' ? '4px solid #00BFFF' : 'none'
        }}
        onClick={handleDiscussions}
      >
        <h6>Discussions</h6>
      </label>
    </div>
  )
}

export default FilmSocialNav
