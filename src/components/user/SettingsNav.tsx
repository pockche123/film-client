import React, { useState } from 'react'
import './SettingsNav.css'

const SettingsNav = ({ activeSection, onSectionChange }: { activeSection: string, onSectionChange: Function }) => {


    const[deleteAccount, setDeleteAccount] = useState(false)

    const handleNav = (label: string) => {
  onSectionChange(label)
}

    const handleDeleteAccount = () => {
       setDeleteAccount(true)
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

          {
              deleteAccount && (
                  <section className="delete-account">
                      <article className="delete-account-container">
                          <label>Are you sure you want to delete this account? </label>
                          
                          <div className="delete-account-buttons">
                              <button className="btn btn-light">Yes</button>
                              <button className="btn btn-light" onClick={() => {setDeleteAccount(false)}}> Cancel</button>
                          </div>
                      </article>
                      
                      
                  </section>
                  
             ) 


          }



    </div>
  )
}

export default SettingsNav