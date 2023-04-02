import React from 'react'
import CV from '../../assets/cv-1.pdf'
import { LANG } from '../../lang/lang'

const CTA = ({language}) => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>{LANG[language].header.download}</a>
        <a href="#contact" className='btn btn-primary'>{LANG[language].buttons.letsTalk}</a>
    </div>
  )
}

export default CTA