import React from 'react';
import IconGrid from '../_components/About/iconGrid';
import Section from '../_components/Layout/section';
import { pLanguages, pTechnologies } from './hooks/useIcons';
import { pEducation } from './hooks/useProfile';

const About = () => {
    return (
        <>
            <Section id="About" title="About">
                <div className="bg-slate-950 rounded-lg">
                    <p className="p-7 text-justify text-slate-300 leading-7 text-base sm:text-lg">
                        Computer Engineering student at ITESM who loves turning
                        complex problems into real systems. From ML/AI pipelines
                        at DistritoTec to ERP integrations at Epicor, web
                        applications, and competitive robotics at RoBorregos. I
                        build things that actually run.
                    </p>
                </div>
            </Section>
            <Section id="Education" title="Education">
                <div className="bg-slate-950 rounded-lg p-7">
                    {pEducation.map((ed, index) => (
                        <div key={index}>
                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1">
                                <h3 className="text-lg sm:text-xl font-semibold text-white">
                                    {ed.school}
                                </h3>
                                <p className="text-slate-400 text-sm sm:text-base whitespace-nowrap">
                                    {ed.period}
                                </p>
                            </div>
                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1 pt-1">
                                <p className="text-slate-300 leading-7 text-base sm:text-lg">
                                    {ed.degree} ({ed.detail})
                                </p>
                                <p className="text-slate-400 text-sm sm:text-base whitespace-nowrap">
                                    {ed.location}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </Section>
            <Section id="Languages" title="Languages">
                <IconGrid
                    name={'Languages'}
                    list={pLanguages}
                    length={pLanguages.length}
                />
            </Section>
            <Section id="Technologies" title="Technologies">
                <IconGrid
                    name={'Technologies'}
                    list={pTechnologies}
                    length={pTechnologies.length}
                />
            </Section>
        </>
    );
};

export default About;
