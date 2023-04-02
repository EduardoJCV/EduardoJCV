/* eslint-disable eqeqeq */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';

import ReactPaginate from 'react-paginate';

import './paginate.css'
import { LANG } from '../../../lang/lang';


const Items = ({ currentItems, language }) => {
  const [articleOpen, setArticleOpen] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState(null);

  if (currentItems) {
    return (
      <>
        <div className='container articles__container'>
          {
            currentItems.map((article, index) => {
              return (
                <div key={`article;${index}`}>
                  {(articleOpen && selectedArticle != null) && (
                    <>
                      {selectedArticle.id == article.id && (
                        <div className='article__popup'>
                          <div className='article__popup_container'>
                            <div className='article__popup_button'>
                              <button onClick={() => {setArticleOpen(false); setSelectedArticle(null)}}>X</button>
                            </div>
                            <h1>{selectedArticle.title[language]}</h1>
                            <div className='article__popup_container_article'>
                              <p> <img src={selectedArticle.img} alt={selectedArticle.title} style={{float: 'left'}} /> 
                                {selectedArticle.content[language].split('\n').map((text) => `${ text } \n` )}
                              </p>
                            </div>
                          </div>
                        </div>
                      )}
                    </>
                  )}
                  <article key={`article;${article.id}`} className='articles__item'>
                    <div className='articles__item-image'>
                      <img src={article.img} alt={article.title} />
                    </div>
                    <h3>{article.title[language]}</h3>
                    <span className='line-clamp-span'>{article.content[language]}</span>
                    <div className='articles__item-cta'>
                      <a onClick={() => {setArticleOpen(true); setSelectedArticle(article)}} className='btn btn-primary' target='_blank'>{LANG[language].writings.continueReading}</a>
                    </div>
                  </article>
                </div>
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

const PaginatedItems = ({ itemsPerPage, items, language }) => {

  // We start with an empty list of items.
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(items.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };

  if (items) {
    return (
      <>
        <Items language={language} currentItems={currentItems} />
        <ReactPaginate className='pagination'
          breakLabel='...'
          nextLabel={language == 'en' ? 'Next >' : 'Siguiente >'}
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel={language == 'en' ? '< Previous' : '< Anterior'}
          renderOnZeroPageCount={null}
        />
      </>
    );
  } else {
    <>
    
    </>
  }
}

export default PaginatedItems;

