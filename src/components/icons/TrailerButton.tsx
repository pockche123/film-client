import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './PlayTrailer.css'
import { Link } from 'react-router-dom'
import { TrailerButtonProps } from '../../interfaces/IFilm'
import './TrailerButton.css'

const TrailerButton = ({ trailerLink }: TrailerButtonProps) => {
  const referenceLength = trailerLink.length - 1 - trailerLink.indexOf('=')
  console.log('DIS REFERENCE LENGTH ', referenceLength)

  return (
    <div>
      <Link
        className='play-trailer'
        to={`/trailer/${trailerLink.substring(
          trailerLink.length - referenceLength
        )}`}
      >
        <div className='play-button'>
          <FontAwesomeIcon icon={faPlay} /> <b>Play Trailer</b>
        </div>
      </Link>
    </div>
  )
}

export default TrailerButton
