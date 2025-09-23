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
                    <p className="p-7 text-justify text-base sm:text-lg">
                        I&apos;m a software developer and a student of Robotics
                        and Digital Systems Engineering. Passionate about web
                        development and robotics competitions, integrating
                        software to create innovative solutions. Currently
                        working as a Software Engineer Intern at distritotec and
                        as a Software Developer for RoBorregos, the ITESM
                        robotics representative team.
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
                    length={pLanguages.length}
                />
            </section>
            <section
                id="Technologies"
                className="flex flex-col h-3/4 w-full justify-center pt-20"
            >
                <IconGrid
                    name={'Technologies'}
                    list={pTechnologies}
                    length={pTechnologies.length}
                />
            </section>
        </div>
    );
};

export default About;
