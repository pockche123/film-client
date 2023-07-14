import React, { useEffect, useState } from 'react'
import TrailerButton from '../icons/TrailerButton'
import { Film } from '../../interfaces/IFilm'
import './Stream.css'
import { getStreamByFilm } from '../services/API/Stream'
import { IStream } from '../../interfaces/IStream'
import StreamCard from './StreamCard'

const Stream = ({ film }: { film: Film }) => {
    const trailerLink = film.trailerLink
    const title = film.title
    const [data, setData] = useState<Array<IStream>>([])
    

    useEffect(() => {
        getStreamsByFilm()
    })

    const getStreamsByFilm = () => {
        
        getStreamByFilm(title)
            .then(res => {
            setData(res.data)
        }).catch(e => console.log(e))
    }



  return (
    <div className='streams'>
          <div className="stream-head">
              <h5 id="stream-head-tag">Watch here</h5>
          <TrailerButton trailerLink={trailerLink} />
          </div>
          <div>
              {
                  data.map(stream => (
                      <div key={stream.id}>
                          <StreamCard stream={stream}/>
                          </div>
                  ))
              }
              
          </div>
</div>

  )
}

export default Stream