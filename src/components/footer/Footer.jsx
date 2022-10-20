import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoGithub} from 'react-icons/io'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>EduardoJCV</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Expeirience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#articles">My Learning</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/eduard0.villalb4/"><FaFacebookF/></a>
        <a href="https://www.instagram.com/eduard0.villalb4/"><FiInstagram/></a>
        <a href="https://github.com/EduardoJCV"><IoLogoGithub/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; EduardoJCV. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer