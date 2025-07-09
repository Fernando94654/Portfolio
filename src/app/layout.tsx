import type { Metadata} from "next";
import { Urbanist } from "next/font/google";
import '../styles/globals.css';
import NavBar from "./_components/navbar";
const urbanist = Urbanist({subsets: ["latin"]});

export const metadata: Metadata = {
  title: "Fernando Landing Page",
  description: "Landing page made by Fernando",
};

function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html>
        {/* <body  className=' bg-gray-950 text-white font-main antialiased'> */}
        <body  className=' bg-gradient-to-r from-purple-950 via-blue-950 to-sky-950 text-white font-main antialiased'>
          <NavBar />
            {children}
        </body>
    </html>
  );
}

export default RootLayout