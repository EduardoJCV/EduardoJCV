/* eslint-disable eqeqeq */
import React from 'react'
import { LANG } from '../../lang/lang'

const CTA = ({language}) => {
  return (
    <div className='cta'>
      {language == 'en' && (
        <a href="https://docs.google.com/document/d/1c2ZIF6j-XW7Nncjl_GcItEYyRcBGruiW3xci1Mwrx7M/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className='btn'>View CV in english</a>
      )}
      {language == 'es' && (
        <a href="https://docs.google.com/document/d/1ADMDfpSvt6nRAdcKD6nTbZ1dSfN3T4FP_v01002KZNc/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className='btn'>Ver CV en español</a>
      )}
      <a href="#contact" className='btn btn-primary'>{LANG[language].buttons.letsTalk}</a>
    </div>
  )
}

export default CTA