import { faX } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { InvalidCasesProps } from '../interfaces/IAuth';

const InvalidCases = (props: InvalidCasesProps) => {


    const { registerSuccess, usernameTaken, username, invalidUserLength,
        password, emailInvalid, email, noCapitalLetter, noSpecialCharacter, invalidPasswordLength,
passwordSame, rePassword    } = props;
    return (
      <>
      <div style={{ marginTop: '8%', padding: '5px' }}>
          {registerSuccess && (
            <span className='alert alert-success'>
              You have been registered successfully. <p />
              Please go to the login page for login.
            </span>
          )}
        </div>

        <div className='register-errors'>
          <div className='invalid-register-input'>
            {usernameTaken && (
              <span className='alert alert-danger'>
                <FontAwesomeIcon
                  icon={faX}
                  style={{
                    height: '10px',
                    paddingBottom: '2px',
                    borderRadius: '50%'
                  }}
                />{' '}
                <span />
                {username} is already taken
              </span>
            )}
          </div>
          <div className='invalid-register-input'>
            {invalidUserLength &&
              password.length > 7 &&
              username.length < 4 &&
              !emailInvalid && (
                <span className='alert alert-danger'>
                  <FontAwesomeIcon
                    icon={faX}
                    style={{
                      height: '10px',
                      paddingBottom: '2px',
                      borderRadius: '50%'
                    }}
                  />{' '}
                  <span />
                  Username has to be at least 4 characters long
                </span>
              )}
          </div>
          <div className='invalid-register-input'>
            {emailInvalid && email.length > 4 && (
              <span className='alert alert-danger'>
                <FontAwesomeIcon
                  icon={faX}
                  style={{
                    height: '10px',
                    paddingBottom: '2px',
                    borderRadius: '50%'
                  }}
                />{' '}
                Email must be valid
              </span>
            )}
          </div>
          <div className='invalid-register-input'>
            {noCapitalLetter && password.length > 7 && (
              <span className='alert alert-danger'>
                <FontAwesomeIcon
                  icon={faX}
                  style={{
                    height: '10px',
                    paddingBottom: '2px',
                    borderRadius: '50%'
                  }}
                />{' '}
                Password needs to contain at least one capital letter
              </span>
            )}
          </div>
          <div className='invalid-register-input'>
            {noSpecialCharacter && password.length > 7 && (
              <span className='alert alert-danger'>
                <FontAwesomeIcon
                  icon={faX}
                  style={{
                    height: '10px',
                    paddingBottom: '2px',
                    borderRadius: '50%'
                  }}
                />{' '}
                Password needs to contain at least one special character
              </span>
            )}
          </div>
          <div className='invalid-register-input'>
            {invalidPasswordLength && (
              <span className='alert alert-danger'>
                <FontAwesomeIcon
                  icon={faX}
                  style={{
                    height: '10px',
                    paddingBottom: '2px',
                    borderRadius: '50%'
                  }}
                />{' '}
                Password needs to be at least 8 characters in length
              </span>
            )}
          </div>
          <div className='invalid-register-input'>
            {!passwordSame && rePassword.length > 7 && (
              <span className='alert alert-danger'>
                Password needs to be the same
              </span>
            )}
          </div>
            </div>
            </>
  )
}

export default InvalidCases