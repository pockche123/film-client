
import './FilmNav.css'

const FilmNav = ({
  activeSection,
  onSectionChange
}: {
  activeSection: string
  onSectionChange: Function
}) => {

  const handleOverview = () => {
    onSectionChange('overview')
    // localStorage.setItem('filmNav', JSON.stringify('overview'))
  }

  const handleImages = () => {
    // onSectionChange('images')
    // localStorage.setItem('filmNav', JSON.stringify('images'))
    const imagesSection = document.getElementById('images')
    imagesSection?.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }

  const handleSocials = () => {
    // onSectionChange('socials')

    const socialsSection = document.getElementById('social')
    socialsSection?.scrollIntoView({ behavior: 'smooth', block: 'center' })
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
              activeSection === 'socials' ? '4px solid #00BFFF' : 'none'
          }}
          onClick={handleSocials}
        >
          Socials
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
