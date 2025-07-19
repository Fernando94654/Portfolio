import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import React from 'react';

const Info = () => {
    return (
        <div className="flex gap-3 text-2xl p-4 text-cyan-100 items-center">
            <a href="/Resume.pdf" target="blank">
                <div className="flex items-center justify-center w-20 h-8 bg-cyan-100 rounded-full text-slate-700 font-bold text-xl hover:bg-cyan-200">
                    Resume
                </div>
            </a>
            <a
                href="https://github.com/Fernando94654"
                target="blank"
                className="hover:text-cyan-200"
            >
                <FaGithub />
            </a>
            <a
                href="https://www.linkedin.com/in/fernando-hdz-cantu"
                target="blank"
                className="hover:text-cyan-200"
            >
                <FaLinkedin />
            </a>
            <a
                href="mailto:fernando_hdz_cantu@hotmail.com"
                target="blank"
                className="hover:text-cyan-200"
            >
                <MdEmail />
            </a>
        </div>
    );
};

export default Info;
