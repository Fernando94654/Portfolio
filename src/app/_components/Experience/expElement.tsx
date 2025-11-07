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
            target="blank"
            className="font-semibold hover:scale-105 hover:text-blue-800"
        >
            {children}
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
    return (
        <div className="flex flex-col lg:flex-row bg-slate-900 rounded-md w-full h-auto lg:h-[32rem] overflow-auto">
            <div className="relative lg:w-5/12 m-10 rounded-xl bg-slate-950">
                <Image
                    src={img}
                    alt="Image"
                    width={5000}
                    height={5000}
                    className="h-52 md:h-72 lg:h-full object-contain "
                />
            </div>
            <div className="lg:w-7/12 px-10 lg:p-10 overflow-auto scrollbar scrollbar-thumb-slate-500 scrollbar-track-slate-800 mb-5">
                <h3 className="text-3xl text-center pb-5">{title}</h3>
                {description.map((line, index) => (
                    <p
                        key={index}
                        className={`whitespace-pre-line py-2 sm:leading-9 leading-7 text-base sm:text-lg ${index === 0 ? 'font-semibold' : ''}`}
                    >
                        {line}
                    </p>
                ))}
                {gitRepo && <ExpLink href={gitRepo}>Git Respository</ExpLink>}
                {pageLink && <ExpLink href={pageLink}>Page Link</ExpLink>}
            </div>
        </div>
    );
};

export default ExpElement;
