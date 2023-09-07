
import React from 'react'
import { useLocation} from 'react-router-dom'
import './UserLandingPage.css'
import Header from '../../../components/header/Header';
import Footer from '../../../components/footer/Footer';
import { Paths } from '../../../components/services/Utils/Paths';

const UserLandingPage = () => {
    const location = useLocation();
  const user = location.state && location.state.user;



  
  


  return (
    <>
      <Header/>
    <div className="user-landing-page">
      
      <h4> Welcome <a href={Paths.userProfile + user.username}>{user?.username}</a>. Here's what we've been watching...</h4>
      <hr/>
    
      </div>
      <Footer/>
      </>
  )
}

export default UserLandingPage