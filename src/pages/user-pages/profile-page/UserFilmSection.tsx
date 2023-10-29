import React, { useEffect, useState } from 'react'
import { IUser } from '../../../interfaces/IUser'
import './UserFilmSection.css';
import { getWatchedByUser } from '../../../components/services/API/Watched';
import { IWatched } from '../../../interfaces/IWatched';

const UserFilmSection = ({ data }: { data: IUser | undefined }) => {
  
  const username = data?.username as string 
  const [watchedData, setWatchedData] = useState<IWatched[]>([])

  const getWatchedByUsername = () => {

    getWatchedByUser(username)
      .then(res => setWatchedData(res.data))
      .catch(e => console.log(e))

  }

  useEffect(() => {

    getWatchedByUsername(); 

  }, [])

    
  return (
      <section className="user-film-section">
          <h6>WATCHED</h6>
          <hr />

      
        <div className={watchedData.length > 0? "user-film-container"  : "no-user-film-container"}>
          {
            watchedData.map(d =>
              <div className="watched-film">
                <img src={d?.film.poster} alt="poster" />
              </div>
            )
          }
              
        </div>
      


      
   </section>
  )
}

export default UserFilmSection