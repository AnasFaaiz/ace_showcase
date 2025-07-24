import { FolderKanban, GitFork, Newspaper, LayoutDashboard } from 'lucide-react';

const CommandReferenceSection = () => {
  return (
    <section id="command-reference" className="scroll-mt-28">
      
      {/* --- Workspace Management --- */}
      <div className="mb-16">
        <div className="flex items-center gap-3 mb-8">
          <FolderKanban size={28} className="text-[#cba6f7]" />
          <h2 className="text-3xl font-bold">Workspace Management</h2>
        </div>
        <div className="pl-4 border-l-2 border-gray-800 space-y-12">
          
          <div id="cmd-project-create" className="scroll-mt-28">
            <h4 className="text-xl font-bold font-mono text-[#a6e3a1]">ace project create [name]</h4>
            <p className="text-[#9399b2] mt-2 leading-relaxed">
              Automates the entire setup process for new projects. It interactively asks for a template (e.g., react, nextjs) and a location, then runs the standard command-line tools to scaffold a complete project structure for you.
            </p>
            <p className="text-sm text-gray-500 mt-2">
              <span className="font-semibold text-gray-400">Why this is useful:</span> It saves you from the repetitive and error-prone task of manually creating folders, config files, and boilerplates, ensuring every project starts with a professional, consistent structure.
            </p>
          </div>

          <div id="cmd-project-register" className="scroll-mt-28">
            <h4 className="text-xl font-bold font-mono text-[#a6e3a1]">ace project register [path]</h4>
            <p className="text-[#9399b2] mt-2 leading-relaxed">
              Registers an existing local Git project with A.C.E. It intelligently scans the folder, uses the folder name to query the GitHub API, and automatically discovers the remote repository URL, saving all details to its memory.
            </p>
             <p className="text-sm text-gray-500 mt-2">
              <span className="font-semibold text-gray-400">Why this is useful:</span> It&apos;s the fastest way to teach A.C.E. about all your existing projects, turning it into a central hub for your entire workspace without any manual data entry.
            </p>
          </div>

          <div id="cmd-project-list" className="scroll-mt-28">
            <h4 className="text-xl font-bold font-mono text-[#a6e3a1]">ace project list</h4>
            <p className="text-[#9399b2] mt-2 leading-relaxed">
              Displays a clean, formatted list of all projects currently registered with A.C.E., showing their nickname, local path, and remote URL.
            </p>
          </div>

          <div id="cmd-acego" className="scroll-mt-28">
              <h4 className="text-xl font-bold font-mono text-[#a6e3a1]">acego [nickname]</h4>
              <p className="text-[#9399b2] mt-2 leading-relaxed">
                A special shell function that instantly navigates your terminal to the directory of any registered project, no matter where you are in the filesystem.
              </p>
              <p className="text-sm text-gray-500 mt-2">
                  <span className="font-semibold text-gray-400">Why this is useful:</span> It eliminates the need to remember long, complex paths or type `cd ../../...` repeatedly, dramatically speeding up context switching between projects.
              </p>
          </div>
        </div>
      </div>

      {/* --- The Vanguard (Git) --- */}
      <div className="mb-16">
        <div className="flex items-center gap-3 mb-8">
            <GitFork size={28} className="text-[#f9e2af]" />
            <h2 className="text-3xl font-bold">The Vanguard (Git Assistant)</h2>
        </div>
        <div className="pl-4 border-l-2 border-gray-800 space-y-12">
            <div id="cmd-save" className="scroll-mt-28">
                <h4 className="text-xl font-bold font-mono text-[#a6e3a1]">ace save [nickname]</h4>
                <p className="text-[#9399b2] mt-2 leading-relaxed">
                Initiates a safe, interactive &quot;precaution mode&quot; workflow to save your work. It shows you the &apos;git status&apos;, asks for confirmation, gets a commit message from you, and then runs &apos;git add&apos;, &apos;commit&apos;, and &apos;push&apos; automatically.
                </p>
                <p className="text-sm text-gray-500 mt-2">
                    <span className="font-semibold text-gray-400">Why this is useful:</span> It automates the three most repetitive Git commands while enforcing best practices, like reviewing changes and writing meaningful commit messages, preventing common mistakes.
                </p>
            </div>

            <div id="cmd-overview" className="scroll-mt-28">
                <h4 className="text-xl font-bold font-mono text-[#a6e3a1]">ace overview</h4>
                <p className="text-[#9399b2] mt-2 leading-relaxed">
                Provides a multi-threaded &quot;mission control&quot; report. It checks the Git status and last commit for all registered projects in parallel, delivering a near-instant response.
                </p>
                <p className="text-sm text-gray-500 mt-2">
                    <span className="font-semibold text-gray-400">Why this is useful:</span> It instantly answers the question, &quot;Did I forget to push my work anywhere today?&quot; without you having to manually check each project.
                </p>
            </div>
        </div>
      </div>
      
      {/* --- Information & Automation --- */}
      <div className="mb-16">
        <div className="flex items-center gap-3 mb-8">
          <Newspaper size={28} className="text-[#89b4fa]" />
          <h2 className="text-3xl font-bold">Information & Automation</h2>
        </div>
        <div className="pl-4 border-l-2 border-gray-800 space-y-12">
          <div id="cmd-news" className="scroll-mt-28">
            <h4 className="text-xl font-bold font-mono text-[#a6e3a1]">ace news</h4>
            <p className="text-[#9399b2] mt-2 leading-relaxed">
              Fetches the latest headlines from developer-focused sources like Hacker News. Supports flags like `--source` and `--limit` for customized news feeds.
            </p>
          </div>
          <div id="cmd-schedule-add" className="scroll-mt-28">
            <h4 className="text-xl font-bold font-mono text-[#a6e3a1]">ace schedule add &quot;[time]&quot; &quot;[command]&quot;</h4>
            <p className="text-[#9399b2] mt-2 leading-relaxed">
              Adds a recurring task to A.C.E.&apos;s internal scheduler. For example, `ace schedule add &quot;every day at 09:00&quot; &quot;ace news&quot;`.
            </p>
          </div>
           <div id="cmd-scheduler-start" className="scroll-mt-28">
            <h4 className="text-xl font-bold font-mono text-[#a6e3a1]">ace scheduler start</h4>
            <p className="text-[#9399b2] mt-2 leading-relaxed">
              Starts the persistent, lightweight &quot;watcher&quot; process in the current terminal to execute all of your scheduled tasks at the correct times.
            </p>
          </div>
        </div>
      </div>

      {/* --- Dashboard --- */}
      <div>
        <div className="flex items-center gap-3 mb-8">
          <LayoutDashboard size={28} className="text-[#f38ba8]" />
          <h2 className="text-3xl font-bold">Dashboard</h2>
        </div>
        <div className="pl-4 border-l-2 border-gray-800">
          <div id="cmd-dashboard-start" className="scroll-mt-28">
            <h4 className="text-xl font-bold font-mono text-[#a6e3a1]">ace dashboard start</h4>
            <p className="text-[#9399b2] mt-2 leading-relaxed">
              Launches the persistent, multi-pane `tmux` dashboard, providing an auto-updating, at-a-glance view of your tech news and Git project overview.
            </p>
          </div>
        </div>
      </div>

    </section>
  );
};

export default CommandReferenceSection;
