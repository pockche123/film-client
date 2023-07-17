import React from 'react'
import './ImageBlock.css'
import { Film } from '../../interfaces/IFilm'
import { useNavigate } from 'react-router-dom'
import { Paths } from '../services/Utils/Paths'

const ImageBlock = ({ film }: { film: Film }) => {
  const images = film.backdrops
  const filmTitle = film.title

  const navigate = useNavigate();

  const handleImages = () => {
    navigate(Paths.images + filmTitle, {state:{film}})
  }
  return (
    <div className='image-block'>
      <div className='image-head'>
        <h4 id='image-title'>Images</h4>
        <label id='image-handle'>
          <b onClick={handleImages}>Go to all images</b>
        </label>
      </div>

      <div className='image'>
        {images.slice(0, 10).map(image => (
          <img src={image} alt='backdrop' id='backdrop' />
        ))}
      </div>
    </div>
  )
}

export default ImageBlock
