import React from 'react';
import EducationCard from '../_components/About/educationCard';
import IconGrid from '../_components/About/iconGrid';
import ProfileImage from '../_components/About/profileImage';
import Section from '../_components/Layout/section';
import { pLanguages, pTechnologies } from './hooks/useIcons';
import { pEducation } from './hooks/useProfile';

const About = () => {
    return (
        <>
            <Section id="About" title="About">
                <div className="flex flex-col overflow-hidden rounded-lg border border-slate-800/80 bg-slate-950 lg:min-h-[22rem] lg:flex-row mb-6">
                    <div className="w-full shrink-0 p-4 sm:p-4 lg:w-2/5">
                        <ProfileImage
                            src="/assets/me.jpg"
                            alt="Fernando Hernandez Cantu"
                        />
                    </div>
                    <div className="flex items-center">
                        <p className="p-7 text-lg leading-8 text-slate-300 sm:text-xl">
                            I&apos;m a Computer Engineering student at ITESM
                            passionate about building software that solves real
                            problems. I've worked on AI pipelines and computer
                            vision at DistritoTec, multi-agent AI systems and
                            ERP integrations at Epicor, and full-stack web
                            applications. I also compete internationally in
                            robotics with RoBorregos.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col gap-4">
                    {pEducation.map((ed, index) => (
                        <EducationCard key={index} {...ed} />
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
