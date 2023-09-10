
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
      <Header />
      
      <div className="whole-page">
    <section className="user-landing-page">
      
        <article className="user-landing-title">
          <h4> Welcome <a href={Paths.userProfile + user.username}>{user?.username}</a>. Here's what we've been watching...</h4>
          </article>

        
      
        <article className="popular-films">
          <h5>POPULAR ON STUDIO</h5>
            <hr />
          <div className="popular-films-container">
            {[0, 1, 2, 3, 4].map(index => (
              <div className="poster-card">

              </div>
            ))
              }
            </div>
          </article>
          
          <article className="popular-films">
            <h5>POPULAR REVIEWS THIS WEEK</h5>
            <hr />
            <div className="popular-films-container">
              {
                [0, 1].map(index => (
                  <div className="review-card">

                    </div>
                ))
              }

            </div>

          </article>

        <article className='popular-films'>
  <h5>POPULAR DISUCSSIONS THIS WEEK</h5>
  <hr />
  <div className='popular-films-container'>
    {[1].map(index => (
      <div className='discussion-card'></div>

    ))}
  </div>
</article>

    
        </section>
        </div>
      <Footer/>
      </>
  )
}

export default UserLandingPage