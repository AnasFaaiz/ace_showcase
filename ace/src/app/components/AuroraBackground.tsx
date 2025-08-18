"use client";
import React, { useState, useEffect } from 'react';

const AuroraBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0});
  
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
	setMousePosition({ x: event.clientX, y: event.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
	window.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  const maskStyle: React.CSSProperties = {
    '--mouse-x': `${mousePosition.x}px`,
    '--mouse-y': `${mousePosition.y}px`,
    maskImage: `radial-gradient(circle 300px at var(--mouse-x) var(--mouse-y), black, transparent)`,
    WebkitMaskImage: `radial-gradient(circle 300px at var(--mouse-x) var(--mouse-y), black, transparent)`,
  };

  return (
	//   <div className="fixed inset-0 -z-10 overflow-hidden">
	//     <div className="absolute inset-0 transition-all duration-300 ease-out" style={spotlightStyle}>
	//     </div>
	//     <div className="absolute inset-0 text-[#a6e3a1] font-mono text-xs opacity-5">
	//       {Array.from({ length: 50 }).map((_, i) => (
	//  <p key={i} className="whitespace-nowrap" style={{ transform: `translateY(${i * 1.5}rem)` }}>
	//    {`// function ACE_INIT(module) => { return module.status === 'OK'; } ...`.repeat(5)}
	//  </p>
	//))}
	//     </div>
	//   </div>
	<div className="fixed inset-0 -z-10 transition-all duration-300 ease-out holographic-grid" style={maskStyle}>
	</div>
  );
};

export default AuroraBackground;
