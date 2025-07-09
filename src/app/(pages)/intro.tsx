import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Intro = () => {
  return (
    <section id="Intro" className='w-full h-screen relative'>
      <div className='flex w-full h-full items-center justify-center'>
        <div className='flex flex-col h-full w-1/2 text-start justify-center'>
            <p className='text-3xl text-start'>Hi i'm</p>
            <h1 className='text-6xl'>Fernando Hernandez Cantu</h1>
            <div className="flex gap-3 text-2xl p-4 text-cyan-100">
              <a href="https://github.com/Fernando94654" target="blank"><FaGithub /></a>
              <a href="https://www.linkedin.com/in/fernando-hdz-cantu" target="blank"><FaLinkedin /></a>
              <a href="mailto:fernando_hdz_cantu@hotmail.com" target="blank"><MdEmail /></a>
            </div>

          </div>
        </div> 
      </section> 
  )
}
// bg-[url(/backGroudHome.jpg)
export default Intro;