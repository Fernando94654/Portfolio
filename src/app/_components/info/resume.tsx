const Resume = () => {
    return (
        <a
            href="/Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download resume"
        >
            <div className="flex items-center justify-center w-24 h-10 bg-slate-800 rounded-full text-slate-200 font-semibold text-lg transform transition-all shadow-sm border border-slate-700 hover:scale-110 hover:bg-gradient-to-r hover:from-blue-600 hover:to-sky-500 hover:text-white">
                Resume
            </div>
        </a>
    );
};

export default Resume;
