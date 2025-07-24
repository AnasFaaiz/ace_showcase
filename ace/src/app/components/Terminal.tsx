import React from 'react';

type TerminalProps = {
	title?: string;
	children: React.ReactNode;
};

const Terminal = ({ title = "ACE Assistant", children }: TerminalProps) => {
	return (
		<div className="w-full max-w-4xl rounded-lg shadow-2xl border border-[#313244]">

		  <div className="bg-[#181825] flex items-center p-3 rounded-t-lg border-b border-[#313244]">

		  <div className="flex gap-2">
		    <div className="w-3 h-3 rounded-full bg-[#f38ba8]"></div>
		    <div className="w-3 h-3 rounded-full bg-[#f9e2af]"></div>
		    <div className="w-3 h-3 rounded-full bg-[#a6e3a1]"></div>
		  </div>

		  <div className="flex-1 text-center text-sm font-semibold text-[#9399b2]">
		  	{title}
		  </div>

		  </div>

		  <div className="bg-[#1e1e2e] p-6 rounded-b-lg font-mono text-sm text-[#cdd6f4] min-h-[350px]">
		  	{children}
		  </div>

		</div>
	)
};

export default Terminal;
