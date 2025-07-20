import Image from 'next/image';

export interface IconElementProps {
    icon: string;
    name: string;
    time: string;
}

const IconElement: React.FC<IconElementProps> = ({ icon, name, time }) => {
    return (
        <div className="flex flex-col items-center justify-center hover:scale-110 transition-transform duration-300 pt-4 bg-black rounded-2xl h-36 w-40 min-w-40 lg:h-56 lg:w-64 lg:min-w-64 lg:m-5 m-2">
            <Image
                src={icon}
                alt="Image"
                width={80}
                height={80}
                className="w-auto h-2/3 pt-3"
            />
            <h3 className="text-white text-base lg:text-2xl pt-1 lg:pt-3">
                {name}
            </h3>
            <p className="text-xs lg:text-sm font-semibold text-green-600 font-mono">
                {time}
            </p>
        </div>
    );
};
export default IconElement;
