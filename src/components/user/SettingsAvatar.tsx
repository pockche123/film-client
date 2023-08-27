import React from 'react'
import './SettingsAvatar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons';


const SettingsAvatar = () => {
  return (
    <div className="settings-avatar">
      <h4>Avatar</h4>
      <div className="settings-avatar-container">
      <div className="settings-avatar-icon">
        <FontAwesomeIcon icon={faUser} id="settings-avatar-user"/>
      </div>
      </div>
    </div>
  )
}

export default SettingsAvatar