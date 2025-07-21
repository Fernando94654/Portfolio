'use client';
import React from 'react';
import { useRef } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import IconElement from './iconElement';
import type { IconElementProps } from './iconElement';

interface IconProps {
    name: string;
    list: IconElementProps[];
    lenght: number;
}

const IconGrid: React.FC<IconProps> = ({ name, list, lenght }) => {
    const scrollRef = useRef<HTMLDivElement>(null);

    const moveScrollBar = (leftB: boolean) => {
        const sc = scrollRef.current;
        if (sc) {
            if (sc.scrollLeft == 0 && leftB) {
                sc.scrollBy({
                    left: sc.scrollWidth,
                    behavior: 'smooth',
                });
            } else if (
                sc.scrollLeft >= sc.scrollWidth - sc.clientWidth - 1 &&
                !leftB
            ) {
                sc.scrollBy({
                    left: -sc.scrollWidth,
                    behavior: 'smooth',
                });
            } else {
                sc.scrollBy({
                    left: leftB
                        ? (-sc.scrollWidth / lenght) * 2
                        : (sc.scrollWidth / lenght) * 2,
                    behavior: 'smooth',
                });
            }
        }
    };
    return (
        <div>
            <h2 className="text-center text-4xl p-5 font-main">{name}</h2>
            <div className="flex items-center lg:mx-5">
                <div className="flex h-6 min-w-6 sm:h-8 sm:min-w-8 m-2 mr-1 rounded-full border-2 border-solid ">
                    <button
                        onClick={() => moveScrollBar(true)}
                        className="flex h-full w-full justify-center items-center"
                    >
                        <FaArrowLeft />
                    </button>
                </div>
                <div
                    ref={scrollRef}
                    className="flex h-auto w-auto overflow-auto scrollbar-hide"
                >
                    {list.map((lang, index) => (
                        <IconElement
                            key={index}
                            icon={lang.icon}
                            name={lang.name}
                            time={lang.time}
                        />
                    ))}
                </div>
                <div className="flex h-6 min-w-6 sm:h-8 sm:min-w-8 m-2 ml-1 rounded-full border-2 border-solid ">
                    <button
                        onClick={() => moveScrollBar(false)}
                        className="flex h-full w-full justify-center items-center"
                    >
                        <FaArrowRight />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default IconGrid;
