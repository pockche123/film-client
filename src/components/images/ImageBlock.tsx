import React from 'react'
import './ImageBlock.css'
import { Film } from '../../interfaces/IFilm'

const ImageBlock = ({ images }: { images: string[] }) => {
  return (
    <div className='image-block'>
      <h4
        style={{ marginLeft: '20px', marginRight: '40px', textAlign: 'left' }}
      >
        Images
        <div className="image">
          {images.map(image => (
            <img src={image} alt='backdrop' id="backdrop" />
          ))}
        </div>
      </h4>
    </div>
  )
}

export default ImageBlock
