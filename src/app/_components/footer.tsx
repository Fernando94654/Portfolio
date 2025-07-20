import Image from 'next/image';
import Info from './info';
const Footer = () => {
    return (
        <div className="flex items-center justify-center w-full h-[15vh] bg-slate-950 mt-10 gap-4">
            <a href="#Intro" className="p-1">
                <Image src="/fav_img.png" alt="fav" width={45} height={45} />
            </a>
            <p>Copyright © 2025 Fernando Hernandez Cantu.</p>
            <Info />
        </div>
    );
};

export default Footer;
