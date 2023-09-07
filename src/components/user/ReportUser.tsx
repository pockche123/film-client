import React, { useState } from 'react'
import ReportOptions from '../../pages/user-pages/profile-page/ReportOptions'

const ReportUser = ({setReport }:{setReport: Function}) => {


    let optionsArray = ReportOptions
const [selectedOption, setSelectedOption] = useState(optionsArray[0])
const [message, setMessage] = useState('')

  return (
  <div className='block-report'>
  <section className='block-report-container'>
    <h6>REPORT THIS MEMBER</h6>
    <label>
      You may use this form to report community policy breaches. If the breach
      is in an individual review, list or comment, please report it directly
      using the flag icon. This helps our moderators handle your report in the
      shortest possible time. If you are receiving unwanted interactions from
      another member, there is an option to block them from their profile page,
      or from an individual comment.
    </label>
    <div className='block-report-question'>
      <label htmlFor='selectOptions'>Why are you reporting this member?</label>{' '}
      <br />
      <select
        id='selectOptions'
        value={selectedOption}
        onChange={e => {
          setSelectedOption(e.target.value)
        }}
      >
        {optionsArray.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
    <div className='block-report-question'>
      <label>
        Message (please include links to specific policy breaches if relevant)
      </label>
      <textarea value={message} onChange={e => setMessage(e.target.value)} />
    </div>

    <div className='block-report-buttons'>
      <button className='btn btn-light' onClick={() => setReport(false)}>
        CANCEL
      </button>
      <button className='btn btn-light' onClick={() => setReport(false)}>
        REPORT
      </button>
    </div>
  </section>
</div>

  )
}

export default ReportUser