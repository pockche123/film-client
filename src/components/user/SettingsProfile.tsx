import React, { ChangeEvent, useState } from 'react'
import './SettingsProfile.css'
import { IUser } from '../../interfaces/IUser'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faPlus, faClose } from '@fortawesome/free-solid-svg-icons';
import { getAllFilms } from '../services/API/Films';
import { Film } from '../../interfaces/IFilm';

const SettingsProfile = ({ user }: { user: IUser }) => {
  const [username, setUsername] = useState('')
    const [email, setEmail] = useState(user.email)
  const [bio, setBio] = useState('')
  const [film, setFilm] = useState('')
  const [addPoster, setAddPoster] = useState(false)
  const [foundMatches, setFoundMatches] = useState(Array<Film>)

    


  const findMatches = async (e: ChangeEvent<HTMLInputElement>) => {
    setFilm(e.target.value);

    const foundMatches = await getAllFilms().then(res =>
  res.data?.filter(
    (movie: Film) =>
      movie.title &&
      movie.title.toLowerCase().includes(e.target.value.toLowerCase())
  )
)

setFoundMatches(foundMatches)

  }


  const renderFoundMatches = () => {
  }
  // if (!search || foundMatches.length === 0) {
  //   return null
  // }

  // return (
  //   <ul>
  //     {foundMatches.map(film => {
  //       const regex = new RegExp(`(${search})`, 'gi')
  //       const titleWithBoldedSearch = film.title.replace(
  //         regex,
  //         '<strong>$1</strong>'
  //       )
  //       return (
  //         <div className='parent'>
  //           <div
  //             className='search-result'
  //             key={film.imdbId}
  //             onClick={e => {
  //               e.preventDefault()
  //               navigate(`/imdbId/${film.imdbId}`, {
  //                 state: { film: film }
  //               })
  //             }}
  //           >
  //             <div className='search-result-icon'>
  //               <FontAwesomeIcon icon={faSearch} style={{ color: '#9ca3af' }} />
  //             </div>
  //             <div
  //               className='search-result-text'
  //               dangerouslySetInnerHTML={{ __html: titleWithBoldedSearch }}
  //             ></div>
  //           </div>
  //         </div>
  //       )
  //     })}
  //   </ul>
  // )


    
    const handleBioChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const inputValue = e.target.value;
    
        // Enforce a character limit of 100 characters
        if (inputValue.length <= 100) {
            setBio(inputValue);
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
          <label>Bio</label> <br/>
          <textarea
                      value={bio}
                      onChange = {(e) => handleBioChange(e) }
                      
                  />
                  <>Remaining characters: {100 - bio.length}</>

        </div>
        <div onClick={handleSaveChanges}>
          <button className="btn btn-secondary">Save Changes</button>
        </div>
      </form>

      <section className='settings-profile-container'>
          <div className="settings-poster-head">
          <h6> Favourite Films</h6>
           <p>Drag posters to reorder</p>
        </div>
        <div className="settings-poster">
          <div className="settings-poster-card" onClick={() => setAddPoster(true)}>
            <p className="settings-poster-add">
              <FontAwesomeIcon icon={faPlus} />
                </p>
          </div>
        <div className="settings-poster-card">
            <p className="settings-poster-add">
              <FontAwesomeIcon icon={faPlus} />
                </p>
          </div>
           <div className="settings-poster-card">
            <p className="settings-poster-add">
              <FontAwesomeIcon icon={faPlus} />
                </p>
          </div>
           <div className="settings-poster-card">
            <p className="settings-poster-add">
              <FontAwesomeIcon icon={faPlus} />
                </p>
          </div>
          { addPoster && (
            <section className="add-poster">
              <div className="add-poster-container">
                <h5>PICK YOUR FAVOURITE FILM</h5>
                <p onClick={() => setAddPoster(false)}><FontAwesomeIcon className="close-icon" icon={faClose} /></p>
              
                <label>Name of film</label> <br />
              
                <input type="text" id="add-poster-input" value={film} onChange={e => findMatches(e)} />

              </div>
              <div className='search-result-whole'>{renderFoundMatches()}</div>


            </section>
          )}

         </div>


      </section>
    </div>
  )
}

export default SettingsProfile
