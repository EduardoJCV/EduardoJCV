/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import { LANG } from '../../lang/lang'

const Contact = ({language}) => {
  return (
    <section id='contact'>
      <h5>{LANG[language].contact.subtitle}</h5>
      <h2>{LANG[language].contact.title}</h2>

      <div className="container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>eduard0.villalb4@gmail.com</h5>
            <a href="mailto:eduard0.villalb4@gmail.com" target="_blank">{LANG[language].contact.sendMessage}</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Instagram</h4>
            <h5>@eduard0.villalb4</h5>
            <a href="https://www.instagram.com/eduard0.villalb4/" target="_blank">{LANG[language].contact.sendMessage}</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+52 6391886298</h5>
            <a href="https://api.whatsapp.com/send?phone=+526391886298" target="_blank">{LANG[language].contact.sendMessage}</a>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Contact