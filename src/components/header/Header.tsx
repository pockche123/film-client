import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Container, Nav, Navbar, Button } from 'react-bootstrap'
import { faFilm, faSearch, faClose } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'
import './Header.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ChangeEvent } from 'react'
import { getAllFilms } from '../services/API/Films'
import { Film } from '../../interfaces/IFilm'
import { useEffect } from 'react'
import { Paths } from '../services/Utils/Paths'

const Header = () => {
  const [showInput, setShowInput] = useState(false)
  const [search, setSearch] = useState('')
  const navigate = useNavigate()
  const [foundMatches, setFoundMatches] = useState(Array<Film>)

  function handleSearch () {
    navigate('/searchQuery/' + search)
  }

  const findMatches = async (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)

    const foundMatches = await getAllFilms().then(res =>
      res.data?.filter(
        (movie: Film) =>
          movie.title &&
          movie.title.toLowerCase().includes(e.target.value.toLowerCase())
      )
    )

    setFoundMatches(foundMatches)
  }

  const hideFoundMatches = () => {
    setFoundMatches([])
  }

  const renderFoundMatches = () => {
    if (!search || foundMatches.length === 0) {
      return null
    }

    return (
      <ul>
        {foundMatches.map(film => {
          const regex = new RegExp(`(${search})`, 'gi')
          const titleWithBoldedSearch = film.title.replace(
            regex,
            '<strong>$1</strong>'
          )
          return (
            <div className='parent'>
              <div
                className='search-result'
                key={film.imdbId}
                onClick={e => {
                  e.preventDefault()
                  navigate(`/imdbId/${film.imdbId}`, {
                    state: { film: film }
                  })
                }}
              >
                <div className='search-result-icon'>
                  <FontAwesomeIcon
                    icon={faSearch}
                    style={{ color: '#9ca3af' }}
                  />
                </div>
                <div
                  className='search-result-text'
                  dangerouslySetInnerHTML={{ __html: titleWithBoldedSearch }}
                ></div>
              </div>
            </div>
          )
        })}
      </ul>
    )
  }

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const searchContainer = document.querySelector('.search-tag')
      if (!searchContainer?.contains(e.target as Node)) {
        hideFoundMatches()
      }
    }

    document.addEventListener('click', handleClick)

    return () => {
      document.removeEventListener('click', handleClick)
    }
  }, [])

  const handleLogin = () => {
    navigate(Paths.login)
  }

  const handleRegister = () => {
    navigate(Paths.register)
  }

  return (
    <div className='header'>
      <Navbar bg='dark' variant='dark' expand='lg' style={{ width: '100vw' }}>
        <Container>
          <Navbar.Brand href='/' className='logo'>
            <FontAwesomeIcon icon={faFilm} />
            Studio
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='navbarScroll' />
          <Navbar.Collapse id='navbarScroll'>
            <Nav
              className='me-auto my-2 my-lg-0'
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <NavLink className='nav-link' to='/'>
                Home
              </NavLink>
              <NavLink className='nav-link' to='/watchList'>
                Watch List
              </NavLink>
            </Nav>
            <Button
              variant='outline-warning'
              className='me-2'
              onClick={handleLogin}
            >
              Login
            </Button>
            <Button
              variant='outline-warning'
              className='me-2'
              onClick={handleRegister}
            >
              Register
            </Button>
            <p />
            <div>
              <FontAwesomeIcon
                icon={showInput ? faClose : faSearch}
                className='search'
                onClick={() => setShowInput(!showInput)}
                style={showInput ? { height: '4vh' } : { height: '3vh' }}
              />
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {showInput && (
        <div className='search-tag'>
          <FontAwesomeIcon icon={faSearch} className='search-icon' />
          <div className='search-input'>
            <input
              type='text'
              className='form-control search-header'
              placeholder='Search ghibli films...'
              value={search}
              onChange={e => findMatches(e)}
              onKeyDown={e => {
                if (e.key === 'Enter') handleSearch()
              }}
              style={{ color: 'grey' }}
            />
          </div>
          <div className='search-result-whole'>{renderFoundMatches()}</div>
        </div>
      )}
    </div>
  )
}

export default Header
