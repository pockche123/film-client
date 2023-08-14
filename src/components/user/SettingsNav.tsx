import React from 'react'
import './SettingsNav.css'

const SettingsNav = ({ activeSection, onSectionChange }: { activeSection: string, onSectionChange: Function }) => {

    const handleNav = (label: string) => {
  onSectionChange(label)
}

    const handleDeleteAccount = () => {
        
    }
    


  return (
      <div className="profile-nav">
          
          <label
              className={`profile-nav-label ${
                  activeSection === 'profile' ? 'active': ''
                  }`}
              onClick={() => handleNav('profile')}
          >
              Profile
          </label>
          <label
              className={`profile-nav-label ${activeSection === 'auth' ? 'active' : ''}`}
              onClick={() => handleNav('auth')}
>
  Auth
          </label>
          <label
              className={`profile-nav-label ${activeSection === 'avatar' ? 'active' : ''}`}
              onClick={() => handleNav('avatar')}
          >
              Avatar 
              
          </label>
          
          {/* <label
  className={`profile-nav-label ${activeSection === 'avatar' ? 'active' : ''}`}
  onClick={() => handleNav('avatar')}
          >
  Avatar
          </label> */}
          <label id="deactivate-label" onClick={handleDeleteAccount}>
              Deactivate account    
          </label>


    </div>
  )
}

export default SettingsNav