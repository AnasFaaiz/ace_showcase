// HomePage

"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Terminal from './components/Terminal.tsx';
import FeaturesSection from './components/FeaturesSection.tsx';

const TypingText = ({ text, onComplete }: { text: string; onComplete?: () => void }) => {
  const [displayedText, setDisplayedText] = useState('');
  const typingSpeed = 50; // Milliseconds per character

  useEffect(() => {
    if (displayedText.length < text.length) {
      const timeoutId = setTimeout(() => {
        setDisplayedText(text.substring(0, displayedText.length + 1));
      }, typingSpeed);
      return () => clearTimeout(timeoutId);
    } else if (onComplete) {
      onComplete(); // Call the callback when typing is done
    }
  }, [displayedText, text, onComplete]);

  return <p className="text-[#cdd6f4] leading-relaxed">{displayedText}</p>;
};

const BlinkingCursor = () => (
	<span className="w-0.5 h-4 bg-[#f5c2e7] inline-block ml-1 animate-pulse" />
);

export default function Home(){
	const [typingStep, setTypingStep] = useState(0);
	useEffect(() => {
		const startTimeout = setTimeout(()=>{
			setTypingStep(1);
		}, 1000);
		return () => clearTimeout(startTimeout);
	}, []);

	return(
		
	   <main className=" relative flex min-h-screen flex-col items-center text-[#cdd6f4] px-2 top-20">
		<section className="w-full flex justify-end ">
		   <div className="w-1/2 p-4 mr-5">
	   		<Terminal title="ace@anas: ~" >
			  <div className="flex items-center">
			    <p className="text-[#a6e3a1]">ace@anas</p>
			    <p className="text-white">:</p>
			    <p className="text-[#89b4fa]">~</p>
			    <p className="text-[#f4c2e7] ml-2">$</p>
			    <p className="text-white ml-2">ace --purpose</p>
			    {typingStep === 3 && <BlinkingCursor />}
			  </div>

			  <div className="mt-2">
			   {typingStep >= 1 && (
			   	<div className="flex">
				   <span className="text-[#89b4fa] mr-2">❯</span>
				   <TypingText
				     text="A.C.E. (Automated Command Environment) is a personal assistant for developers."
				     onComplete={() => setTypingStep(2)}
				   />
				   </div>
			   )}
			   { typingStep >= 2 && (
			   	<div className="flex mt-2">
                  		   <span className="text-[#89b4fa] mr-2">❯</span>
                  		   <TypingText 
                    			text="It automates your daily workflow so you can focus on building what matters."
                    			onComplete={() => setTypingStep(3)} 
                  		    />
                		</div>
			   )}
			  </div>
			 
			</Terminal>
		   </div>
		</section>
		<FeaturesSection />
	   </main>
	);
}
