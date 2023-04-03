import React from 'react'
import { LANG } from '../../lang/lang'

const CTA = ({language}) => {
  return (
    <div className='cta'>
      <a href="https://docs.google.com/document/d/1ADMDfpSvt6nRAdcKD6nTbZ1dSfN3T4FP_v01002KZNc/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className='btn'>{LANG[language].header.download}</a>
      <a href="#contact" className='btn btn-primary'>{LANG[language].buttons.letsTalk}</a>
    </div>
  )
}

export default CTA