import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import Header from '../../../components/header/Header';
import Footer from '../../../components/footer/Footer';
import './Settings.css';
import SettingsNav from '../../../components/user/SettingsNav';
import SettingsProfile from '../../../components/user/SettingsProfile';
import SettingsAuth from '../../../components/user/SettingsAuth';
import SettingsAvatar from '../../../components/user/SettingsAvatar';

const Settings = () => {
    const location = useLocation(); 
    const user = location.state && location.state.data; 
    const username = user.username; 
    const [activeSection, setActiveSection] = useState('profile');



    const handleSectionChange = (section: string) => {
  setActiveSection(section)
}



    return (
        <section className="settings-container">
            <Header/>
            <section className="settings">
                <div className="settings-header">
                    <h3>Account Settings</h3>
                </div>
                <div className="settings-nav"> 
                    <SettingsNav activeSection={activeSection} onSectionChange={handleSectionChange} />
                </div>
                <div>
                    {activeSection === 'profile' && (
                        <SettingsProfile user={user} />
                    )}
                </div>
                <div>
                    {activeSection === 'auth'
                    
                        && <SettingsAuth />}
                </div>
                <div>{activeSection === 'avatar' &&
                    <SettingsAvatar />}
                </div>



            </section>
            <Footer/>
            
            </section>
  )
}

export default Settings