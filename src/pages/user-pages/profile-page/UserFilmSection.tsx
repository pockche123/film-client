import React from 'react'
import { IUser } from '../../../interfaces/IUser'
import './UserFilmSection.css';

const UserFilmSection = ({data}:{data:IUser| undefined}) => {

    
  return (
      <section className="user-film-section">
          <h6>WATCHED</h6>
          <hr />
          <div className="user-film-container">
              
          </div>
   </section>
  )
}

export default UserFilmSection