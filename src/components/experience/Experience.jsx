import React, { useEffect, useState } from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const SkillsTable = ({skills, title}) => {

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
                      <h4>{skill.name}</h4>
                      <small className='text-light'>{skill.level}</small>
                    </div>
                  </article>
                )
              })
            }

          </div>
        </div>
  )
}

const Experience = ({skills}) => {

  const [skillsLists, setSkillsLists] = useState([]);

  useEffect(() => {
    console.log('skills')
    console.log(skills);
    let sLs = [];
    for (const property in skills) {
      sLs.push({
        title: property,
        skills: skills[property]
      });
    }
    setSkillsLists(sLs);
  }, []);
  
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      
      <div className="container experience__container">
        {
          skillsLists.reverse().map((skillsList, index)=> {
            return (
              <SkillsTable key={index} skills={skillsList.skills} title={skillsList.title} />
            )
          })
        }
      </div>
    </section>
  )
}

export default Experience