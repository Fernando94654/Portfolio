'use client';
import Image from 'next/image';
import type { IconType } from 'react-icons';
import {
    SiDotnet,
    SiFastapi,
    SiLinux,
    SiNestjs,
    SiNextdotjs,
    SiNodedotjs,
    SiSharp,
} from 'react-icons/si';
import Title from '../Title/Title';

export interface IconElementProps {
    icon: string;
    name: string;
    time: string;
}

// Tech without an asset in public/assets falls back to a react-icons glyph.
const ICON_MAP: Record<string, { Icon: IconType; color: string }> = {
    csharp: { Icon: SiSharp, color: 'text-purple-500' },
    dotnet: { Icon: SiDotnet, color: 'text-violet-500' },
    fastapi: { Icon: SiFastapi, color: 'text-teal-500' },
    linux: { Icon: SiLinux, color: 'text-slate-200' },
    nestjs: { Icon: SiNestjs, color: 'text-red-500' },
    nextjs: { Icon: SiNextdotjs, color: 'text-slate-100' },
    nodejs: { Icon: SiNodedotjs, color: 'text-green-600' },
};

const IconElement: React.FC<IconElementProps> = ({ icon, name, time }) => {
    const fallback = icon.startsWith('/') ? undefined : ICON_MAP[icon];

    return (
        <div className="flex flex-col items-center justify-center hover:scale-110 transition-transform duration-300 bg-black rounded-2xl h-32 w-36 min-w-36 lg:h-56 lg:w-64 lg:min-w-64 lg:my-5 my-2">
            {fallback ? (
                <fallback.Icon
                    className={`w-auto h-2/3 pt-3 ${fallback.color}`}
                    size={80}
                />
            ) : (
                <Image
                    src={icon}
                    alt="Image"
                    width={80}
                    height={80}
                    className="w-auto h-2/3 pt-3"
                />
            )}
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
