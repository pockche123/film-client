import { faClose, faPlus, faX } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import React, { ChangeEvent, useState } from 'react'
import { getAllFilms } from '../services/API/Films'
import { Film } from '../../interfaces/IFilm'

const Backup= () => {
  const [search, setSearch] = useState('')
  const [addPoster, setAddPoster] = useState(false)
  const [foundMatches, setFoundMatches] = useState(Array<Film>)
  const [posters, setPosters] = useState<Array<string>>([])

  const renderFoundMatches = () => {
    if (foundMatches.length === 0) {
      return null
    } else {
      return (
        <ul>
          {foundMatches.map(film => (
            <div onClick={() => handlePoster(film)}>
              <li>{film.title}</li>
            </div>
          ))}
        </ul>
      )
    }
  }

  const handlePoster = (film: Film) => {
    setAddPoster(false)
    setSearch('')
    setFoundMatches([])
    setPosters(prevPosters => [...prevPosters, film.poster])
  }

  const removePoster = (num: number) => {
    setPosters(
      posters.slice(0, num).concat(posters.slice(num + 1, posters.length))
    )
  }

  const findMatches = async (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)

    const foundMatches = await getAllFilms().then(res =>
      res.data?.filter(
        (movie: Film) =>
          !posters.includes(movie.poster) &&
          movie.title &&
          movie.title.toLowerCase().includes(e.target.value.toLowerCase())
      )
    )

    setFoundMatches(foundMatches)
  }

  return (
    <div className='settings-poster'>
      {[0, 1, 2, 3].map(index => (
        <div key={index} className='settings-poster-card'>
          {posters[index] && (
            <div>
              <img src={posters[index]} alt='poster' />

              <p className='x-icon' onClick={() => removePoster(index)}>
                <FontAwesomeIcon icon={faX} />
              </p>
            </div>
          )}
          <p className='settings-poster-add' onClick={() => setAddPoster(true)}>
            <FontAwesomeIcon icon={faPlus} />
          </p>
        </div>
      ))}

      {addPoster && (
        <section className='add-poster'>
          <article className='add-poster-container'>
            <h5>PICK YOUR FAVOURITE FILM</h5>
            <p onClick={() => setAddPoster(false)}>
              <FontAwesomeIcon className='close-icon' icon={faClose} />
            </p>
            <label>Name of film</label> <br />
            <input
              type='text'
              id='add-poster-input'
              value={search}
              onChange={e => findMatches(e)}
            />
            <section className='search-result'>{renderFoundMatches()}</section>
          </article>
        </section>
      )}
    </div>
  )
}

export default Backup
