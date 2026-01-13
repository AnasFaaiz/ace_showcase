"use client";

import React, { useState, useEffect, useRef } from 'react';
import Terminal from './Terminal';
import AgentResponse from "./AgentResponse";

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

  const terminalEndRef = useRef<HTMLDivElement | null>(null);
  // Used later for command hints / validation
  const [allowedCommands, setAllowedCommands] = useState<string[]>([]);


  async function runACE(command: string) {
    const res = await fetch(`${API_BASE}/run`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ command }),
    });

    const data = await res.json();
    return data.Output;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!input.trim()) return;

    const userCommand = input.trim();

    const commandLine = (
      <Prompt>
        <span className="text-white">{userCommand}</span>
      </Prompt>
    );

    setHistory(prev => [...prev, commandLine]);
    setInput("");

    const response = await runACE(userCommand);

    setHistory(prev => [
      ...prev,
      <AgentResponse
        key={Date.now()}
        data={response}
        onAction={(cmd) => {
          setInput(cmd);
        }}
      />
    ]);
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
