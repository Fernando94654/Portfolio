import Image from 'next/image';

export interface IconElementProps {
    icon: string;
    name: string;
}

const IconElement: React.FC<IconElementProps> = ({ icon, name }) => {
    return (
        <div className="flex flex-col items-center justify-center hover:scale-110 transition-transform duration-300 pt-4 bg-black rounded-2xl h-36 w-40 min-w-40 lg:h-56 lg:w-64 lg:min-w-64 m-5">
            <Image
                src={icon}
                alt="Image"
                width={80}
                height={80}
                className="w-auto h-2/3 pt-3"
            />
            <h3 className="text-white text-2xl p-5">{name}</h3>
        </div>
    );
};
export default IconElement;
