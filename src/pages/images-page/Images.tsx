import React from 'react'
import BackToMain from '../../components/films/BackToMain'
import { useLocation, useNavigate } from 'react-router-dom'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import './Images.css'
import { Paths } from '../../components/services/Utils/Paths'

const Images = () => {

  const location = useLocation()
  const film = location.state && location.state.film
  const images = film.backdrops
  const navigate = useNavigate()



  return (
    <div className="images">
      <Header />
      <div className="image-content">
        <BackToMain film={film} />
        <div className="image-section">
          <div className="image-flex-one">

          </div>
          <div className="image-flex-two">
            {images.map((image: string) => (
              <div className="image-each"  >
                <a href={image}>
                  <img src={image} alt="image" />
                  </a>
                </div>
            ))}


          </div>


        </div>
        


        </div>
      


      <Footer/>


    </div>
  )
}

export default Images