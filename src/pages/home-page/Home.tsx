import React, { useEffect, useState } from 'react'
import Films from '../../components/films/Films'
import LandingPage from '../../components/landing/LandingPage'
import { Navbar } from 'react-bootstrap'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import { getTopRatedFilms } from '../../components/services/API/Films'

const Home = () => {

  const [data, setData] = useState(); 
  
  useEffect(() => {

    getTopRatedFilms()
      .then(res => setData(res.data))
     
    
  
    console.log("THIS IS THE TOP RATED FILMS ",  data);
})


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
