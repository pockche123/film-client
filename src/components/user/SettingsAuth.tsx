import React, { useState } from 'react'
import './SettingsAuth.css'

const SettingsAuth = () => {

  const [password, setPassword] = useState(""); 
  const [newPassword, setNewPassword] = useState(""); 
  const [confirmPassword, setConfirmPassword] = useState(""); 
  


  
  return (
    <form className="settings-auth">
      <h4>Change Password</h4>

      <div className="settings-label">
        <label>Current Password</label> <br/>
        <input type="text" value={password}  onChange={e => {setPassword(e.target.value)}}/>
      </div>
      <div  className="settings-label">
        <label>New Password</label> <br/>
        <input type="text" value={newPassword} onChange={e => {setNewPassword(e.target.value)}}/>
      </div>
      <div className="settings-label">
        <label>Confirm New Password</label> <br/>
        <input type="text" value={confirmPassword} onChange = {e => {setConfirmPassword(e.target.value)}}/>
      </div>
      <p/>
      <div>
        <button className="btn btn-secondary">CHANGE</button>
      </div>

    </form>
  )
}

export default SettingsAuth