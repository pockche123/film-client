import React from 'react'
import './ProfileNav.css'

const ProfileNav = ({
  activeSection,
  onSectionChange
}: {
  activeSection: string
  onSectionChange: Function
}) => {
  const handleNav = (label: string) => {
    onSectionChange(label)
  }

  return (
    <div className='profile-nav'>
      <label
        className={`profile-nav-label ${
          activeSection === 'profile' ? 'active' : ''
        } `}
        onClick={() => handleNav('profile')}
      >
        Profile
      </label>

      <label
        className={`profile-nav-label ${
          activeSection === 'film' ? 'active' : ''
        } `}
        onClick={() => handleNav('film')}
      >
        Films
      </label>
      <label
        className={`profile-nav-label ${
          activeSection === 'reviews' ? 'active' : ''
        } `}
        onClick={() => handleNav('reviews')}
      >
        Reviews
      </label>
      <label
        className={`profile-nav-label ${
          activeSection === 'watchlist' ? 'active' : ''
        } `}
        onClick={() => handleNav('watchlist')}
      >
        WatchList
      </label>
      <label
        className={`profile-nav-label ${
          activeSection === 'likes' ? 'active' : ''
        } `}
        onClick={() => handleNav('likes')}
      >
        Likes
      </label>
      <label
        className={`profile-nav-label ${
          activeSection === 'network' ? 'active' : ''
        } `}
        onClick={() => handleNav('network')}
      >
        Network
      </label>
    </div>
  )
}

export default ProfileNav
