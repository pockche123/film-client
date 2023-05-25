import { useEffect } from 'react'
import'./FilmNav.css'


const FilmNav = ({
  activeSection,
  onSectionChange
}: {
  activeSection: string
  onSectionChange: Function
    }) => {
    
  
  
  useEffect(() => {
    const storedFilmNav = localStorage.getItem('filmNav')
    if (storedFilmNav) {
      onSectionChange(JSON.parse(storedFilmNav))
    }
  }, [])
  
  
  const handleOverview = () => {
    onSectionChange('overview')
    localStorage.setItem('filmNav', JSON.stringify('overview'))

  }

  const handleImages = () => {
    onSectionChange('images')
    localStorage.setItem('filmNav', JSON.stringify('images'))
  }

  return (
    <div className='film-nav-container'>
      <div className='nav-to-overview'>
        <label
          className='film-nav-label'
          style={{
            cursor: 'pointer',
            borderBottom:
              activeSection === 'overview' ? '4px solid #00BFFF' : 'none'
          }}
          onClick={handleOverview}
        >
          Overview
        </label>
        <label
          className='film-nav-label'
          style={{
            cursor: 'pointer',
            borderBottom:
              activeSection === 'images' ? '4px solid #00BFFF' : 'none'
          }}
          onClick={handleImages}
        >
          Images
        </label>
      </div>
    </div>
  )
}


export default FilmNav