import Info from '../_components/info/info';
import Title from '../_components/Title/Title';
import { SECTION_CONTAINER } from '../_components/Layout/section';

const Intro = () => {
    return (
        <section
            id="Intro"
            className="w-full h-screen relative font-main flex items-center"
        >
            <div className={SECTION_CONTAINER}>
                <p className="text-3xl text-start text-slate-300">
                    Hi I&apos;m
                </p>
                <Title level={1} center={false} className="mb-2">
                    Fernando Hernandez Cantu
                </Title>
                <Info />
            </div>
        </section>
    );
};
export default Intro;
