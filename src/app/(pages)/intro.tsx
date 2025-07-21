import Info from '../_components/info';

const Intro = () => {
    return (
        <section
            id="Intro"
            className="w-full h-screen relative font-main flex items-center justify-center"
        >
            <div className="flex flex-col h-full w-auto text-start justify-center px-10">
                <p className="text-3xl text-start">Hi I&apos;m</p>
                <h1 className="text-6xl font-main">Fernando Hernandez Cantu</h1>
                <Info />
            </div>
        </section>
    );
};
// bg-[url(/backGroudHome.jpg)
export default Intro;
