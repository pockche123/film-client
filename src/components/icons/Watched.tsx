

import { faEye } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'

const Watched = () => {

    const [watchedColour, setWatchedColour] = useState('white')
    
    
  return (
      <div>
          <FontAwesomeIcon icon={faEye} />
    </div>
  )
}

export default Watched