'use client';
import { FiMenu } from 'react-icons/fi';
import { useState } from 'react';
import type { Section } from './navbar';

const MobileBar = ({ sections }: { sections: Section[] }) => {
    const [open, setOpen] = useState(false);

    return (
        <div
            className="fixed visible sm:invisible w-full p-2 z-20 bg-gradient-to-r from-purple-950 via-blue-950 to-sky-950"
            onClick={() => setOpen(!open)}
        >
            <FiMenu size={32} className="hover:text-slate-400 text-slate-100" />
            {open && (
                <div className="flex flex-col items-center gap-3 text-lg font-code pb-2">
                    {sections.map((sec, index) => (
                        <div className="text-center" key={index}>
                            <a
                                href={sec.href}
                                className="hover:underline hover:text-blue-300"
                            >
                                {sec.name}
                            </a>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default MobileBar;
