import React from 'react'
import { IStream } from '../../interfaces/IStream'
import { useNavigate } from 'react-router-dom'
import { faWindowRestore } from '@fortawesome/free-solid-svg-icons'
import netflix from '../../assets/netflix.png'

const StreamCard = ({ stream }: { stream: IStream }) => {
    
    const navigate = useNavigate()


    const icon = stream.name === ("netflix") ? netflix :''
        


    const handleStream = () => {
        window.location.href = stream.link

    }


  return (
      <div className="stream-icon">
          <img src={icon} alt="stream icon" onClick={handleStream} />
   
    </div>
  )
}

export default StreamCard