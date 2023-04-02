/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import './articles.css';

import 'swiper/css';
import 'swiper/css/pagination';
import PaginatedItems from './paginate/paginate';
import { LANG } from '../../lang/lang';
import { WRITINGS_DATA } from '../../data/writings.data';

const Articles = ({language}) => {
  const [writings] = useState(WRITINGS_DATA);

    if (writings.length) {
      return (
        <section id='articles'>
          <h5>{LANG[language].writings.subtitle}</h5>
          <h2>{LANG[language].writings.title}</h2>
    
          <PaginatedItems language={language} items={writings} className="container articles__container" itemsPerPage={6} />    
        </section>
      )
    } else {
      return (
        <div className='loader_content'>
          <div className="loader">
            <svg viewBox="0 0 80 80">
              <circle cx="40" cy="40" r="30"></circle>
            </svg>
          </div>
        </div>
      )
    }
}

export default Articles;