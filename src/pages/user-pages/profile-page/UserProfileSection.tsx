import React, { useState } from 'react'
import { IUser } from '../../../interfaces/IUser'
import './UserProfileSection.css'


const UserProfileSection = ({ data }: { data: IUser | undefined }) => {

    const [posters, setPosters] = useState([]); 
    

  return (
      <section className="user-profile-section">
          <article className="user-profile-posters">
              <h6>FAVOURITE FILMS</h6>
              <hr></hr>
           <div className="user-profile-poster-container">
              {[0, 1, 2, 3].map(index => (
                  <div key={index} className="user-profile-poster-card">
                  
                  </div>
              ))}
              </div>
              <section className="user-profile-activity">
                  <h6>RECENT ACTIVITY</h6>
                  <div className='user-profile-poster-container'>
  {[0, 1, 2, 3].map(index => (
    <div key={index} className='user-profile-poster-card'></div>
  ))}
</div>

                  
                  
              </section>
              
            
  

            
          </article>
          <article className="user-profile-bio">
              <h6>BIO</h6>
              <hr/>
          </article>
          


      </section>
  )
}

export default UserProfileSection