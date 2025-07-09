"use client"
import React from 'react'
import { useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import IconElement from './iconElement';
import type { IconElementProps } from './iconElement';

interface IconProps{
    list: IconElementProps[];
    lenght: number;
}

const IconGrid: React.FC<IconProps> = ({list, lenght}) => {
    const scrollRef = useRef<HTMLDivElement>(null);
    
    const moveScrollBar = (leftB: boolean) => {
        const sc = scrollRef.current;
        if(sc){
            sc.scrollBy({
                left: leftB ? -sc.scrollWidth / lenght : sc.scrollWidth / lenght,
                behavior: 'smooth',
            })
        }
    }
  return (
    <div>
        <h2 className="text-center text-4xl p-5">Languages</h2>
            <div className="flex items-center mx-5">
                <div className="flex h-8 min-w-8 m-2 rounded-full border-2 border-solid ">
                    <button onClick={() => moveScrollBar(true)} className="flex h-full w-full justify-center items-center"><FaArrowLeft/></button>
                </div>
                <div ref={scrollRef} className="flex h-auto w-auto overflow-auto scrollbar-hide scroll-smooth">
                    {list.map((lang, index) => (
                        <IconElement key={index} icon={lang.icon} name={lang.name}/>
                    ))}
                </div>
                <div className="flex h-8 min-w-8 m-2 rounded-full border-2 border-solid ">
                    <button onClick={() => moveScrollBar(false)} className="flex h-full w-full justify-center items-center"><FaArrowRight/></button>
                </div>
            </div>
    </div>
  )
}

export default IconGrid