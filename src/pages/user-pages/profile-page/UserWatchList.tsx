import React from 'react'
import { IUser } from '../../../interfaces/IUser'
import './UserWatchList.css'

const UserWatchList = ({ data }: { data: IUser | undefined }) => {


  
    

  return (
      <section className="user-watchlist-section">
           <h6>WATCHLIST</h6>
      <hr />
      <div className='user-watchlist-container'>


      </div>


          
   </section>
  )
}

export default UserWatchList