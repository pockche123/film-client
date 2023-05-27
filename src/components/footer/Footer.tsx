import React from 'react'
import './Footer.css'
import facebook from '../assets/facebook.png'
import instagram from '../assets/instagram.png'
import twitter from '../assets/twitter.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='fc_footer section_padding'>
        <div className='fc_footer-links'>
          <div className='fc_footer-links-div'>
            <h5>About</h5>
            <a href='/about'>
              <p>About Studio</p>
            </a>
            <a >
              <p>Contact us</p>
            </a>
          </div>
          <div className='fc_footer-links-div'>
            <h5>Community</h5>
            <a href='/guidelines'>
              <p>Guidelines</p>
            </a>
            <a>
              <p>Discussions</p>
            </a>
          </div>

          <div className='fc_footer-links-div'>
            <h5>Coming soon on</h5>
            <div className='social-media'>
              <p>
                <img src={facebook} alt='fb icon' style={{ width: '45px' }} />
              </p>
              <p>
                <img src={instagram} alt='ig icon' />
              </p>
              <p>
                <img src={twitter} alt='twitter icon' />
              </p>
            </div>
          </div>
          <hr />
          <div className='fc_footer-below'>
            <div className='fc_footer-copyright'>
              <p>@{new Date().getFullYear()} Studio. All rights reserved.</p>
            </div>
            <div className='fc_footer-below-links'>
              {/* <h5>Legal</h5> */}
              <a href='/terms-of-use'>
                <div style={{ marginRight: '4rem' }}>
                  <p>Terms of use</p>
                </div>
              </a>
              <a href='/privacy-policy'>
                <div>
                  <p>Privacy policy</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
