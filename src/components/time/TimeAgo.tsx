import React from 'react'

interface TimeAgoProps {
  timestamp: string
}

const TimeAgo: React.FC<TimeAgoProps> = ({ timestamp }) => {
  const getTimeAgo = (date: Date): string => {
    const now = new Date()
    const diff = now.getTime() - date.getTime()

    const minutes = Math.floor(diff / (1000 * 60))
    if (minutes < 60) {
      return `${minutes} minutes ago`
    }

      const hours = Math.floor(diff / (1000 * 60 * 60))
      if (hours === 1) {
          return `${hours} hour ago`
      }
    else if (hours >1 && hours< 24) {
      return `${hours} hours ago`
    } 

      const days = Math.floor(diff / (1000 * 60 * 60 * 24))
      if (days === 1) {
          return `${days} day ago`   
      }
   else  if ( days < 30) {
      return `${days} days ago`
    } 

      const months = Math.floor(diff / (1000 * 60 * 60 * 24 * 30))
      if (months === 1) {
          return `${months} month ago`
      }
   else  if (months < 12) {
      return `${months} months ago`
    }

      const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365))
      if (years === 1) {
          return `${years} year ago`
      }
    return `${years} years ago`
  }

  const formattedTimeAgo = getTimeAgo(new Date(timestamp))

  return <span>{formattedTimeAgo}</span>
}

export default TimeAgo
