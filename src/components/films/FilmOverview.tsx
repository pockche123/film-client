import React from 'react'
import LikeMovie from '../../components/icons/LikeMovie'
import AddToWatch from '../../components/icons/AddToWatch'
import RateFilm from '../../components/icons/RateFilm'
import TrailerButton from '../../components/icons/TrailerButton'
import { useState } from 'react'
import '../../pages/film-page/FilmPage.css'

const FilmOverview = ({ film }: { film: any }) => {
  const poster = film.poster
  const overview = film.overview
  const quote = film.quote
  const title = film.title
  const year = film.year
  const backdrops = film.backdrops
  const releaseDate = film.releaseDate
  const pgRating = film.pgRating
  const totalmins = film.duration
  const genres = film.genres
  const trailerLink = film.trailerLink
  const [enlarged, setEnlarged] = useState(false)
  const [yy, month, day] = releaseDate ? releaseDate.split('-') : ['', '', '']
  const duration = Math.floor(totalmins / 60) + 'h ' + (totalmins % 60) + 'm'

  const britishDate = `${day}/${month}/${yy}`

  function toggleEnlarged () {
    setEnlarged(!enlarged)
  }

  return (
    <div
      className='film-info'
      style={
        { '--backgroundImg': `url(${backdrops[2]})` } as React.CSSProperties
      }
      
    >
      <div className='detail'>
        <div className='poster'>
          <img
            src={poster}
            alt='film poster'
            onClick={() => toggleEnlarged()}
          />
          {enlarged && (
            <div className='overlay' onClick={() => toggleEnlarged()}>
              <img src={poster} alt='film poster' className='enlarged' />
            </div>
          )}
        </div>
        <div className='content'>
          <div className='title'>
            <h2>
              <b>
                {title} ({year})
              </b>
            </h2>
          </div>
          <div className='icons-and-deets'>
            <div className='info'>
              <span className='pg-rating'> {pgRating} </span> &nbsp;
              <b>{britishDate} (GB)</b> &nbsp; &#8226; <span />
              <div style={{ display: 'inline-block' }}>
                <span>
                  {' '}
                  <b>{genres.slice(2).join(', ')} </b>
                </span>
                &#8226;
                <span>
                  {' '}
                  <b>{duration}</b>
                </span>
              </div>
            </div>
            <br />

            <div className='icons'>
              <div className='user-score'>
                <b>
                  User <br /> Score
                </b>
              </div>
              <span />
              <LikeMovie />
              <AddToWatch />
              <RateFilm />
              <TrailerButton trailerLink={trailerLink} />
            </div>
          </div>
          <div className='background-coloring'>
            <div className='quote'>{quote}</div>

            <div className='overview'>
              <h5>
                <u>Overview</u>
              </h5>
              <p />
              {overview}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FilmOverview
