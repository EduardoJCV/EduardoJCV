import React, { useEffect, useState } from 'react'
import './articles.css'

import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';


const Article = ({ img, name, review}) => {

  const [ viewMore, setViewMore ] = useState(false);

  const moreRead = () => {
    setViewMore(!viewMore);
    console.log(viewMore);
  }

  return (
      <>
        <div className="article__img">
          <img src={img} />
        </div>
        <h5 className='article__name'>{name}</h5>
        <div className={`module ${(!viewMore) ? 'line-clamp' : ''}`}>
          <div className='article__review'>{review}</div>
        </div><a onClick={() => moreRead()}>{!viewMore ? 'See Complete' : 'See Less'}</a>
      </>
  )
}


const Articles = ({writes}) => {

  const formateText = (text) => {
    let arrayText = text.split('.');
    let returnText = arrayText.map((p)=>{
      return <p>{p}.</p>
    })
    return returnText
  }

  useEffect(() => {
    console.log(writes);
    
  }, []);

  return (
    <>
    <section id='articles'>
      <h5>My Learning</h5>
      <h2>Writings</h2>

      <Swiper className="container articles__container"
        modules={[Pagination]} spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}>
        {writes.map((write, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <Article img={write.img} name={write.title} review={formateText(write.content)} />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </section></>
  )
}

export default Articles