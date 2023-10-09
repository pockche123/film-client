import React, { ChangeEvent, useState } from 'react'
import './SettingsProfile.css'
import { IUser } from '../../interfaces/IUser'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faPlus, faClose, faX } from '@fortawesome/free-solid-svg-icons'
import { getAllFilms } from '../services/API/Films'
import { Film } from '../../interfaces/IFilm'
import SettingsPosters from './SettingsPosters'

const SettingsProfile = ({ user }: { user: IUser }) => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState(user.email)
  const [bio, setBio] = useState('')



  const handleBioChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const inputValue = e.target.value

    // Enforce a character limit of 100 characters
    if (inputValue.length <= 100) {
      setBio(inputValue)
    }
  }

  const handleSaveChanges = () => {
    // something to do here later
  }

  const handleSubmit = () => {
    //something to do here later
  }

 

  return (
    <div className='settings-profile'>
      <form className='settings-profile-container' onSubmit={handleSubmit}>
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
          <label>Bio</label> <br />
          <textarea value={bio} onChange={e => handleBioChange(e)} />
          <>Remaining characters: {100 - bio.length}</>
        </div>
        <div onClick={handleSaveChanges}>
          <button className='btn btn-secondary'>SAVE CHANGES</button>
        </div>
      </form>

      <section className='settings-profile-container'>
        <div className='settings-poster-head'>
          <h6> Favourite Films</h6>
          <p>Drag posters to reorder</p>
        </div>

        <SettingsPosters user={user} />
  
      </section>
    </div>
  )
}

export default SettingsProfile
