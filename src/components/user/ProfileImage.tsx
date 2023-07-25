

import React from 'react'
import { IUser } from '../../interfaces/IUser'
import './ProfileImage.css'

const ProfileImage = ({ user }: { user: IUser | undefined }) => {
    


    
  return (
      <div className="profile-image">
          <img src={user?.profilePic} alt="profile-pic"/>
    </div>
  )
}

export default ProfileImage