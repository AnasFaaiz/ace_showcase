import React, { useState } from 'react';
import { Github, Star, ExternalLink } from 'lucide-react';

const GlitchedLogo = () => {
  const [starCount, setStarCount] = useState(342);
  const [isStarred, setIsStarred] = useState(false);
  const [copied, setCopied] = useState(false);

  const glitchTextStyle: React.CSSProperties = {
    textShadow: '2px 2px 0px #f38ba8, -2px -2px 0px #89b4fa',
  };

  const handleStar = () => {
    setIsStarred(!isStarred);
    setStarCount(prev => isStarred ? prev - 1 : prev + 1);
  };

  const handleCopyInstall = () => {
    navigator.clipboard.writeText('npm install -g @ace/cli');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes glitch-top {
          0%, 5%, 100% { 
            opacity: 0;
            transform: translate3d(0, 0, 0);
          }
          2.5% { 
            opacity: 1;
            transform: translate3d(2px, -2px, 0);
            clip-path: polygon(0 20%, 100% 20%, 100% 21%, 0 21%);
          }
        }
        
        @keyframes glitch-bottom {
          0%, 5%, 100% { 
            opacity: 0;
            transform: translate3d(0, 0, 0);
          }
          2.5% { 
            opacity: 1;
            transform: translate3d(-2px, 2px, 0);
            clip-path: polygon(0 78%, 100% 78%, 100% 79%, 0 79%);
          }
        }
        
        @keyframes pulse-glow {
          0%, 100% { 
            opacity: 0.25;
            transform: scale(1);
          }
          50% { 
            opacity: 0.4;
            transform: scale(1.02);
          }
        }
        
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>

      <div className="flex flex-col items-start space-y-8 top-10">
        <div className="relative group">
          <div 
            className="absolute -inset-2 bg-gradient-to-r from-[#f38ba8] via-[#89b4fa] to-[#a6e3a1] rounded-lg blur opacity-25 transition duration-1000 -z-10"
            style={{ animation: 'pulse-glow 3s ease-in-out infinite' }}
          ></div>
          
          <h1 
            className="relative text-6xl md:text-8xl font-bold font-mono text-[#cdd6f4] transition-all duration-300 group-hover:text-opacity-80 select-none"
            style={glitchTextStyle}
          >
            A.C.E.
          </h1>
          
          <h1 
            aria-hidden="true"
            className="absolute top-0 left-0 text-6xl md:text-8xl font-bold font-mono text-[#f38ba8] opacity-0 pointer-events-none select-none"
            style={{ 
              ...glitchTextStyle,
              animation: 'glitch-top 2s infinite'
            }}
          >
            A.C.E.
          </h1>
          
          <h1 
            aria-hidden="true"
            className="absolute top-0 left-0 text-6xl md:text-8xl font-bold font-mono text-[#89b4fa] opacity-0 pointer-events-none select-none"
            style={{ 
              ...glitchTextStyle,
              animation: 'glitch-bottom 2.5s infinite'
            }}
          >
            A.C.E.
          </h1>
          
          <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500 bg-gradient-to-r from-transparent via-[#cdd6f4] to-transparent blur-xl -z-20"></div>
        </div>


        <div className="flex items-center space-x-4">
          <a 
            href="https://github.com/username/ace" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 bg-gradient-to-r from-[#313244] to-[#45475a] hover:from-[#45475a] hover:to-[#585b70] px-6 py-3 rounded-lg border border-[#585b70] transition-all duration-300 group relative overflow-hidden"
          >
            {/* Shimmer effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-10 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            
            <Github size={20} className="text-[#cdd6f4] group-hover:text-[#89b4fa] transition-colors relative z-10" />
            <span className="font-medium text-[#cdd6f4] group-hover:text-[#89b4fa] transition-colors relative z-10">View on GitHub</span>
            <ExternalLink size={16} className="text-[#9399b2] group-hover:text-[#89b4fa] transition-colors relative z-10" />
          </a>
          
          <button 
            onClick={handleStar}
            className={`flex items-center space-x-2 px-4 py-3 rounded-lg border transition-all duration-300 relative overflow-hidden group ${
              isStarred 
                ? 'bg-[#f9e2af] border-[#f9e2af] text-[#1e1e2e] shadow-lg shadow-[#f9e2af]/25' 
                : 'bg-[#1e1e2e] border-[#585b70] text-[#cdd6f4] hover:border-[#f9e2af] hover:bg-[#f9e2af] hover:text-[#1e1e2e] hover:shadow-lg hover:shadow-[#f9e2af]/25'
            }`}
          >
            <Star 
              size={18} 
              className={`transition-all duration-300 ${isStarred ? 'fill-current scale-110' : 'group-hover:scale-110'}`} 
            />
            <span className="font-medium">{starCount.toLocaleString()}</span>
          </button>
        </div>


        <div className="flex items-center justify-center space-x-4 opacity-60">
          <div className="flex items-center space-x-1">
            <div className="w-2 h-2 bg-[#a6e3a1] rounded-full animate-pulse"></div>
            <span className="text-xs text-[#9399b2]">Active Development</span>
          </div>
          <div className="w-px h-4 bg-[#45475a]"></div>
          <div className="flex items-center space-x-1">
            <span className="text-xs text-[#9399b2]">v2.1.0</span>
          </div>
          <div className="w-px h-4 bg-[#45475a]"></div>
          <div className="flex items-center space-x-1">
            <span className="text-xs text-[#9399b2]">MIT License</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default GlitchedLogo;
