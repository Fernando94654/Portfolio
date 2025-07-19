import Image from 'next/image';
const NavBar = () => {
    return (
        <div className="fixed opacity-95  backdrop-blur-sm drop-shadow-sm flex justify-end items-center text-xl p-4 gap-x-12 border-b-2 border-blue-100 z-10 w-full h-16 font-code font-semibold">
            <div className=" w-full items-start ml-16 min-w-14">
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
    );
};

export default NavBar;
