import Image from 'next/image';
import Info from './info/info';
import Resume from './info/resume';
const Footer = () => {
    return (
        <footer className="w-full bg-slate-950 mt-10">
            <div className="w-full max-w-7xl mx-auto flex flex-row items-center justify-between py-4 px-4 gap-4">
                <div className="w-full lg:w-auto flex justify-center">
                    <a href="#Intro" className="p-1 flex-shrink-0">
                        <Image src="/fav_img.png" alt="fav" width={56} height={56} className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-full hover:scale-110" />
                    </a>
                </div>

                <div className="w-full lg:w-auto flex flex-col items-center text-sm text-slate-300">
                    <div className="flex flex-col items-center">
                        <a href="mailto:fernando_hdz_cantu@hotmail.com" className="hover:text-white" aria-label="Send email">
                            fernando_hdz_cantu@hotmail.com
                        </a>
                        <a href="tel:+528666437431" className="hover:text-white mt-1" aria-label="Call phone">
                            +52 866 643 7431
                        </a>
                    </div>
                </div>

                <div className="w-full lg:w-auto flex justify-center">
                    <Resume />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
