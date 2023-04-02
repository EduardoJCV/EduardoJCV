/* eslint-disable no-unused-vars */
/* eslint-disable eqeqeq */
import React, { useEffect, useState } from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Services from './components/services/Services'
import Articles from './components/articles/Articles'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

const App = () => {
  const [language, setLanguage] = useState('en');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return (
      <div className='loader_content'>
        <div className="loader">
          <svg viewBox="0 0 80 80">
            <circle cx="40" cy="40" r="30"></circle>
          </svg>
        </div>
      </div>
    )
  } else {
    return (
      <>
        <Header language={language} changeLang={(e) => setLanguage(e)} />
        <Nav language={language} />
        <main className="main__container">
          <About language={language} />
          <Experience language={language} />
          <Services language={language} />
          <Portfolio language={language} />
          <Articles language={language} />
          <Contact language={language} />
        </main>
        <Footer language={language} />
      </>
    )
  }
}

export default App