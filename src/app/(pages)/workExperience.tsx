'use client';
import { pWorkExperience } from '~/app/(pages)/hooks/useExperience';
import ExpElement from '../_components/Experience/expElement';
import Title from '../_components/Title/Title';
import { useState } from 'react';

const WorkExperience = () => {
    const [expState, setExp] = useState(0);

    return (
        <section
            id="Work Experience"
            className="w-auto min-h-[48rem] my-20 font-code lg:mx-28 mx-3"
        >
            <Title level={2}>Work Experience</Title>
            <div className="flex items-center p-2 bg-slate-950 my-3 rounded-md text-lg font-semibold">
                {pWorkExperience.map((lang, index) => (
                    <div
                        key={index}
                        className={`flex items-center justify-center w-full h-full ${index === expState ? 'bg-slate-800' : ''}`}
                    >
                        <button
                            onClick={() => setExp(index)}
                            className={'hover:text-blue-800 w-full py-1 hover:scale-105'}
                        >
                            <Title level={3} center={true} className="m-0 text-base">
                                {lang.title}
                            </Title>
                        </button>
                    </div>
                ))}
            </div>
            <ExpElement
                img={pWorkExperience[expState]?.img ?? ''}
                title={pWorkExperience[expState]?.title ?? ''}
                description={pWorkExperience[expState]?.description ?? []}
            />
        </section>
    );
};

export default WorkExperience;
