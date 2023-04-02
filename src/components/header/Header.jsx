/* eslint-disable eqeqeq */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './header.css'
import CTA from './CTA'
import HeaderSocial from './HeaderSocials'
import { LANG } from '../../lang/lang'

const Header = ({language, changeLang}) => {
  return (
    <header>
      <div className="container header__container">
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'start', position: 'absolute', width: '100%', top: '-44px'}}>
          <a onClick={() => changeLang('en')} style={{marginRight: '4px', padding: '8px 10px'}} className={`${language == 'en' && 'btn-primary'} btn`}>En</a>
          <a onClick={() => changeLang('es')} style={{marginLeft: '4px', padding: '8px 10px'}} className={`${language == 'es' && 'btn-primary'} btn`}>Es</a>
        </div>
        <h5>{LANG[language].header.hello}</h5>
        <h1>Eduardo Villalba</h1>
        <h5 className="text-light">{LANG[language].header.position}</h5>
        <CTA language={language} />
        <HeaderSocial />

        <div className="me">
          <img src={'./firstIcon.svg'} alt="me" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header
