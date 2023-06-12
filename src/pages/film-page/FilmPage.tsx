import { useLocation } from 'react-router-dom'
import './FilmPage.css'
import { useState } from 'react'
import FilmNav from '../../components/films/FilmNav'
import FilmOverview from '../../components/films/FilmOverview'
import FilmImages from '../../components/films/FilmImages'
import FilmSocialNav from '../../components/films/FilmSocialNav'
import Discussion from '../../components/discussion/Discussion'
import FilmPoster from '../../components/films/FilmPoster'
import ReviewBlock from '../../components/review/ReviewBlock'
import Rate from '../../components/icons/Rate'
import { Navbar } from 'react-bootstrap'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'


const FilmPage = () => {
  const [activeSection, setActiveSection] = useState('overview')
  const [socialActiveSection, setSocialActiveSection] = useState('reviews')
  const location = useLocation()
  const film = location.state && location.state.film
  const [rating, setRating] = useState(0)


  const handleSectionChange = (section: string) => {
    setActiveSection(section);
  }

  const handleSocialSectionChange = (section: string) => {
    setSocialActiveSection(section);
  }

  return (
    <>
      <Header/>
    <div className='film-container'>
  
      <div className='film-page-poster'>
        <FilmPoster film={film} />
        
      </div>
      <div className='film-content'>
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
      <div className="film-socials">
        <div className="film-social-nav">
          <FilmSocialNav
            activeSection={socialActiveSection}
              onSectionChange={handleSocialSectionChange}
              film={film}
          />

        </div>
      <div className="social">
          {socialActiveSection === 'reviews' && <ReviewBlock film={film} />}
          {socialActiveSection === 'discussions' && <Discussion film={film}/>}

          </div>    
        </div>
        <hr/>
      </div>
      

      </div>
      <Footer/>
      </>
  )
}


export default FilmPage
