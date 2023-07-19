import React, { useEffect, useState } from 'react'
import { Film } from '../../interfaces/IFilm'
import { getAllFilms } from '../../components/services/API/Films'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import './AllGhibli.css'

import SearchResult from '../../components/films/SearchResult'

const AllGhibli = () => {
  const [data, setData] = useState<Array<Film>>([])




  useEffect(() => {
    getAllFilms()
      .then(res => {
        setData(
          res.data.sort(
            (a: { year: number }, b: { year: number }) => a.year - b.year
          )
        )
      })
      .catch(e => console.log(e))
  }, [])

  return (
    <>
      <Header />
      <div className='all-ghibli'>
              {data.map((film, index) => (
            <SearchResult allGhibli={true} index={index} film={film}  />   

        ))}
      </div>
      <Footer />
    </>
  )
}

export default AllGhibli
