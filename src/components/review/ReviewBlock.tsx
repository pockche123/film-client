import React, { useEffect, useState } from 'react'
import { Film } from '../interfaces/IFilm'
import { getReviewsByFilmTitle } from '../services/API/Reviews'
import { IReview } from '../interfaces/IReview'
import { format } from 'date-fns'
import enGB from 'date-fns/locale/en-GB'

const ReviewBlock = ({ film }: { film: Film }) => {
  const filmTitle = film.title
  const [data, setData] = useState<IReview | undefined>(undefined)

  // const formattedDate = data?.reviewId.date

  const formattedDate = data
    ? format(new Date(data?.reviewId.date), 'MMMM d, yyyy', { locale: enGB })
    : ''

  useEffect(() => {
    getReviewsByFilmTitle(filmTitle).then(res => {
      const lastReview = res.data[res.data.length - 1]
      console.log(lastReview)

      setData(lastReview)
    })
  })

  return (
    <div className='review'>
      {data === undefined ? (
        <div className='no-reviews'>
          <>
            We don't have any reviews for {filmTitle}. If you have seen it, why
            don't you share your thoughts with us?
          </>
        </div>
      ) : (
        <div className='reviews-present'>
          <div>{formattedDate}</div>
           <div>
              <img src={data?.userEntity.profile_pic} alt="profile-pic"/>
              </div>

          {data?.rating}
          <li>{data?.review}</li>
        </div>
      )}
    </div>
  )
}

export default ReviewBlock
