import Image from 'next/image';
import type { Section } from './navbar';
import { SECTION_CONTAINER } from '../Layout/section';

const DesktopBar = ({ sections }: { sections: Section[] }) => {
    return (
        <div className="invisible sm:visible fixed opacity-95 backdrop-blur-sm drop-shadow-sm border-b-2 border-blue-100 z-10 w-full h-16 font-code font-semibold">
            <div
                className={`${SECTION_CONTAINER} flex h-full items-center justify-end text-base lg:text-l gap-x-3 lg:gap-x-8`}
            >
                <div className="w-full items-start min-w-14">
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
                        <a href={sec.href} className="hover:text-blue-500">
                            {sec.name}
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DesktopBar;
