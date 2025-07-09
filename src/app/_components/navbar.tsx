
import Image from 'next/image'
const NavBar = () => {
    return (
        <div className='fixed opacity-95  backdrop-blur-sm drop-shadow-sm flex justify-end items-center text-xl p-4 gap-x-12 border-b-2 border-blue-100 z-10 w-full h-16 '>
            <div>
                <a href='#About' className='hover:underline hover:text-blue-300'>About me</a>
            </div>
            <div>
                <a href='#Experience' className='hover:underline hover:text-blue-300'>Experience</a>
            </div>
            <div>
                <a href='#Contact' className='hover:underline hover:text-blue-300'>Contact</a>
            </div>

        </div>
    )   
}

export default NavBar;
