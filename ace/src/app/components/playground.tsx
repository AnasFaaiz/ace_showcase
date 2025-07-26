"use client";
import React, { useState, useEffect, useRef } from 'react';
import Terminal from '../components/Terminal';


//const BlinkingCursor = () => <span className="w-2 h-5 bg-[#f5c2e7] inline-block animate-pulse"></span>;

const Prompt = ({ children }: { children: React.ReactNode }) => (
   <div className="flex items-center">
     <p className="text-[#a6e3a1]">ace@user</p>
     <p className="text-[#cdd6f4]">:</p>
     <p className="text-[#89b4fa]">~</p>
     <p className="text-[#f5c2e7] mx-2">$</p>
     {children}
   </div>
);

const Playground = () => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<React.ReactNode[]>([]);
  const [simulatedProjects, setSimulatedProjects] = useState<{ [key: string]: any}>({});
  const terminalEndRef = useRef<null | HTMLDivElement>(null);

  const handleCommand = (command: string) => {
	const staticOutputs: { [key:string]: React.ReactNode[] } = {
	  'ace overview': ["--- Git Project Overview ---", "\n  - ACE:\n    Status: ✅ Up to date"],
    	  'ace news': ["Fetching latest news...", "\n--- Latest from Hackernews ---", "  - Show HN: ..."],
          'help': ["Available commands:", "  - ace project register [name]", "  - ace project list", "  - ace overview", "  - ace news", "  - clear"],
	};
	
	if(staticOutputs[command]){
		return staticOutputs[command];
	}
	
	if (command === 'ace project list'){
		const projectNames = Object.keys(simulatedProjects);
		if(projectNames.length === 0){
		   return ["No projects are registered with A.C.E. yet."];
		}
		const output = ["--- A.C.E. Registered Projects ---"];
		projectNames.forEach(name => {
		   output.push('\n  - Nickname: ${name}');
		});
		output.push("------------------------------------");
		return output;
	}
	
	if(command.startsWith('ace project registre ')) {
		const projectName= command.split(' ')[3];
		if(!projectName){
			return [<span className="text-[#f38ba8]">Usage: ace project register [project-name]</span>];
		}
		setSimulatedProjects(prev => ({ ...prev, [projectName]: {} }));
		return [` Success! Project '${projectName}' is now registered with A.C.E.`];
	}
	return [<span className="text-[#f38ba8]">Command not found: &apos;{command}&apos;. Type &apos;help&apos; for a list of commands.</span>];
  };

  const handleSubmit = (e: React.FormEvent) => {
	e.preventDefault();
	const command = input.trim().toLowerCase();
	const commandLine = <Prompt><span className="text-white">{input}</span></Prompt>;
	
	if(command === 'clear') {
		setHistory([]);
		setInput('');
		return;
	}

	const output = handleCommand(command);
	setHistory(prev => [...prev, commandLine, ...output]);
	setInput('');
  };

  useEffect(() => {
	terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  return (
   <div className="w-full max-w-xl mx-auto">	
     <Terminal title="A.C.E. Playground">
       <div className="h-full flex flex-col">
        <div className="flex-grow overflow-y-auto pr-2">
	 <div className="space-y-2 whitespace-pre-wrap">
	   {history.map((line, index) => (
	     <div key={index}>{line}</div>
	   ))}
	 </div>
	<div ref={terminalEndRef} />
       </div>

	<form onSubmit={handleSubmit} className="mt-auto">
	 <Prompt>
	  <input type="text" value={input} onChange={(e) => setInput(e.target.value)}
	  className="bg-transparent border-none outline-none text-white w-full"
	  autoFocus
	  />
	  {/*<BlinkingCursor />*/ }
	 </Prompt>
	</form>
       </div>
     </Terminal>
   </div>
  );
};

export default Playground;
