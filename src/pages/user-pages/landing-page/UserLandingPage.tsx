
import React from 'react'
import { useLocation} from 'react-router-dom'
import './UserLandingPage.css'

const UserLandingPage = () => {
    const location = useLocation();
  const user = location.state && location.state.user;



  
  


  return (
    <div className="user-landing-page">
      
      <h4> Welcome {user?.username}</h4>
      <hr/>
    
    </div>
  )
}

export default UserLandingPage