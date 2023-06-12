import React from 'react'
import Films from '../../components/films/Films'
import LandingPage from '../../components/landing/LandingPage'
import { Navbar } from 'react-bootstrap'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'

const Home = () => {
  return (
    <>
      <Header/>
    <div className='home-page' style={{ overflow: 'hidden'}}>
      <LandingPage />
    
        <Films />
      </div>
      <Footer/>
      </>
  )
}

export default Home
