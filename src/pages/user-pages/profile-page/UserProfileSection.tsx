import React, { useEffect, useState } from 'react'
import { IUser } from '../../../interfaces/IUser'
import './UserProfileSection.css'
import { getFavouritesByUsername } from '../../../components/services/API/Favourite'
import { IFavourite } from '../../../interfaces/IFavourite'

const UserProfileSection = ({
  user,
  username
}: {
  user: IUser | undefined
  username: string
}) => {
  const [posters, setPosters] = useState<Array<string>>([])
  const [favourites, setFavourites] = useState<Array<IFavourite>>([])
  // const username = user?.username as string

  const fetchUserFavourites = () => {
    getFavouritesByUsername(username)
      .then(res => setFavourites(res.data))
      .catch(e => console.log(e))
  }

  useEffect(() => {
    fetchUserFavourites()

    if (favourites) {
      const filmPosters = favourites.map(fav => fav.film.poster)
      setPosters(filmPosters)
    }
  }, [favourites])

  return (
    <section className='user-profile-section'>
      <article className='user-profile-posters'>
        <h6>FAVOURITE FILMS</h6>
        <hr></hr>
        <div className='user-profile-poster-container'>
          {[0, 1, 2, 3].map(index => (
            <div key={index} className='user-profile-poster-card'>
              <img src={posters[index]} alt='' />
            </div>
          ))}
        </div>
        <section className='user-profile-activity'>
          <h6>RECENT ACTIVITY</h6>
          <div className='user-profile-poster-container'>
            {[0, 1, 2, 3].map(index => (
              <div key={index} className='user-profile-poster-card'></div>
            ))}
          </div>
        </section>
      </article>
      <article className='user-profile-bio'>
        <h6>BIO</h6>
        <hr />
      </article>
    </section>
  )
}

export default UserProfileSection
