import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
           <img src={assets.logo} alt="" />
           <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo optio enim at quibusdam? Molestias!</p>
           <div className="footer-social-icons">
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
           </div>
        </div>
        <div className="footer-content-center">
            <h2>company</h2>
            <ul>
              <li>home</li>
              <li>about</li>
              <li>delivery</li>
              <li>privacy policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
          <h2>get in touch</h2>
          <ul>
            <li>+91 9668398524</li>
            <li>ashutosh@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr></hr>
      <p className='footer-copyrights'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, dignissimos.</p>
    </div>
  )
}

export default Footer
