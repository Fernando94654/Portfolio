import React from 'react';
import Intro from './(pages)/intro';
import About from './(pages)/about';
import WorkExperience from './(pages)/workExperience';
import Contact from './(pages)/contact';
import Projects from './(pages)/projects';

const Home = () => {
    return (
        <main>
            <Intro />
            <About />
            <WorkExperience />
            <Projects />
            <Contact />
        </main>
    );
};

export default Home;
