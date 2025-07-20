import React from 'react';
import IconGrid from '../_components/About/iconGrid';
import { pLanguages, pTechnologies } from './hooks/useIcons';

const About = () => {
    return (
        <div className="font-code">
            <section
                id="About"
                className="flex flex-col h-3/4 w-full justify-center "
            >
                <h2 className="text-center text-4xl pt-20 pb-5 font-main">
                    About
                </h2>
                <div className="bg-slate-900 mx-6 lg:mx-56 rounded-lg">
                    <p className="p-7 text-justify text-lg">
                        I&apos;m a software engineer, student of Robotics and
                        Digital Systems Engineering, and Mechatronics
                        Technician. I like computer vision, web development and
                        robotics competitions. I enjoy combining software and
                        hardware to create innovative solutions. I&apos;m
                        currently a software developer in RoBorregos (ITESM
                        robotic representative team).
                    </p>
                </div>
            </section>
            <section
                id="Languages"
                className="flex flex-col h-3/4 w-full justify-center pt-20"
            >
                <IconGrid
                    name={'Languages'}
                    list={pLanguages}
                    lenght={pLanguages.length}
                />
            </section>
            <section
                id="Technologies"
                className="flex flex-col h-3/4 w-full justify-center pt-20"
            >
                <IconGrid
                    name={'Technologies'}
                    list={pTechnologies}
                    lenght={pTechnologies.length}
                />
            </section>
        </div>
    );
};

export default About;
