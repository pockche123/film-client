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
      <h4 style={{marginRight: '15%', textAlign:'left'}} >Social</h4>
      <label
        className='film-social-nav-label'
        style={{
          cursor: 'pointer',
          borderBottom:
            activeSection === 'reviews' ? '4px solid black' : 'none'
        }}
        onClick={handleReviews}
      >
        <h5>Reviews</h5>
      </label>
      <label
        className='film-social-nav-label'
        style={{
          cursor: 'pointer',
          borderBottom:
            activeSection === 'discussions' ? '4px solid black' : 'none'
        }}
        onClick={handleDiscussions}
      >
        <h5>Discussions</h5>
      </label>
    </div>
  )
}

export default FilmSocialNav
