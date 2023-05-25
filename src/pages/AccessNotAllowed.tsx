import React from 'react'

const AccessNotAllowed = () => {
  return (
      <>
          {/* navbar still left here  */}
      <div className='container'>
        <div className='break' />
        <div className='alert alert-warning'>
          <h1 className='display-4'>Access not Allowed</h1>
          <p className='lead'>
            Sorry, you are not authorized to see this page .
          </p>
        </div>
      </div>
    </>
  )
}

export default AccessNotAllowed
