import Navbar from './components/Navbar.tsx';
import Terminal from './components/Terminal.tsx'
import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return(
		<html lang="en">
		  <body>
			<Navbar />
			{children}
		  </body>
		</html>
	);
}
