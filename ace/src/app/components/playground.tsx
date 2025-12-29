"use client";

import React, { useState, useEffect, useRef } from 'react';
import Terminal from './Terminal';
import { runACE } from "@/lib/aceApi";

const API_BASE = "http://127.0.0.1:8000";

async function fetchCapabilities() {
  const res = await fetch(`${API_BASE}/capabilities`);
  return res.json();
}

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

  const terminalEndRef = useRef<null | HTMLDivElement>(null);
  const [allowedCommands, setAllowedCommands] = useState<string[]>([]);

  const handleCommand = async (input: string): Promise<React.ReactNode[]> => {
    const cleaned = input.trim().toLowerCase();

    if (cleaned === "clear") {
      setHistory([]);
      return [];
    }

    if (!cleaned.startsWith("ace ")) {
      return [
        <span key="err" className="text-[#f38ba8]">
          Commands must start with `ace`
        </span>,
      ];
    }

    const command = cleaned.replace("ace ", "");

    if (!allowedCommands.includes(command)) {
      return [
        <span key="deny" className="text-[#f38ba8]">
          Command `{command}` not allowed in web mode
        </span>,
      ];
    }

    try {
      const result = await runACE(command);
      return [
        <pre key="out" className="whitespace-pre-wrap">
          {JSON.stringify(result, null, 2)}
        </pre>,
      ];
    } catch {
      return [
        <span key="fail" className="text-[#f38ba8]">
          Failed to reach ACE backend
        </span>,
      ];
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const commandLine = (
      <Prompt>
        <span className="text-white">{input}</span>
      </Prompt>
    );

    const output = await handleCommand(input);

    setHistory((prev) => [...prev, commandLine, ...output]);
    setInput("");
  };

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  // Commands Tracking:
  useEffect(() => {
    fetchCapabilities().then((data) => {
      setAllowedCommands(data.allowed_commands || []);
    });
  }, []);

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
              {/*<BlinkingCursor />*/}
            </Prompt>
          </form>
        </div>
      </Terminal>
    </div>
  );
};

export default Playground;
