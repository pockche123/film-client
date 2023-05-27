import { useLocation } from 'react-router-dom'
import './FilmPage.css'
import { useState } from 'react'
import FilmNav from '../../components/films/FilmNav'
import FilmOverview from '../../components/films/FilmOverview'
import FilmImages from '../../components/films/FilmImages'

const FilmPage = () => {
  const [activeSection, setActiveSection] = useState('overview')
  const location = useLocation()
  const film = location.state && location.state.film

  const handleSectionChange = (section: string) => {
    setActiveSection(section)
  }

  return (
    <div className='film-container'>
      <div className='film-navs'>
        <FilmNav
          activeSection={activeSection}
          onSectionChange={handleSectionChange}
        />
      </div>
      <div>
        {activeSection === 'overview' && <FilmOverview film={film} />}
        {activeSection === 'images' && <FilmImages film={film} />}
      </div>

    </div>
  )
}


export default FilmPage
