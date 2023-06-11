import React, { useEffect, useRef, useState } from 'react'
import Box from '@mui/material/Box'
import StarIcon from '@mui/icons-material/Star'
import StarBorderIcon from '@mui/icons-material/StarBorder'
import { MouseEvent } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus } from '@fortawesome/free-solid-svg-icons'
import differenceInCalendarYears from 'date-fns/differenceInCalendarYears/index'

const Rate = ({inCreatePage}:{inCreatePage: boolean}) => {
  const [rating, setRating] = useState(0)
  const totalStars = 5
  const ratingContainerRef = useRef<HTMLDivElement>(null)
  const precision = 0.5
  const [activeStar, setActiveStar] = useState(-1)
  const [hoverActiveStar, setHoverActiveStar] = useState<number>(-1)
  const [isHovered, setIsHovered] = useState(false)
    const existingRating = 2.5
    
    useEffect(() => {
  setActiveStar(existingRating)
  setRating(existingRating * 2)
}, [])


  const calculateRating = (e: MouseEvent<HTMLDivElement>) => {
    const rect = ratingContainerRef.current?.getBoundingClientRect()
    if (!rect) {
      return 0
    }

    const { width, left } = rect
    const percent = (e.clientX - left) / width
    const numberInStars = percent * totalStars
    const nearestNumber =
      Math.round((numberInStars + precision / 2) / precision) * precision

    return Number(
      nearestNumber.toFixed(precision.toString().split('.')[1]?.length || 0)
    )
  }

  const handleClick = (e: any) => {
    setIsHovered(false)
    const newRating = calculateRating(e)

    setActiveStar(newRating)
    setRating(newRating * 2)
  }

  const handleMouseMove = (e: any) => {
    setIsHovered(true)
    setHoverActiveStar(calculateRating(e))
  }

  const handleMouseLeave = (e: any) => {
    setHoverActiveStar(-1) // Reset to default state
    setIsHovered(false)
  }

  const handleZeroRating = () => {
    setRating(0)
    setActiveStar(0)
  }

  return (
      <div className={`rating-box ${inCreatePage ? 'create-page': ''}`}>
      <FontAwesomeIcon
        icon={faMinus}
        onClick={handleZeroRating}
        style={{
          cursor: 'pointer',
          fontSize: '10px',
          borderRadius: '50%',
          width: '15px',
          height: '15px',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'gray',
          marginLeft: '5px'
        }}
      />
      <span />

      <Box
        sx={{
          display: 'inline-flex',
          position: 'relative',
          cursor: 'pointer',
          marginLeft: '5px'
        }}
        onClick={handleClick}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        ref={ratingContainerRef}
      >
        {[...new Array(totalStars)].map((arr, index) => {
          const activeState = isHovered ? hoverActiveStar : activeStar

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
                <StarIcon style={{ color: 'white' }} />
              </Box>

              <Box
                sx={{
                  color: showEmptyIcon ? 'gray' : 'inherit'
                }}
              >
                {showEmptyIcon ? (
                  <StarBorderIcon style={{ color: 'white' }} />
                ) : (
                  <StarIcon />
                )}
              </Box>
            </Box>
          )
        })}
      </Box>
      {rating}
    </div>
  )
}

export default Rate
