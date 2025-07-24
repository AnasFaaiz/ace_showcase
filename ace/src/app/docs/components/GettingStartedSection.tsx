import { HardHat } from 'lucide-react';
import Terminal from '@/app/components/Terminal'; // Using an alias for cleaner imports

const GettingStartedSection = () => {
  return (
    <section id="getting-started" className="mb-16 scroll-mt-28">
      <div className="flex items-center gap-3 mb-4">
        <HardHat size={28} className="text-[#94e2d5]" />
        <h2 className="text-3xl font-bold">Getting Started</h2>
      </div>
      
      <h3 className="text-xl font-semibold mt-6 mb-2 text-[#cba6f7]">Prerequisites</h3>
      <p className="text-[#9399b2] mb-4">Before you begin, ensure you have the following installed on your system:</p>
      <ul className="list-disc list-inside space-y-1 text-[#9399b2]">
        <li>Python (3.10+)</li>
        <li>Git</li>
        <li>Node.js & npm (for the project scaffolder)</li>
        <li>tmux (for the dashboard feature)</li>
      </ul>

      <h3 className="text-xl font-semibold mt-8 mb-2 text-[#cba6f7]">Installation & Configuration</h3>
      <p className="text-[#9399b2] mb-4">Follow these steps to get A.C.E. up and running:</p>
      <Terminal title="Installation Steps">
        <div className="space-y-4">
          <div>
            <p className="text-gray-400"># 1. Clone the repository from GitHub</p>
            <p><span className="text-[#f5c2e7]">$</span> git clone https://github.com/AnasFaaiz/ACE.git</p>
          </div>
          <div>
            <p className="text-gray-400"># 2. Navigate into the project directory</p>
            <p><span className="text-[#f5c2e7]">$</span> cd ACE</p>
          </div>
          <div>
            <p className="text-gray-400"># 3. Install the required Python libraries</p>
            <p><span className="text-[#f5c2e7]">$</span> pip3 install -r requirements.txt</p>
          </div>
          <div>
            <p className="text-gray-400"># 4. Set up your credentials in the .env file</p>
          </div>
          <div>
            <p className="text-gray-400"># 5. Make A.C.E. a global command</p>
          </div>
        </div>
      </Terminal>
    </section>
  );
};

export default GettingStartedSection;

