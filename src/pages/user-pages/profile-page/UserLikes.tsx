import React from 'react'
import { IUser } from '../../../interfaces/IUser'
import './UserLikes.css'

const UserLikes = ({ data }: { data: IUser | undefined }) => {
  return (
    <section className='user-likes-section'>
      <h6>LIKES</h6>
      <hr />
      <div className='user-likes-container'>
              <section className='user-likes-films'>
                  <h6>FILMS</h6>
                  <hr />
                  <div className='user-likes-films-container'>
                      
                  </div>
                  
        </section>
              <section className='user-likes-reviews'>
                  <h6>REVIEWS</h6>
                  <hr />
                  <div className='user-likes-films-container'></div>

        </section>
              <section className='user-likes-discussions'>
                  <h6>DISCUSSIONS</h6>
                  <hr />
                  <div className='user-likes-films-container'></div>

                  
        </section>
      </div>
    </section>
  )
}

export default UserLikes
