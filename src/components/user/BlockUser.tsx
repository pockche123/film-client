import React from 'react'

const BlockUser = ({ setBlocked }: { setBlocked: Function }) => {
    
    
  return (
   <div className='block-report'>
  <section className='block-report-container'>
    <h6>PLEASE CONFIRM</h6>
    <label>
      Are you sure you want to block this member? Their past comments will be
      removed from your reviews and lists, you will be unsubscribed from all
      relevant comment notifications and you will both be prevented from
      replying to each other’s content.
    </label>

    <div className='block-report-buttons'>
      <button className='btn btn-light' onClick={() => setBlocked(false)}>
        CANCEL
      </button>
      <button className='btn btn-light' onClick={() => setBlocked(false)}>
        BLOCK
      </button>
    </div>
  </section>
</div>

  )
}

export default BlockUser