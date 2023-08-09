import React from 'react'

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
        onClick={() => handleNav('profile')}
      >
        Film
      </label>
    </div>
  )
}

export default ProfileNav
