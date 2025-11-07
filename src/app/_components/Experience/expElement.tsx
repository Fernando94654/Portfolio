import Image from 'next/image';

export interface ExpElementProps {
    img: string;
    title: string;
    description: string[];
    gitRepo?: string;
    pageLink?: string;
}

const ExpLink = ({
    href,
    children,
}: {
    href: string;
    children: React.ReactNode;
}) => (
    <div className="pt-5">
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={typeof children === 'string' ? String(children) : 'External link'}
            className="inline-flex items-center gap-2 rounded-md px-3 py-2 bg-slate-800 hover:bg-slate-700 text-sky-300 hover:text-white transition-transform transform hover:scale-105 font-medium"
        >
            {children}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 3h7m0 0v7m0-7L10 14" />
            </svg>
        </a>
    </div>
);

const ExpElement: React.FC<ExpElementProps> = ({
    img,
    title,
    description,
    gitRepo,
    pageLink,
}) => {
    // Render logic: first line is the lead/summary, the rest become supporting bullets
    const lead = description && description.length > 0 ? description[0] : '';
    const rest = description && description.length > 1 ? description.slice(1) : [];

    return (
        <section className="flex flex-col lg:flex-row bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 rounded-md w-full h-auto lg:h-[32rem] overflow-hidden shadow-lg">
            <div className="relative lg:w-5/12 m-6 lg:m-10 rounded-xl bg-slate-950 flex items-center justify-center p-4">
                <Image
                    src={img}
                    alt={title}
                    width={5000}
                    height={5000}
                    className="h-56 md:h-72 lg:h-full object-contain rounded-md"
                />
            </div>

            <div className="lg:w-7/12 px-6 lg:p-10 overflow-auto scrollbar scrollbar-thumb-slate-600 scrollbar-track-slate-800 mb-5">
                <h3 className="text-4xl text-center lg:text-left pb-4 font-extrabold tracking-tight text-white">
                    {title}
                </h3>

                {lead && (
                    <p className="whitespace-pre-line text-lg lg:text-xl text-slate-200 font-semibold leading-8 mb-4">
                        {lead}
                    </p>
                )}

                {rest.length > 0 && (
                    <ul className="list-disc list-inside space-y-2 mb-4">
                        {rest.map((line, index) => (
                            <li key={index} className="text-slate-300 leading-7 text-base sm:text-lg">
                                {line}
                            </li>
                        ))}
                    </ul>
                )}

                <div className="pt-4 flex flex-wrap gap-4">
                    {gitRepo && <ExpLink href={gitRepo}>Git Repository</ExpLink>}
                    {pageLink && <ExpLink href={pageLink}>Live Page</ExpLink>}
                </div>
            </div>
        </section>
    );
};

export default ExpElement;
