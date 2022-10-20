import React, { useEffect, useState } from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
import Articles from './components/articles/Articles'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import { db } from './firebaseConfig'

const App = () => {

  const [loading, setLoading] = useState(true);

  const [projects, setProjects] = useState([]);
  const [skills, setSkills] = useState([]);
  const [writes, setWrites] = useState([]);
  const [about, setAbout] = useState([]);


  useEffect(() => {
      db.collection("Portfolio").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            if (doc.id == 'projects') {
              let arrI = [];
              for (const property in doc.data()) {
                arrI.push(doc.data()[property]);
              }
              setProjects(arrI.reverse());
            } else if (doc.id == 'Learning') {
              console.log(doc.data());
              let arrI = doc.data().writings;
              setWrites(arrI);
            } else if (doc.id == 'skills') {
              setSkills(doc.data());
            } else if (doc.id == 'about') {
              setAbout(doc.data());
            }
        });
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <>
        loading
      </>
    )
  } else {
    return (
      <>
          <Header />
          <Nav />
          <About about={about} />
          <Experience skills={skills} />
          <Services />
          <Portfolio projects={projects} />
          <Articles writes={writes} />
          <Contact />
          <Footer />
      </>
    )
  }
}

export default App