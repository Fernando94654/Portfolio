import MobileBar from './mobileBar';
import DesktopBar from './desktopBar';

export type Section = { name: string; href: string };

const NavBar = () => {
    const sections = [
        { name: 'Languages', href: '#Languages' },
        { name: 'Technologies', href: '#Technologies' },
        { name: 'Work Experience', href: '#Work Experience' },
        { name: 'Projects', href: '#Projects' },
        { name: 'Contact', href: '#Contact' },
    ];
    return (
        <div>
            <MobileBar sections={sections} />
            <DesktopBar sections={sections} />
        </div>
    );
};

export default NavBar;
