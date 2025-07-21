import Image from 'next/image';

export interface ExpElementProps {
    img: string;
    title: string;
    description: string[];
    gitRepo: string;
}

const ExpElement: React.FC<ExpElementProps> = ({
    img,
    title,
    description,
    gitRepo,
}) => {
    return (
        <div className="flex flex-col lg:flex-row bg-slate-900 rounded-md w-auto h-full lg:mx-28 mx-3 overflow-auto">
            <div className="relative lg:w-5/12 m-10">
                <Image
                    src={img}
                    alt="Image"
                    width={5000}
                    height={5000}
                    className="h-52 md:h-72 lg:h-full object-cover rounded-xl"
                />
            </div>
            <div className="lg:w-7/12 px-10 lg:p-10 overflow-auto scrollbar scrollbar-thumb-slate-500 scrollbar-track-slate-800 mb-5">
                <h3 className="text-3xl text-center pb-5">{title}</h3>
                {description.map((line, index) => (
                    <p
                        key={index}
                        className={`whitespace-pre-line sm:leading-9 leading-7 text-base sm:text-lg ${index === 0 ? 'font-semibold' : ''}`}
                    >
                        {line}
                    </p>
                ))}
                <a
                    href={gitRepo}
                    target="blank"
                    className="font-semibold hover:scale-105 hover:text-blue-800 pb-4"
                >
                    Git Respository
                </a>
            </div>
        </div>
    );
};

export default ExpElement;
