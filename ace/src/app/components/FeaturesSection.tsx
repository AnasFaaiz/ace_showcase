import Link from 'next/link';
import { FolderKanban, GitFork, Newspaper, Rocket, Clock, LayoutDashboard } from 'lucide-react';

const FeaturesSection = () => {
  return (
    <section className="w-full max-w-6xl py-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-[#cdd6f4]">
          A Command for Every Task
        </h2>
        <p className="mt-4 text-lg text-[#9399b2]">
          A.C.E. is packed with powerful features to streamline your entire workflow.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Card 1: Workspace Management */}
        <div className="bg-[#181825] p-6 rounded-lg border border-[#313244]">
          <div className="flex items-center gap-4 mb-4">
            <FolderKanban size={32} className="text-[#cba6f7]" />
            <h3 className="text-2xl font-bold text-[#cdd6f4]">Workspace Management</h3>
          </div>
          <p className="text-[#9399b2] mb-4">
            Create, manage, and navigate your projects without ever leaving the terminal. A.C.E. acts as your central hub for your entire local development environment.
          </p>
          <ul className="font-mono text-sm space-y-2">
            <li><Link href="/docs#cmd-project-create" className="text-[#a6e3a1] hover:underline"><span className="text-[#f5c2e7] mr-2">$</span>ace project create [name]</Link></li>
            <li><Link href="/docs#cmd-project-register" className="text-[#a6e3a1] hover:underline"><span className="text-[#f5c2e7] mr-2">$</span>ace project register [path]</Link></li>
            <li><Link href="/docs#cmd-project-list" className="text-[#a6e3a1] hover:underline"><span className="text-[#f5c2e7] mr-2">$</span>ace project list</Link></li>
            <li><Link href="/docs#cmd-acego" className="text-[#a6e3a1] hover:underline"><span className="text-[#f5c2e7] mr-2">$</span>acego [nickname]</Link></li>
          </ul>
        </div>

        {/* Card 2: The Vanguard (Git Assistant) */}
        <div className="bg-[#181825] p-6 rounded-lg border border-[#313244]">
          <div className="flex items-center gap-4 mb-4">
            <GitFork size={32} className="text-[#f9e2af]" />
            <h3 className="text-2xl font-bold text-[#cdd6f4]">The Vanguard (Git Assistant)</h3>
          </div>
          <p className="text-[#9399b2] mb-4">
            A safe, interactive assistant for your Git workflow. Save work, get a mission control overview, and sync your branches with professional best practices built-in.
          </p>
          <ul className="font-mono text-sm space-y-2">
            <li><Link href="/docs#cmd-save" className="text-[#a6e3a1] hover:underline"><span className="text-[#f5c2e7] mr-2">$</span>ace save [nickname]</Link></li>
            <li><Link href="/docs#cmd-overview" className="text-[#a6e3a1] hover:underline"><span className="text-[#f5c2e7] mr-2">$</span>ace overview</Link></li>
            <li><Link href="/docs#cmd-git-sync" className="text-[#a6e3a1] hover:underline"><span className="text-[#f5c2e7] mr-2">$</span>ace git sync [nickname]</Link></li>
          </ul>
        </div>

        {/* Card 3: Information & Automation */}
        <div className="bg-[#181825] p-6 rounded-lg border border-[#313244]">
          <div className="flex items-center gap-4 mb-4">
            <Newspaper size={32} className="text-[#89b4fa]" />
            <h3 className="text-2xl font-bold text-[#cdd6f4]">Information & Automation</h3>
          </div>
          <p className="text-[#9399b2] mb-4">
            Stay informed with the latest tech news and automate any recurring task with a powerful, built-in scheduler and a mission control dashboard.
          </p>
          <ul className="font-mono text-sm space-y-2">
            <li><Link href="/docs#cmd-news" className="text-[#a6e3a1] hover:underline"><span className="text-[#f5c2e7] mr-2">$</span>ace news</Link></li>
            <li><Link href="/docs#cmd-schedule-add" className="text-[#a6e3a1] hover:underline"><span className="text-[#f5c2e7] mr-2">$</span>ace schedule add</Link></li>
            <li><Link href="/docs#cmd-scheduler-start" className="text-[#a6e3a1] hover:underline"><span className="text-[#f5c2e7] mr-2">$</span>ace scheduler start</Link></li>
            <li><Link href="/docs#cmd-dashboard-start" className="text-[#a6e3a1] hover:underline"><span className="text-[#f5c2e7] mr-2">$</span>ace dashboard start</Link></li>
          </ul>
        </div>

        {/* Card 4: The Future of A.C.E. */}
        <div className="bg-[#181825] p-6 rounded-lg border border-[#313244]">
          <div className="flex items-center gap-4 mb-4">
            <Rocket size={32} className="text-[#f38ba8]" />
            <h3 className="text-2xl font-bold text-[#cdd6f4]">The Future: AI & Voice</h3>
          </div>
          <p className="text-[#9399b2] mb-4">
            The next major phase is to give A.C.E. its own brain. This involves training a custom, local NLP model to understand natural language commands.
          </p>
          <ul className="font-mono text-sm space-y-2">
            <li className="text-gray-500"><span className="text-[#f5c2e7] mr-2">$</span>ace listen</li>
            <li className="text-gray-500 pl-4"># Activate voice commands</li>
            <li className="text-gray-500 pl-4"># Custom-trained DistilBERT model</li>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default FeaturesSection;

