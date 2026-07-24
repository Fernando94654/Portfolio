'use client';
import Image from 'next/image';
import { useState } from 'react';
import { FaRegUser } from 'react-icons/fa';

interface ProfileImageProps {
    src: string;
    alt: string;
}

// Renders the portrait.
const ProfileImage: React.FC<ProfileImageProps> = ({ src, alt }) => {
    const [failed, setFailed] = useState(false);

    return (
        <div className="relative h-72 w-full overflow-hidden rounded-xl shadow-lg shadow-black/30 ring-1 ring-slate-700/60 lg:h-full">
            {failed ? (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-slate-800 to-slate-900 text-slate-500">
                    <FaRegUser className="h-12 w-12" />
                    <span className="text-xs font-medium">Add your photo</span>
                </div>
            ) : (
                <Image
                    src={src}
                    alt={alt}
                    fill
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    className="object-cover"
                    onError={() => setFailed(true)}
                />
            )}
        </div>
    );
};

export default ProfileImage;
