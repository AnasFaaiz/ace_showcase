import { FolderKanban, GitFork, Newspaper, BotMessageSquare, Rocket } from 'lucide-react';

const FeaturesSection = () => {
    return (
    	<section className="w-full max-w-6x1 py-20">
	  <div className="text-center mb-12">
	    <h2 className="text-4x1 md:text-5x1 font-bold text-[#cdd6f4]">
	    	A Command for Every Task
	    </h2>
	    <p className="mt-4 text-lg text-[#9399b2]">
	    	A.C.E. is packed with powerful features to streamline your entire workflow.
	    </p>
	  </div>

	  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
	   { /* Card 1: */}
	    <div className="bg-[#181825] p-6 rounded-lg border border-[#313244]">
	     <div className="flex items-center gap-4 mb-4">
	      <FolderKanban size={32} className="text-[#cba6f7]"  />
	      <h3 className="text-2x1 font-bold text-[#cdd6f4]">Workspace Management</h3>
	     </div>
	     <p className="text-[#9399b2] mb-4">
	      Create, manage and navigate your projects without ever leaving the terminal or use of "cd" to go through each folder.
	     </p>
	     <ul className="font-mono text-sm space-y-2">
	       <li className="text-[@a6e3a1]"><span className="text-[#f5c2e7] mr-2">$</span>ace project create [name]</li>
	       <li className="text-[@a6e3a1]"><span className="text-[#f5c2e7] mr-2">$</span>ace project register [name]</li>
	       <li className="text-[@a6e3a1]"><span className="text-[#f5c2e7] mr-2">$</span>ace project list</li>
	       <li className="text-[@a6e3a1]"><span className="text-[#f5c2e7] mr-2">$</span>acego [project_name]</li>
	     </ul>
	    </div>

	    {/* Card 2*/}
	    <div className="bg-[#181825] p-6 rounded-lg border border-[#313244]">
             <div className="flex items-center gap-4 mb-4">
            	<GitFork size={32} className="text-[#f9e2af]" />
        	 <h3 className="text-2xl font-bold text-[#cdd6f4]">The Vanguard (Git Assistant)</h3>
             </div>
          	<p className="text-[#9399b2] mb-4">
            	A safe, interactive assistant for your Git workflow. Save work, get a mission control overview, and more.
          	</p>
             <ul className="font-mono text-sm space-y-2">
            	<li className="text-[#a6e3a1]"><span className="text-[#f5c2e7] mr-2">$</span>ace save [nickname]</li>
            	<li className="text-[#a6e3a1]"><span className="text-[#f5c2e7] mr-2">$</span>ace overview</li>
             </ul>
            </div> 

	    {/* Card 3 */}
	    <div className="bg-[#181825] p-6 rounded-lg border border-[#313244]">
              <div className="flex items-center gap-4 mb-4">
            	<Newspaper size={32} className="text-[#89b4fa]" />
            	<h3 className="text-2xl font-bold text-[#cdd6f4]">Information Hub</h3>
              </div>
          	<p className="text-[#9399b2] mb-4">
            	Stay informed with the latest tech news and automate recurring tasks with a built-in scheduler.
              </p>
              <ul className="font-mono text-sm space-y-2">
            	<li className="text-[#a6e3a1]"><span className="text-[#f5c2e7] mr-2">$</span>ace news</li>
            	<li className="text-[#a6e3a1]"><span className="text-[#f5c2e7] mr-2">$</span>ace schedule add</li>
            	<li className="text-[#a6e3a1]"><span className="text-[#f5c2e7] mr-2">$</span>ace dashboard start</li>
              </ul>
            </div>

	     {/* Card 4: The Future of A.C.E. */}
             <div className="bg-[#181825] p-6 rounded-lg border border-[#313244]">
               <div className="flex items-center gap-4 mb-4">
            	<Rocket size={32} className="text-[#f38ba8]" />
            	<h3 className="text-2xl font-bold text-[#cdd6f4]">The Future: AI & Voice</h3>
               </div>
          	<p className="text-[#9399b2] mb-4">
            	The next major phase is to give A.C.E. its own brain. This involves training a custom, local NLP model to understand natural language.
               </p>
               <ul className="font-mono text-sm space-y-2">
            	<li className="text-[#a6e3a1]"><span className="text-[#f5c2e7] mr-2]">$</span>ace listen</li>
            	<li className="text-gray-500 pl-4"># Activate voice commands</li>
            	<li className="text-gray-500 pl-4"># Custom-trained DistilBERT model</li>
            	<li className="text-gray-500 pl-4"># Intent recognition & entity extraction</li>
               </ul>
             </div>

	    </div>
	</section>
    );
};

export default FeaturesSection;
