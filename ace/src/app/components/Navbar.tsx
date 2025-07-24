import Link from 'next/link';
import { Github } from 'lucide-react';

const Navbar = () => {
	return (
		<nav className="fixed top-0 left-0 w-full z-50 bg-[#11111b] border-b border-gray-800 px-8 py-4 flex justify-between items-center">
		   <Link href="/" className="text-2x1 font-bold text-[#21ff68] hover:text-[#f5c2e7] transition-colors">
		   	A.C.E.
		   </Link>

		   <div className="hidden md:flex items-center gap-8">
		      <Link href="/docs" className="text-[#cdd6f4] hover:text-[#94e2d5] transition-colors">
			Docs
		      </Link>
		      <Link href="/Blogs" className="text-[#cdd6f4] hover:text-[#94e2d5] transition-colors">
			Blogs
		      </Link>
		      <Link href="/contact" className="text-[#cdd6f4] hover:text-[#94e2d5] transition-colors">
			Contact Me
		      </Link>



		      <Link href="https://github.com/AnasFaaiz/ACE" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
			<Github size={24} />
		      </Link>
		   </div>
		</nav>
	);
};

export default Navbar;

