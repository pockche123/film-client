import React, { useEffect, useState } from 'react'
import { getAllFilms } from '../../components/services/API/Films'
import { Film } from '../../components/interfaces/IFilm'
import { useNavigate, useParams } from 'react-router-dom'
import './SearchPage.css'

const SearchPage = () => {
  const [films, setFilms] = useState<Array<Film>>([])
  const params = useParams()
  const title = params.search!
  const navigate = useNavigate()
  const [selectedFilm, setSelectedFilm] = useState<Film | undefined>()
  const [showMessage, setShowMessage] = useState<boolean>(false)

  const loadFilms = () => {
    getAllFilms()
      .then(res => {
        setFilms(res.data)
      })
      .catch(e => console.log(e))
  }

  const getSearchedFilms = (searchTerm: string) => {
    const searchedFilm = films?.filter(
      movie =>
        movie.title &&
        movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    )

    return searchedFilm
  }

  const searchedFilms = getSearchedFilms(title)
  console.log('get films ', searchedFilms)

  useEffect(() => {
    loadFilms()
  }, [])

  useEffect(() => {
    // Set showMessage to true after 3 seconds if searchedFilms is falsy
    if (searchedFilms.length === 0) {
      const timeoutId = setTimeout(() => {
        setShowMessage(true)
      }, 2250)
      return () => clearTimeout(timeoutId)
    }
  }, [searchedFilms])

  function goToFilmPage (selectedFilm: Film) {
    setSelectedFilm(selectedFilm)
    navigate(`/imdbId/${selectedFilm.imdbId}`, {
      state: { film: selectedFilm }
    })
  }

  return (
    <div className="search-page">
      {searchedFilms.length > 0 ? (
        searchedFilms.map(film => (
          <div
            className='film-box'
            onClick={() => {
              goToFilmPage(film)
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              <img
                src={film.poster}
                alt='film-poster'
                style={{ height: '23vh' }}
              />
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
        ))
      ) : showMessage ? (
        <div>There were no matches for your search term.</div>
      ) : null}
    </div>
  )
}

export default SearchPage
