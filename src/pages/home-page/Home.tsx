import React from 'react'
import Films from '../../components/films/Films'
import LandingPage from '../../components/landing/LandingPage'

const Home = () => {
  return (
    <div className='home-page' style={{ overflow: 'hidden'}}>
      <LandingPage />
      <Films />
    </div>
  )
}

export default Home
