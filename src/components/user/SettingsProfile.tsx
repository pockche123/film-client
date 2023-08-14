import React, { useState } from 'react'
import './SettingsProfile.css'
import { IUser } from '../../interfaces/IUser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';


const SettingsProfile = ({user}:{user:IUser}) => {

    const [username, setUsername] = useState(""); 




  return (
      <div className="settings-profile">
          <article className="settings-profile-container">
              <h4>Profile</h4>
              <div className="settings-label">
              <label>Username</label> <br />
                <p>
                  <FontAwesomeIcon icon={faPen} />
                 </p>
                  <input type="text" value={user.username} onChange={e => setUsername(e.target.value)} disabled />
             </div>



          </article>

          <article className="settings-profile-container">
              
          </article>
      </div>
  )
}

export default SettingsProfile