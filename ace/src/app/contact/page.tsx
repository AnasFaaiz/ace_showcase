import Link from 'next/link';
// We'll use icons for the links.
import { Github, Linkedin, Mail, User } from 'lucide-react';

export default function ContactPage() {
  return (
    <main className="min-h-screen text-[#cdd6f4] px-4 pt-24 md:pt-32">
      <div className="max-w-4xl mx-auto">
        
        {/* Page Header */}
        <header className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter">
            Let&apos;s Connect
          </h1>
          <p className="mt-4 text-lg text-[#9399b2]">
            You can find me on the following platforms.
          </p>
        </header>

        {/* Contact Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          
          {/* LinkedIn Card */}
          <Link href="https://linkedin.com/in/syed-anas-faaiz" target="_blank" className="flex items-center gap-4 p-6 bg-[#181825] rounded-lg border border-[#313244] hover:border-[#89b4fa] transition-colors group">
            <Linkedin size={32} className="text-[#89b4fa]" />
            <div>
              <h3 className="text-xl font-bold text-[#cdd6f4] group-hover:text-[#89b4fa] transition-colors">LinkedIn</h3>
              <p className="text-[#9399b2]">syed-anas-faaiz</p>
            </div>
          </Link>

          {/* GitHub Card */}
          <Link href="https://github.com/AnasFaaiz" target="_blank" className="flex items-center gap-4 p-6 bg-[#181825] rounded-lg border border-[#313244] hover:border-[#cdd6f4] transition-colors group">
            <Github size={32} className="text-[#cdd6f4]" />
            <div>
              <h3 className="text-xl font-bold text-[#cdd6f4] group-hover:text-white transition-colors">GitHub</h3>
              <p className="text-[#9399b2]">AnasFaaiz</p>
            </div>
          </Link>

          {/* Email Card */}
          <a href="mailto:syed.anasfaaiz@gmail.com" className="flex items-center gap-4 p-6 bg-[#181825] rounded-lg border border-[#313244] hover:border-[#f38ba8] transition-colors group">
            <Mail size={32} className="text-[#f38ba8]" />
            <div>
              <h3 className="text-xl font-bold text-[#cdd6f4] group-hover:text-[#f38ba8] transition-colors">Email</h3>
              <p className="text-[#9399b2]">syed.anasfaaiz@gmail.com</p>
            </div>
          </a>

          {/* Portfolio Card */}
          <Link href="#" target="_blank" className="flex items-center gap-4 p-6 bg-[#181825] rounded-lg border border-[#313244] hover:border-[#f9e2af] transition-colors group">
            <User size={32} className="text-[#f9e2af]" />
            <div>
              <h3 className="text-xl font-bold text-[#cdd6f4] group-hover:text-[#f9e2af] transition-colors">Portfolio</h3>
              <p className="text-[#9399b2]">your-portfolio-url.com</p>
            </div>
          </Link>

        </div>
      </div>
    </main>
  );
}

