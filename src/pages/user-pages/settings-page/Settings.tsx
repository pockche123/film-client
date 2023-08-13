import React from 'react'
import { useLocation } from 'react-router-dom'
import Header from '../../../components/header/Header';
import Footer from '../../../components/footer/Footer';
import './Settings.css';

const Settings = () => {
    const location = useLocation(); 
    const user = location.state && location.state.data; 
    const username = user.username; 


    return (
        <>
            <Header/>
            <section className="settings">
                <div className="settings-header">
                    <h3>Account Settings</h3>
                    
                </div>
                

            </section>
            <Footer/>
            
            </>
  )
}

export default Settings