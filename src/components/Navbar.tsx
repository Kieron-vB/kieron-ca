
"use client";

import React, { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div className="relative">
      {/* Desktop Navbar */}
    <div className="hidden md:flex relative">
      <nav className="absolute z-20 w-full bg-background flex justify-between px-8 pt-3 pb-2">
        <a href="/about" className="button"><span>About</span></a>
        <a href="/pubs" className="button"><span>Publications</span></a>
        <a href="/projects" className="button"><span>Projects</span></a>
        <a href="/" className="button py-0 pt-1">
    			<span>
      				<img src="/images/Logo.svg" alt="Logo" className="h-14 w-16 block" />
    			</span>
  		</a>        	
        <a href="/merch" className="button"><span>Merch</span></a>
		<a href="/contact" className="button"><span>Contact</span></a>
        <a href="/pdfs/Engineering Resume - Kieron von Buchstab.pdf" target="_blank" rel="noopener noreferrer" className="button"><span>Resume</span></a>
      	</nav>
      	<div 
      	className="absolute bottom-[-5.8rem] left-8 right-8 h-[5px] bg-accent"
	style={{
		borderRadius: "1rem"
	}}></div>
    	</div>

      {/* Mobile Hamburger Menu */}
      <nav className="absolute z-20 w-full bg-background p-[1rem] flex items-center justify-between md:hidden">
        <button onClick={toggleMenu}>
          <img src="/images/hamburger-icon.svg" alt="Menu" className="h-[5vh]" />
        </button>
      </nav>

      {/* Mobile Menu Drawer */}
      <div className={`absolute top-0 left-0 w-3/4 h-screen bg-background z-20 p-8 shadow-lg transform transition-transform duration-300 ease-in-out flex flex-col ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <div className="flex justify-between">
            <a href="/" className="button">
              <span>
                <img src="/images/Logo.svg" alt="Logo" className="h-[6vh] w-[6vh]" />
              </span>
            </a>
            <button className="button" onClick={toggleMenu}>
              <span>
                <img src="/images/close.svg" alt="Close" className="h-[5vh] w-[5vh]" />
              </span>
            </button>
          </div>
          <a href="/about" className="button text-left text-2xl"><span>About</span></a>
          <a href="/pubs" className="button text-left text-2xl"><span>Publications</span></a>
          <a href="/projects" className="button text-left text-2xl"><span>Projects</span></a>
          <a href="/merch" className="button text-left text-2xl"><span>Merch</span></a>
          <a href="/contact" className="button text-left text-2xl"><span>Contact</span></a>
          <a href="/pdfs/Engineering Resume - Kieron von Buchstab.pdf" target="_blank" rel="noopener noreferrer" className="button text-left text-2xl"><span>Resume</span></a>
        </div>
    </div>
  );
}

