
import React from 'react';
import Intro from './(pages)/intro';
import About from './(pages)/about';
import Experience from './(pages)/experience';
import Contact from './(pages)/contact';
const Home = () => {
  return (
    <main>
      <Intro/>
      <About/>
      <Experience/>
      <Contact/>
    </main>
    
  )
}

export default Home;