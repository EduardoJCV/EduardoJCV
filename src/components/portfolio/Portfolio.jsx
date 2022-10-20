import React, { useEffect } from 'react';
import './portfolio.css';

import 'swiper/css';
import 'swiper/css/pagination';
import PaginatedItems from './paginate/paginate';

const Portfolio = ({projects}) => {

  useEffect(() => {
    console.log(projects)
  }, []);

    if (projects.length) {
      return (
        <section id='portfolio'>
          <h5>My Recent Work</h5>
          <h2>Portfolio</h2>
    
          <PaginatedItems items={projects} className="container portfolio__container" itemsPerPage={6}>
    
          </PaginatedItems>
    
        </section>
      )
    } else {
      return (
        <>
        </>
      )
    }
}

export default Portfolio