'use client';
import { pExperience } from '~/app/(pages)/hooks/useExperience';
import ExpElement from '../_components/Experience/expElement';
import { useEffect, useRef, useState } from 'react';

const Projects = () => {
    const [expState, setExp] = useState(0);
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    const handleClickOutside = (event: MouseEvent) => {
        if (
            menuRef.current &&
            !menuRef.current.contains(event.target as Node)
        ) {
            setMenuOpen(false);
        }
    };

    useEffect(() => {
        if (!menuOpen) return;
        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, [menuOpen]);

    const getProyectsButtons = (mobile: boolean) =>
        pExperience.map((pr, index) => (
            <button
                key={index}
                onClick={() => {
                    setExp(index);
                    if (mobile) setMenuOpen(false);
                }}
                className={`w-full h-auto py-4  ${index === expState ? 'bg-slate-700' : 'hover:text-blue-800'}`}
            >
                <h3>{pr.title}</h3>
            </button>
        ));

    return (
        <section
            id="Projects"
            className="lg:h-[32rem] my-20 font-code lg:px-28 px-3"
        >
            <h2 className="text-center text-4xl py-5 font-main">Projects</h2>
            <div className="flex w-full h-8 rounded-md lg:hidden bg-slate-950 my-2 items-center justify-center">
                <button
                    className="font-semibold hover:scale-105 hover:text-blue-800"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    Options
                </button>
            </div>
            {menuOpen && (
                <div
                    ref={menuRef}
                    className="bg-slate-950 overflow-auto scrollbar-hide w-72 lg:w-1/4 h-auto max-h-96 z-30 absolute right-1/2 translate-x-1/2 rounded-md"
                >
                    {getProyectsButtons(true)}
                </div>
            )}
            <div className="flex w-full h-full justify-center">
                <div className="hidden lg:flex flex-col items-center justify-center bg-slate-950 gap-1 w-56 mr-10 rounded-md text-lg font-semibold ">
                    {getProyectsButtons(false)}
                </div>
                <div className="flex flex-1 w-full lg:w-11/12">
                    <ExpElement
                        img={pExperience[expState]?.img ?? ''}
                        title={pExperience[expState]?.title ?? ''}
                        description={pExperience[expState]?.description ?? []}
                        gitRepo={pExperience[expState]?.gitRepo ?? ''}
                        pageLink={pExperience[expState]?.pageLink ?? ''}
                    />
                </div>
            </div>
        </section>
    );
};

export default Projects;
