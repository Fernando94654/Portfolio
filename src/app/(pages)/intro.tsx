import Info from '../_components/info';

const Intro = () => {
    return (
        <section id="Intro" className="w-full h-screen relative font-main">
            <div className="flex w-full h-full items-center justify-center">
                <div className="flex flex-col h-full w-1/2 text-start justify-center">
                    <p className="text-3xl text-start">Hi I&apos;m</p>
                    <h1 className="text-6xl font-main">
                        Fernando Hernandez Cantu
                    </h1>
                    <Info />
                </div>
            </div>
        </section>
    );
};
export default Intro;
