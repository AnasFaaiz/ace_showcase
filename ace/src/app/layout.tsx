import Navbar from './components/Navbar';
import Terminal from './components/Terminal'
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
