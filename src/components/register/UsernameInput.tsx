import { faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { ChangeEvent, useEffect, useState } from 'react'
import { getAllUsers } from '../services/API/Users'
import { IUser } from '../interfaces/IUser'
import { UsernameInputProps } from '../interfaces/IAuth'

const UsernameInput = (props: UsernameInputProps) => {
  const {
    setUsername,
    setUsernameTaken,
    setInvalidUserLength,
    username,
    usernameTaken
  } = props

  const [existingUsernames, setExistingUsernames] = useState<Array<string>>([])

  useEffect(() => {
    getAllUsers().then(res => {
      console.log('DATA ', res.data)
      const usernames = res.data.map((user: IUser) => user.username)
      setExistingUsernames(existingUsernames => [
        ...existingUsernames,
        ...usernames
      ])
    })
  }, [])

  const handleUsername = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    const inputValue = e.target.value
    setUsername(inputValue)

    if (inputValue) {
      setUsernameTaken(false)
      setTimeout(() => {
        const match = existingUsernames.find(
          username => inputValue === username
        )
        if (match) {
          setUsernameTaken(true)
        }
      }, 500)
      setInvalidUserLength(inputValue.length < 4)
    }
  }

  return (
    <div className='user-login-input'>
      <div className='icon-box'>
        <FontAwesomeIcon icon={faUser} className='fa-user-user' />
      </div>
      <input
        type='text'
        className='form-control login-input'
        placeholder='Create a username'
        value={username}
        style={{ boxShadow: usernameTaken ? '0 0 3px #CC0000' : 'none' }}
        onChange={handleUsername}
      />
    </div>
  )
}

export default UsernameInput
