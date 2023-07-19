import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Film } from '../../interfaces/IFilm'

const SearchResult = ({
  allGhibli,
    index, 
  film
}: {
  allGhibli: boolean
        index: number
  film: Film
}) => {
  const [selectedFilm, setSelectedFilm] = useState<Film | undefined>()
    const navigate = useNavigate()
    
    
  function goToFilmPage (selectedFilm: Film) {
    setSelectedFilm(selectedFilm)
    navigate(`/imdbId/${selectedFilm.imdbId}`, {
      state: { film: selectedFilm }
    })
  }

  return (
    <div
      key={index}
      className='film-box'
      onClick={() => {
        goToFilmPage(film)
      }}
    >
      {allGhibli && (
        <div className='index'>
          <h4>{index + 1}</h4>
        </div>
      )}
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <img src={film.poster} alt='film-poster' style={{ height: '23vh' }} />
        <div>
          <div style={{ paddingLeft: '1vw' }}>
            <h4>{film.title}</h4>
            <i style={{ opacity: '0.7' }}>
              {new Date(film.releaseDate).toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric'
              })}
            </i>
          </div>
          <p />
          <div className='searchbox-overview'>{film.overview}</div>
        </div>
      </div>
    </div>
  )
}

export default SearchResult
