/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import { FaFacebookF } from 'react-icons/fa'
import { FiInstagram} from 'react-icons/fi'
import { IoLogoGithub } from 'react-icons/io'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.facebook.com/eduard0.villalb4/" target="_blank"><FaFacebookF/></a>
        <a href="https://www.instagram.com/eduard0.villalb4/" target="_blank"><FiInstagram/></a>
        <a href="https://github.com/EduardoJCV" target="_blank"><IoLogoGithub/></a>
    </div>
  )
}

export default HeaderSocials