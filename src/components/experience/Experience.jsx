/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'
import { SKILLS_DATA } from '../../data/skills.data'
import { LANG } from '../../lang/lang'

const SkillsTable = ({skills, title, language}) => {

  return (
    <div className="experience__frontend">
      <h3>{title.split('-').join(' ')}</h3>
      <div className="experience__content">
        {
          skills.map((skill, index)=>{
            return (
              <article key={index} className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon' />
                <div>
                  <h4>{skill.name[language]}</h4>
                  <small className='text-light'>{skill.level[language]}</small>
                </div>
              </article>
            )
          })
        }
      </div>
    </div>
  )
}

const Experience = ({language}) => {

  const [skillsLists] = useState(SKILLS_DATA);

  
  return (
    <section id='experience'>
      <h5>{LANG[language].skills.subtitle}</h5>
      <h2>{LANG[language].skills.title}</h2>
      
      <div className="container experience__container">
        {
          skillsLists.reverse().map((skillsList, index)=> {
            return (
              <SkillsTable key={index} skills={skillsList.skills} title={skillsList.title[language]} language={language} />
            )
          })
        }
      </div>
    </section>
  )
}

export default Experience