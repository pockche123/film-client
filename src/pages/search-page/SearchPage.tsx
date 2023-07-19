import React, { useEffect, useState } from 'react'
import { getAllFilms } from '../../components/services/API/Films'
import { Film } from '../../interfaces/IFilm'
import { useParams } from 'react-router-dom'
import './SearchPage.css'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import SearchResult from '../../components/films/SearchResult'

const SearchPage = () => {
  const [films, setFilms] = useState<Array<Film>>([])
  const params = useParams()
  const title = params.search!

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


  return (
    <>
      <Header />
      <div className='search-page'>

        {searchedFilms.length > 0 ? (
          searchedFilms.map((film, index) => (
              <SearchResult allGhibli={false} index={index} film={film} />   
         
          ))

         
        ) : showMessage ? (
          <div>There were no matches for your search term.</div>
        ) : null}
      </div>

      {
        searchedFilms.length > 0 && (
          <div className="results-found">
            <h6>
              {searchedFilms.length} results found
          </h6>
          </div>
        )
   }
 
      <Footer />
    </>
  )
}

export default SearchPage
