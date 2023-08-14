import React, { useState } from 'react'
import './SettingsProfile.css'
import { IUser } from '../../interfaces/IUser'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen } from '@fortawesome/free-solid-svg-icons'

const SettingsProfile = ({ user }: { user: IUser }) => {
  const [username, setUsername] = useState('')
    const [email, setEmail] = useState(user.email)
    const [bio, setBio] = useState('')
    

    
    const handleBioChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const inputValue = e.target.value;
    
        // Enforce a character limit of 100 characters
        if (inputValue.length <= 100) {
            setBio(inputValue);
        }
    }

  return (
    <div className='settings-profile'>
      <article className='settings-profile-container'>
        <h4>Profile</h4>
        <div className='settings-label'>
          <label>Username</label> <br />
          <p>
            <FontAwesomeIcon icon={faPen} />
          </p>
          <input
            type='text'
            value={user.username}
            onChange={e => setUsername(e.target.value)}
            disabled
          />
        </div>
        <div className='settings-label'>
          <label>Email address</label>
          <input
            type='text'
            value={user.email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        
        <div className='settings-label'>
          <label>Bio</label> <br/>
          <textarea
                      value={bio}
                      onChange = {(e) => handleBioChange(e) }
                      
                  />
                  <>Remaining characters: {100 - bio.length}</>

        </div>
      </article>

      <article className='settings-profile-container'></article>
    </div>
  )
}

export default SettingsProfile
