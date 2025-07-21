'use client';
import { FiMenu } from 'react-icons/fi';
import { useState } from 'react';
import Image from 'next/image';
const MobileBar = () => {
    const [open, setOpen] = useState(false);

    return (
        <div
            className="fixed visible sm:invisible w-full p-2 z-20 bg-gradient-to-r from-purple-950 via-blue-950 to-sky-950"
            onClick={() => setOpen(!open)}
        >
            <FiMenu size={32} className="hover:text-slate-400 text-slate-100" />
            {open && (
                <div className="flex flex-col items-center gap-3 text-lg font-code pb-2">
                    <div>
                        <a
                            href="#Languages"
                            className="hover:underline hover:text-blue-300"
                        >
                            Languages
                        </a>
                    </div>
                    <div>
                        <a
                            href="#Technologies"
                            className="hover:underline hover:text-blue-300"
                        >
                            Technologies
                        </a>
                    </div>
                    <div>
                        <a
                            href="#Experience"
                            className="hover:underline hover:text-blue-300"
                        >
                            Experience
                        </a>
                    </div>
                    <div>
                        <a
                            href="#Contact"
                            className="hover:underline hover:text-blue-300"
                        >
                            Contact
                        </a>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MobileBar;
