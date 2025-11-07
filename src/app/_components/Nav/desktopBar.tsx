import Image from 'next/image';
import type { Section } from './navbar';

const DesktopBar = ({ sections }: { sections: Section[] }) => {
    return (
        <div className="invisible sm:visible fixed opacity-95  backdrop-blur-sm drop-shadow-sm flex justify-end items-center text-base lg:text-xl p-4 gap-x-3 lg:gap-x-12 border-b-2 border-blue-100 z-10 w-full h-16 font-code font-semibold">
            <div className=" w-full items-start lg:ml-16 min-w-14">
                <a href="#Intro">
                    <Image
                        src="/fav_img.png"
                        alt="fav"
                        width={45}
                        height={45}
                        className="hover:scale-110"
                    />
                </a>
            </div>
            {sections.map((sec, index) => (
                <div className="text-center" key={index}>
                    <a
                        href={sec.href}
                        className="hover:text-blue-500"
                    >
                        {sec.name}
                    </a>
                </div>
            ))}
        </div>
    );
};

export default DesktopBar;
