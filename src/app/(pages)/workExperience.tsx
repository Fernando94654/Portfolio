'use client';
import { pWorkExperience } from '~/app/(pages)/hooks/useExperience';
import ExpElement from '../_components/Experience/expElement';
import { useState } from 'react';

const WorkExperience = () => {
    const [expState, setExp] = useState(0);

    return (
        <section
            id="Work Experience"
            className="w-auto h-[95vh] my-20 font-code lg:mx-28 mx-3"
        >
            <h2 className="text-center text-4xl py-5 font-main">
                Work Experience
            </h2>
            <div className="flex items-center p-2 bg-slate-950 my-3 rounded-md text-lg font-semibold">
                {pWorkExperience.map((lang, index) => (
                    <div
                        key={index}
                        className={`flex items-center justify-center w-full h-full ${index === expState ? 'bg-slate-800' : ''}`}
                    >
                        <button
                            onClick={() => setExp(index)}
                            className={'hover:text-blue-800 w-full py-1'}
                        >
                            <h3>{lang.title}</h3>
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
