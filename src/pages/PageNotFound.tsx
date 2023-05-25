import React from 'react'
import { Link} from 'react-router-dom';

const PageNotFound = () => {

  return (
      <>
          <h1>404</h1> <p />
          <h6>Page Not Found</h6>
          <div>
              <Link to= "/">Go to home page</Link>
              
       </div>

      </>
    
  )
}

export default PageNotFound