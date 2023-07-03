import React, { useEffect, useState } from 'react'
import { getReviewsByFilmTitle } from '../services/API/Reviews'
import { Film } from '../../interfaces/IFilm'
import { getDiscussionByFilmTitle } from '../services/API/Discussion'

const FilmSocialNav = ({
  activeSection,
  onSectionChange,
  film
}: {
  activeSection: string
  onSectionChange: Function
  film: Film
}) => {
  const [totalReviews, setTotalReviews] = useState(0)
  const [totalDiscussions, setTotalDiscussions] = useState(0)
  const filmTitle = film.title

  useEffect(() => {
    getReviewsByFilmTitle(filmTitle).then(res => {
      const lastReview = res.data[res.data.length - 1]
      console.log(lastReview)
      setTotalReviews(res.data.length)
    })

    getDiscussionLength()
  })

  const getDiscussionLength = () => {
    getDiscussionByFilmTitle(filmTitle).then(res => {
      setTotalDiscussions(res.data.length)
    })
  }

  useEffect(() => {
    console.log('totalreviews ', totalReviews)
  })

  const handleReviews = () => {
    onSectionChange('reviews')
  }
  const handleDiscussions = () => {
    onSectionChange('discussions')
  }
  return (
    <div className='film-social-nav-container'>
      <h4
        style={{ marginLeft: '20px', marginRight: '40px', textAlign: 'left' }}
      >
        Social
      </h4>
      <label
        className='film-social-nav-label'
        style={{
          cursor: 'pointer',
          display: 'flex',
          width: '10vw',
          borderBottom: activeSection === 'reviews' ? '4px solid black' : 'none'
        }}
        onClick={handleReviews}
      >
        {/* <h5>Reviews</h5> {totalReviews} */}
        <h5>
          Reviews <span style={{ color: 'gray' }}>{totalReviews}</span>
        </h5>
      </label>
      <label
        className='film-social-nav-label'
        style={{
          cursor: 'pointer',
          width: '13vw',
          borderBottom:
            activeSection === 'discussions' ? '4px solid black' : 'none'
        }}
        onClick={handleDiscussions}
      >
        <h5>
          Discussions <span style={{ color: 'gray' }}>{totalDiscussions}</span>
        </h5>
      </label>
    </div>
  )
}

export default FilmSocialNav
