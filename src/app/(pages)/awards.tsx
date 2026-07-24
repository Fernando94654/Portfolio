import React from 'react';
import { FaGraduationCap } from 'react-icons/fa';
import Section from '../_components/Layout/section';
import { pAwards } from './hooks/useProfile';

// Rank-tiered accent so podium finishes read at a glance without extra chrome.
const tierStyles = (place: string) => {
    switch (place) {
        case '1st':
            return 'ring-amber-400/40 bg-amber-400/10 text-amber-300';
        case '2nd':
            return 'ring-slate-300/40 bg-slate-300/10 text-slate-200';
        case '3rd':
            return 'ring-orange-400/40 bg-orange-400/10 text-orange-300';
        default:
            return 'ring-sky-400/40 bg-sky-400/10 text-sky-300';
    }
};

const Awards = () => {
    return (
        <Section id="Awards" title="Awards">
            <div className="grid gap-4 sm:grid-cols-2">
                {pAwards.map((award, index) => {
                    const isScholarship = award.place === 'Scholarship';
                    return (
                        <div
                            key={index}
                            className={`group flex items-center gap-4 rounded-xl border border-slate-800/80 bg-slate-950 p-4 transition-all hover:-translate-y-0.5 hover:border-slate-700 sm:p-5 ${
                                isScholarship
                                    ? 'sm:col-span-2 bg-gradient-to-r from-indigo-950/60 via-slate-950 to-slate-950'
                                    : ''
                            }`}
                        >
                            <div
                                className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full text-sm font-bold ring-1 transition-transform group-hover:scale-105 ${
                                    isScholarship
                                        ? 'bg-indigo-400/10 text-indigo-300 ring-indigo-400/40'
                                        : tierStyles(award.place)
                                }`}
                            >
                                {isScholarship ? (
                                    <FaGraduationCap className="h-6 w-6" />
                                ) : (
                                    award.place
                                )}
                            </div>
                            <div className="min-w-0">
                                <h3 className="text-base font-semibold leading-snug text-white sm:text-lg">
                                    {award.title}
                                </h3>
                                <p className="mt-1 text-sm text-slate-400">
                                    {award.meta}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </Section>
    );
};

export default Awards;
