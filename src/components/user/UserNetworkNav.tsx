import React from 'react'
import './UserNetworkNav.css'
import './ProfileNav.css'

const UserNetworkNav = ({
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
    <div className='user-nav'>
      <label
        className={`profile-nav-label ${
          activeSection === 'following' ? 'active' : ''
        } `}
        onClick={() => handleNav('following')}
      >
        <h6>FOLLOWING</h6>
      </label>
      <label
        className={`profile-nav-label ${
          activeSection === 'followers' ? 'active' : ''
        } `}
        onClick={() => handleNav('followers')}
      >
        <h6>FOLLOWERS</h6>
      </label>
      <label
        className={`profile-nav-label ${
          activeSection === 'blocked' ? 'active' : ''
        } `}
        onClick={() => handleNav('blocked')}
      >
        <h6>BLOCKED</h6>
          </label>
          <hr/>
    </div>
  )
}

export default UserNetworkNav
