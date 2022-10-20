import React, { useEffect, useState } from 'react'
import './about.css'
import ME from '../../assets/pic2.jpeg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const AboutCard = ({fixed}) => {
  
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
      <h5>{fixed.title}</h5>
      <small>{fixed.subtitle1} {fixed.subtitle2}</small>
    </article>
  )
}

const About = ({about}) => {

  useEffect(() => {
    console.log(about)
  }, []);

  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={about.img} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            {
              about.fixed.map((fixed, index)=>{
                return (
                  <AboutCard key={index} fixed={fixed} />
                )
              })
            }
          </div>

          <p>{about.description}</p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About