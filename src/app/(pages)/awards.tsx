import React from 'react';
import Section from '../_components/Layout/section';
import { pAwards } from './hooks/useProfile';

const Awards = () => {
    return (
        <Section id="Awards" title="Awards">
            <div className="bg-slate-950 rounded-lg p-7">
                <ul className="list-disc list-inside space-y-2">
                    {pAwards.map((award, index) => (
                        <li
                            key={index}
                            className="text-slate-300 leading-7 text-base sm:text-lg"
                        >
                            {award}
                        </li>
                    ))}
                </ul>
            </div>
        </Section>
    );
};

export default Awards;
