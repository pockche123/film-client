import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'



const Rate = ({ props }: { props: any}) => {
    
    const {
        count, rating, color, onRating
    } = props;

    const starRating = useMemo(() => {

        return Array(count)
            .fill(0)
            .map((_, i) => i + 1)
            .map(idx => {
                <FontAwesomeIcon key={idx}
                    className="cursor-pointer"
                    icon={faStar} 
                    onClick={() => onRating(idx)}
                />
            })
                
                

    },[count, rating])


  return (
    <div>


          
    </div>
  )
}

Rate.propTypes = {
  count: PropTypes.number,
  rating: PropTypes.number,
  onRating: PropTypes.func,
  color: PropTypes.shape({
    filled: PropTypes.string,
    unfilled: PropTypes.string
  })
}

Rate.defaultProps = {
  count: 5,
  rating: 0,
  color: {
    filled: '#f5eb3b',
    unfilled: '#dcdcdc'
  }
}


export default Rate