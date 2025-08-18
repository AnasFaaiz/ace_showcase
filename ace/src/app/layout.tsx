import Navbar from './components/Navbar';
import AuroraBackground from './components/AuroraBackground';
import type { metadata } from "next";
import './globals.css';
import  { Inter } from "next/font/google";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "A.C.E. - Automated Command Environment",
  description: "Your personal AI assisstant for the terminal",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return(
		<html lang="en">
		  <body className={`${inter.className} bg-[#11111b]`}>
			<AuroraBackground />
			<Navbar />
			{children}
		  </body>
		</html>
	);
}
