import Image from 'next/image';
import Title from '../Title/Title';

export interface IconElementProps {
    icon: string;
    name: string;
    time: string;
}

const IconElement: React.FC<IconElementProps> = ({ icon, name, time }) => {
    return (
        <div className="flex flex-col items-center justify-center hover:scale-110 transition-transform duration-300 bg-black rounded-2xl h-32 w-36 min-w-36 lg:h-56 lg:w-64 lg:min-w-64 lg:m-5 m-2">
            <Image
                src={icon}
                alt="Image"
                width={80}
                height={80}
                className="w-auto h-2/3 pt-3"
            />
            <Title level={3} className="m-0 pt-0 lg:pt-3" gradient={false}>
                {name}
            </Title>
            <p className="text-xs lg:text-sm font-semibold text-green-600 font-mono pb-2">
                {time}
            </p>
        </div>
    );
};
export default IconElement;
