import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import React from 'react';
import Resume from './resume';
const Info = () => {
    return (
        <div className="flex gap-3 text-2xl py-4 items-center">
            <Resume />
            <a
                href="https://github.com/Fernando94654"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-slate-800 text-slate-200 border border-slate-700 transition-all shadow-sm transform hover:scale-110 hover:bg-gradient-to-r hover:from-slate-700 hover:to-sky-500 hover:text-white"
            >
                <FaGithub className="w-5 h-5" />
            </a>

            <a
                href="https://www.linkedin.com/in/fernando-hdz-cantu"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-slate-800 text-sky-300 border border-slate-700 hover:bg-gradient-to-br hover:from-blue-700 hover:to-sky-600 hover:text-white transition-transform transform hover:scale-105 shadow-sm"
            >
                <FaLinkedin className="w-5 h-5" />
            </a>

            <a
                href="mailto:fernando_hdz_cantu@hotmail.com"
                aria-label="Send email"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-slate-800 text-amber-400 border border-slate-700 hover:bg-amber-600 hover:text-white transition-transform transform hover:scale-105 shadow-sm"
            >
                <MdEmail className="w-5 h-5" />
            </a>
        </div>
    );
};

export default Info;
