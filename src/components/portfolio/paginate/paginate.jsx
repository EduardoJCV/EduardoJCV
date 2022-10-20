import React, { useEffect, useState } from 'react';

import ReactPaginate from 'react-paginate';

import './paginate.css'


function Items({ currentItems }) {
  if (currentItems) {
    
    return (
      <>
        <div className="container portfolio__container">
          {
            currentItems.map(({id, img, name, description, github, demo}) => {
              return (
                <article key={id} className='portfolio__item'>
                  <div className="portfolio__item-image">
                    <img src={img} alt={name} />
                  </div>
                  <h3>{name}</h3>
                  <span className='line-clamp-span'>{description}</span>
                  <div className="portfolio__item-cta">
                    <a href={github | ''} className='btn' target='_blank'>Github</a>
                    <a href={demo | ''} className='btn btn-primary' target='_blank'>Live Demo</a>
                  </div>
                </article>
              )
            })
          }
        </div>
      </>
    );
  } else {
    return (
      <>
        <h1>no proyects</h1>
      </>
    )
  }
}

function PaginatedItems(props) {

  const { itemsPerPage, items } = props;

  // We start with an empty list of items.
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  

  useEffect(() => {
    console.log(items)
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(items.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  if (items) {
    return (
      <>
        <Items currentItems={currentItems} />
        <ReactPaginate className="pagination"
          breakLabel="..."
          nextLabel="Next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="< Previous"
          renderOnZeroPageCount={null}
        />
      </>
    );
  } else {
    <>
    
    </>
  }
}

export default PaginatedItems
