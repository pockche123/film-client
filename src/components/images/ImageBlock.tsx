import React from 'react'
import './ImageBlock.css'
import { Film } from '../../interfaces/IFilm'

const ImageBlock = ({ images }: { images: string[] }) => {


  const handleImages = () =>{
    
  }
  return (
    <div className='image-block'>
      <div className="image-head">
      <h4
        id="image-title"
      >
        Images 
        </h4>
        <span id="image-handle">
        <b onClick={handleImages}>
          Go to all images
          </b>
          </span>


      </div>

      <div className='image'>
  {images.map(image => (
    <img src={image} alt='backdrop' id='backdrop' />
  ))}
</div>

    </div>
  )
}

export default ImageBlock
