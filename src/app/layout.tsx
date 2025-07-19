import type { Metadata } from 'next';
import '../styles/globals.css';
import NavBar from './_components/navbar';
import Footer from './_components/footer';
import { Toaster } from 'react-hot-toast';

export const metadata: Metadata = {
    title: 'Fernando Landing Page',
    description: 'Landing page made by Fernando',
};

function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html>
            <body className=" bg-gradient-to-r from-purple-950 via-blue-950 to-sky-950 text-white font-main antialiased">
                <NavBar />
                {children}
                <Footer />
                <Toaster />
            </body>
        </html>
    );
}

export default RootLayout;
