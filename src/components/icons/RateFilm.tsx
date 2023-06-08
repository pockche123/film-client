import React, { useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'
import './RateFilm.css'
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons'

import Box from '@mui/material/Box'
import StarIcon from '@mui/icons-material/Star'
import StarBorderIcon from '@mui/icons-material/StarBorder'


const RateFilm = () => {
  const userLoggedIn = true
  const [rating, setRating] = useState(0)
  const totalStars = 5
  const activeStars = 3
  const [activeStar, setActiveStar] = useState(0)
const ratingContainerRef = useRef<HTMLDivElement>(null)

const precision = 0.5; 
  
  const handleClick = (index: number) => {
  setActiveStar(index)
}

  const calculateRating = (e: any) => {
  const ratingContainer = ratingContainerRef?.current
  if (ratingContainer) {
    const { width, left } = ratingContainer.getBoundingClientRect()
    let percent = (e.clientX - left) / width
    const numberInStars = percent * totalStars
const nearestNumber =
  Math.round((numberInStars + precision / 2) / precision) * precision
return Number(
  nearestNumber.toFixed(precision.toString().split('.')[1]?.length || 0)
)
  } 
  }

  //Similar to active star state, we need to handle hover state
const [hoverActiveStar, setHoverActiveStar] = useState(-1)
// Not necessary. But handy in readability of code.
const [isHovered, setIsHovered] = useState(false)

  

//Event listener for mouse move and leave
const handleMouseMove = (e: any) => {
  setIsHovered(true);
  // setHoverActiveStar(calculateRating(e)); // We already calculation in this function
  const calculatedRating = calculateRating(e)

  setHoverActiveStar(calculatedRating ?? -1)

};
const handleMouseLeave = (e: any) => {
  setHoverActiveStar(-1); // Reset to default state
  setIsHovered(false);
};


//If you remember we have created separate variable `activeState`.
// Simply toggle state if its hovering take hover one otherwise take active one
const activeState = isHovered ? hoverActiveStar : activeStar;



// const calculateRating = (e: any) => {
//   const { width, left } = ratingContainerRef?.current.getBoundingClientRect()
//   let percent = (e.clientX - left) / width
//   const numberInStars = percent * totalStars
//   const nearestNumber =
//     Math.round((numberInStars + precision / 2) / precision) * precision
//   return Number(
//     nearestNumber.toFixed(precision.toString().split('.')[1]?.length || 0)
//   )
// }

  


  return (
    <>
      <div className={`rate-film ${userLoggedIn ? 'logged-in' : ''}`}>
        <FontAwesomeIcon icon={faStar} />
      </div>

{
  [...new Array(totalStars)].map((arr, index) => {
    const activeState = activeStar
    /*
        we only need to render empty icon layout when active state 
        is not set i.e -1  in our case or active state state is 
        less than index i.e show only when its 
        index is greater that active state
      */
    const showEmptyIcon = activeState === -1 || activeState < index + 1

    const isActiveRating = activeState !== 1
    const isRatingWithPrecision = activeState % 1 !== 0
    const isRatingEqualToIndex = Math.ceil(activeState) === index + 1
    const showRatingWithPrecision =
      isActiveRating && isRatingWithPrecision && isRatingEqualToIndex

    return (
      <Box
        position={'relative'}
        sx={{
          cursor: 'pointer'
        }}
        key={index}
      >
        <Box
          sx={{
            width: showRatingWithPrecision
              ? `${(activeState % 1) * 100}%`
              : '0%',
            overflow: 'hidden',
            position: 'absolute'
          }}
        >
          <StarIcon />
        </Box>
        {/*Note here */}
        <Box>{showEmptyIcon ? <StarBorderIcon /> : <StarIcon />}</Box>
      </Box>
    )
  })
}





   
    </>
  )
}

export default RateFilm
