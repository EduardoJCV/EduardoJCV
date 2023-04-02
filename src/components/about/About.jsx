/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import './about.css'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
import { LANG } from './../../lang/lang.js';

const AboutCard = ({fixed, language}) => {
  
  const [icon, setIcon] = useState(<FaAward className='about__icon'/>)

  useEffect(() => {
    switch (fixed.icon) {
      case 'projects':
        setIcon(<VscFolderLibrary className='about__icon'/>)
      break;
      case 'experience':
        setIcon(<FaAward className='about__icon'/>)
      break;
      case 'people':
        setIcon(<FiUsers className='about__icon'/>)
      break;
      default:
        setIcon(<FaAward className='about__icon'/>)
      break;
    }
  }, []);

  return (
    <article className='about__card'>
      {icon}
      <h5>{fixed.title[language]}</h5>
      <small>{fixed.subtitle[language]}</small>
    </article>
  )
}

const About = ({language}) => {

  const aboutFixes = [
    {
      id: 1,
      icon: 'experience',
      title: {
        es: 'Experiencia',
        en: 'Experience'
      },
      subtitle: {
        es: '3+ Años experiencia como desarrollador Frontend',
        en: '3+ Years working of Frontend developer'
      },
    },
    {
      id: 2,
      icon: 'projects',
      title: {
        es: 'Proyectos',
        en: 'Projects'
      },
      subtitle: {
        es: 'Experiencia en +15 Proyectos',
        en: 'worked on +15 Projects',
      },
    }
  ]

  return (
    <section id='about'>
      <h5>{LANG[language].header.getToKnow}</h5>
      <h2>{LANG[language].header.about}</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src="./pic2.jpeg" alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            {
              aboutFixes.map((fixed, index)=>{
                return (
                  <AboutCard language={language} key={index} fixed={fixed} />
                )
              })
            }
          </div>

          <p>{LANG[language].header.description}</p>

          <a href="#contact" className='btn btn-primary'>{LANG[language].buttons.letsTalk}</a>
        </div>
      </div>
    </section>
  )
}

export default About