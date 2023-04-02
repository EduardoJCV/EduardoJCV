/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react'
import './portfolio.css'

import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import { LANG } from '../../lang/lang';
import { PROJECTS_DATA } from '../../data/projects.data';


const Project = ({ img, title, description, link }) => {

  return (
      <>
        <div className='project__img'>
          <img src={img} />
        </div>
        <h5 className='project__name'>{title}</h5>
        <div className='module line-clamp'>
          <div className='project__review'>{description}</div>
        </div>
        <div className='project__view'>
          <a href={link} target='_blank' rel='noopener noreferrer'>View Project</a>
        </div>
      </>
  )
}


const Portfolio = ({language}) => {
  const [projects] = useState(PROJECTS_DATA);

  return (
    <>
    <section id='portfolio'>
      <h5>{LANG[language].portfolio.subtitle}</h5>
      <h2>{LANG[language].portfolio.title}</h2>

      <Swiper className='container portfolio__container'
        modules={[Pagination]} spaceBetween={30}
        slidesPerView={1}
        autoplay
        navigation
        pagination={{ clickable: true }}>
        {projects.map((project, index) => {
          console.log(project)
          return (
            <SwiperSlide key={`project;${index}`} className='testimonial'>
              <Project img={project.img} title={project.name[language]} description={project.description[language]} link={project.link} />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </section></>
  )
}

export default Portfolio