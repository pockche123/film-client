import { Paper } from '@mui/material'
import { FilmProps } from '../../interfaces/IFilm'
import './Films.css'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Parallax } from 'react-parallax'
import { Paths } from '../services/Utils/Paths'

const FilmCard = (props: FilmProps) => {
  const { imdbId, backdrops, poster, title, quote, year } = props.film
  const navigate = useNavigate()

  useEffect(() => {
    console.log(backdrops[0])
  })

  function goToFilmPage (imdbId: string) {
    navigate(`${Paths.imdbId}${imdbId}`, { state: { film: props.film } })
  }

  return (
    <Paper key={imdbId}>
      <div className='film-card-container'>
        <Parallax
          className='film-card'
          strength={1000}
          style={{ '--img': `url(${backdrops[0]})` } as React.CSSProperties}
        >
          <div className='film-detail'>
            <div className='film-poster'>
              {
                <img
                  src={poster}
                  alt='film poster'
                  onClick={() => goToFilmPage(imdbId)}
                />
              }
            </div>

            <div className='titleAndQuote'>
              <div className='film-title'>
                <h5>
                  <u>
                    {title} ({year})
                  </u>
                </h5>
              </div>
              <p />
              <div className='film-quote'>
                <h6>
                  <i>"{quote}"</i>
                </h6>
              </div>
            </div>
          </div>
          {/* </div> */}
        </Parallax>
      </div>
    </Paper>
  )
}

export default FilmCard
