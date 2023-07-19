import React, { useState } from 'react'
import './LandingPage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
import { Paths } from '../services/Utils/Paths'

const LandingPage = () => {
  const [search, setSearch] = useState<string>('')
  const navigate = useNavigate()

  function handleSearch () {
    navigate(Paths.searchQuery + search)
  }

  return (
    <div className='landing-page'>
      <div className='font'>
        <div className='text'>
          <h1 style={{ fontSize: '400%' }}>
            <b>Welcome.</b>
          </h1>
          <h1>
            <b>Track Ghibli films you have watched. </b>
          </h1>
        </div>
        <div className='form'>
          <FontAwesomeIcon icon={faSearch} className='fa-search' />
          <div className='search-bar'>
            <input
              type='text'
              className='form-control input'
              placeholder='Search ghibli films...'
              value={search}
              onChange={e => setSearch(e.target.value)}
              onKeyDown={e => {
                if (e.key === 'Enter') handleSearch()
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
