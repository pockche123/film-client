import React, { useState } from 'react'
import { IUser } from '../../interfaces/IUser'
import BlockUser from './BlockUser'
import ReportUser from './ReportUser'
import { Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFlag } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router'
import { Paths } from '../services/Utils/Paths'

const UserProfileLabel = ({data, loggedIn}:{data:IUser| undefined, loggedIn:any}) => {
const [flagClicked, setFlagClicked] = useState(false)
const [blocked, setBlocked] = useState(false)
const [report, setReport] = useState(false)
const [followClicked, setFollowClicked] = useState(false)
    const [follow, setFollow] = useState('FOLLOW')
    const navigate = useNavigate(); 


    
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
const handleEditProfile = () => {
  navigate(Paths.settings, { state: { data } })
}



  return (
   <div className='user-profile-label'>
  <h5 id='user-profile-username'>{data?.username}</h5>
  {loggedIn ? (
    <div className='user-edit-profile' onClick={handleEditProfile}>
      <Button variant='secondary'>EDIT PROFILE</Button>
    </div>
  ) : (
    <section className='user-follow-report'>
      <div
        className={
          followClicked ? 'user-profile-follow-clicked' : 'user-profile-follow'
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
        <div className='user-flag-icon'>
          <FontAwesomeIcon
            icon={faFlag}
            onClick={() => setFlagClicked(prev => !prev)}
          />
        </div>

        <section className='user-flag-options'>
          {flagClicked && (
            <div className='user-flag-clicked'>
              <label onClick={() => setBlocked(true)}>Block this member</label>
              <label onClick={() => setReport(true)}>Report this member</label>
            </div>
          )}
        </section>
      </div>
      {blocked && <BlockUser setBlocked={setBlocked} />}

      {report && <ReportUser setReport={setReport} />}
    </section>
  )}
</div>

  )
}

export default UserProfileLabel