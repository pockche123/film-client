import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getAUser } from '../../../components/services/API/Users'
import { IUser } from '../../../interfaces/IUser'
import Header from '../../../components/header/Header'
import Footer from '../../../components/footer/Footer'
import './UserProfile.css'
import ProfileImage from '../../../components/user/ProfileImage'
import ProfileNav from '../../../components/user/ProfileNav'
import { Button } from 'react-bootstrap'
import { Paths } from '../../../components/services/Utils/Paths'
import UserProfileSection from './UserProfileSection'
import UserFilmSection from './UserFilmSection'
import UserReviewsSection from './UserReviewsSection'
import UserWatchList from './UserWatchList'
import UserLikes from './UserLikes'
import UserNetwork from './UserNetwork'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFlag } from '@fortawesome/free-solid-svg-icons'
import ReportOptions from './ReportOptions'

const UserProfile = () => {
  const params = useParams()
  const username = params.username as string
  const [data, setData] = useState<IUser>()
  const [activeSection, setActiveSection] = useState('profile')
  const loggedIn = false
  const navigate = useNavigate()
  const [followClicked, setFollowClicked] = useState(false)
  const [follow, setFollow] = useState('FOLLOW')
  const [flagClicked, setFlagClicked] = useState(false)
  const [blocked, setBlocked] = useState(false)
  const [report, setReport] = useState(false)
  const [message, setMessage] = useState("")

  let optionsArray = ReportOptions; 
  const [selectedOption, setSelectedOption] = useState(optionsArray[0]); 


  const handleSectionChange = (section: string) => {
    setActiveSection(section)
  }

  const getTheUser = () => {
    getAUser(username)
      .then(res => {
        setData(res.data)
        console.log(res.data)
      })
      .catch(e => console.log(e))
  }

  useEffect(() => {
    getTheUser()
  })

  const handleEditProfile = () => {
    navigate(Paths.settings, { state: { data } })
  }

  const handleFollow = () => {
    setFollowClicked(prev => !prev)
    console.log(followClicked)
    follow === 'FOLLOW' ? setFollow('FOLLOWING') : setFollow('FOLLOW')
  }

  const handleMouseEnter = () => {
    if (followClicked) {
      setFollow('UNFOLLOW')
    }
  }

  const handleMouseLeave = () => {
    if (followClicked) {
      setFollow('FOLLOWING')
    }
  }

  return (
    <>
      <Header />
      <div className='whole-page'>
        <section className='user-profile'>
          <div className='user-header'>
            <article className='user-header-article'>
              <ProfileImage user={data} />
              <div className='user-profile-label'>
                <h5 id='user-profile-username'>{data?.username}</h5>
                {loggedIn ? (
                  <div
                    className='user-edit-profile'
                    onClick={handleEditProfile}
                  >
                    <Button variant='secondary'>EDIT PROFILE</Button>
                  </div>
                ) : (
                  <section className='user-follow-report'>
                    <div
                      className={
                        followClicked
                          ? 'user-profile-follow-clicked'
                          : 'user-profile-follow'
                      }
                    >
                      <button
                        className='btn btn-secondary'
                        onClick={() => handleFollow()}
                        onMouseEnter={() => handleMouseEnter()}
                        onMouseLeave={() => handleMouseLeave()}
                      >
                        {follow}{' '}
                      </button>
                    </div>
                      <div className='user-flag'>
                        <div className="user-flag-icon">
                      <FontAwesomeIcon
                        icon={faFlag}
                          onClick={() => setFlagClicked(prev => !prev)}
                          
                          />
                          </div>
               
                    <section className='user-flag-options'>
                      {flagClicked && (
                        <div className='user-flag-clicked'>
                          <label onClick={() => setBlocked(true)}>
                            Block this member
                          </label>
                          <label onClick={() => setReport(true)}>
                            Report this member
                          </label>
                        </div>
                      )}
                        </section>
                        </div>
                    {blocked && (
                      <div className='block-report'>
                        <section className='block-report-container'>
                            <h6>PLEASE CONFIRM</h6>
                            <label>Are you sure you want to block this member? Their past comments will be removed from your reviews and lists, you will be unsubscribed from all relevant comment notifications and you will both be prevented from replying to each other’s content.</label>
                          
                            <div className="block-report-buttons">
                            <button  className="btn btn-light"onClick={() => setBlocked(false)}>
                            CANCEL
                              </button>  
                            <button className='btn btn-light' onClick={() => setBlocked(false)}>
  BLOCK
</button>

                              </div>
                        </section>
                      </div>
                    )}

                    {report && (
                      <div className='block-report'>
                        <section className='block-report-container'>
                            <h6>REPORT THIS MEMBER</h6>
                            <label>You may use this form to report community policy breaches. If the breach is in an individual review, list or comment, please report it directly using the flag icon. This helps our moderators handle your report in the shortest possible time. If you are receiving unwanted interactions from another member, there is an option to block them from their profile page, or from an individual comment.</label>
                         <div className="block-report-question">
                          <label htmlFor="selectOptions">Why are you reporting this member?</label> <br/>
                          <select  id="selectOptions" value={selectedOption} onChange={(e) => {setSelectedOption(e.target.value)}}>
                                {optionsArray.map((option, index) => (
                                  <option key={index} value={option}>
                                    {option}
                                  </option>

                               ))}

                            </select>


                            </div>
                            <div className="block-report-question">
                              <label>Message (please include links to specific policy breaches if relevant)</label>
                              <textarea value={message} onChange={(e) => setMessage(e.target.value)}/>

                            </div>
                         
                          <div className='block-report-buttons'>
  <button className='btn btn-light' onClick={() => setReport(false)}>
    CANCEL
  </button>
  <button className='btn btn-light' onClick={() => setReport(false)}>
    REPORT
  </button>
</div>
  



                        </section>
                      </div>
                    )}
                  </section>
                )}
              </div>
            </article>

            <article className='user-header-article'>
              <h3>3</h3>
              <span>Films</span>
            </article>
            <article className='user-header-article'>
              <h3>3</h3>
              <span>Followers</span>
            </article>
            <article className='user-header-article'>
              <h3>4</h3>
              <span>Follow</span>
            </article>
          </div>
          <div className='user-contents'>
            <div className='user-nav'>
              <ProfileNav
                activeSection={activeSection}
                onSectionChange={handleSectionChange}
              />
            </div>
          </div>
          <div>
            {activeSection === 'profile' && (
              <section>
                <UserProfileSection data={data} />
              </section>
            )}
          </div>
          <div>
            {activeSection === 'film' && (
              <section>
                <UserFilmSection data={data} />
              </section>
            )}
          </div>
          <div>
            {activeSection === 'reviews' && (
              <section>
                <UserReviewsSection data={data} />
              </section>
            )}
          </div>
          <div>
            {activeSection === 'watchlist' && (
              <section>
                <UserWatchList data={data} />
              </section>
            )}
          </div>
          <div>
            {activeSection === 'likes' && (
              <section>
                <UserLikes data={data} />
              </section>
            )}
          </div>
          <div>
            {activeSection === 'network' && (
              <section>
                <UserNetwork data={data} />
              </section>
            )}
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}

export default UserProfile
