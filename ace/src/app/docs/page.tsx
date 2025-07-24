import IntroductionSection from './components/IntroductionSection';
import GettingStartedSection from './components/GettingStartedSection';
import CommandReferenceSection from './components/CommandReferenceSection';

export default function DocsPage() {
  return (
    <main className="min-h-screen text-[#cdd6f4] px-4 pt-24 md:pt-32">
      <div className="max-w-6xl mx-auto">
        
        {/* Page Header */}
      {/*  <header className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter">
            A.C.E. Documentation
          </h1>
          <p className="mt-4 text-lg text-[#9399b2]">
            Your guide to installing, configuring, and using your personal AI assistant.
          </p>
        </header>
      */ }

        {/* Main Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Left Sidebar for Navigation */}
          <aside className="lg:col-span-1">
            <nav className="sticky top-28">
              <h3 className="text-lg font-semibold text-[#cba6f7] mb-4">On this page</h3>
              <ul className="space-y-2">
                <li><a href="#introduction" className="text-[#9399b2] hover:text-white transition-colors">Introduction</a></li>
                <li><a href="#getting-started" className="text-[#9399b2] hover:text-white transition-colors">Getting Started</a></li>
                <li><a href="#command-reference" className="text-[#9399b2] hover:text-white transition-colors">Command Reference</a></li>
              </ul>
            </nav>
          </aside>

          {/* Right Content Area */}
          <div className="lg:col-span-3">
            <IntroductionSection />
            <GettingStartedSection />
            <CommandReferenceSection />
          </div>
        </div>
      </div>
    </main>
  );
}

