
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
      	<nav className="absolute z-10 w-full bg-background flex justify-between px-8 py-2">
       		<button className="button"><span>About</span></button>
       		<button className="button"><span>Publications</span></button>
      		<button className="button py-0">
         		 <span>
          		 	<img src="/images/Logo.svg" alt="Logo" className="h-14 w-16 block" />
         		 </span>
        	</button>
        	<button className="button"><span>Contact</span></button>
        	<button className="button"><span>Resume</span></button>
      	</nav>
      	<div 
      	className="absolute bottom-[-5.5rem] left-8 right-8 h-[5px] bg-accent"
	style={{
		borderRadius: "1rem"
	}}></div>
    	</div>

      {/* Mobile Hamburger Menu */}
      <nav className="absolute z-10 w-full bg-background p-[1rem] flex items-center justify-between md:hidden">
        <button onClick={toggleMenu}>
          <img src="/images/hamburger-icon.svg" alt="Menu" className="h-[5vh]" />
        </button>
      </nav>

      {/* Mobile Menu Drawer */}
      {isMenuOpen && (
        <div className="absolute top-0 left-0 w-3/4 h-screen bg-background z-20 p-8 shadow-lg transform transition-transform duration-300 ease-in-out flex flex-col">
	  <div className={"flex justify-between"}>
          	<button className="button">
			<span>
            		<img src="/images/Logo.svg" alt="Close" className="h-[6vh] w-[6vh]" />
			</span>
          	</button>
		<button className="button" onClick={toggleMenu}>
			<span>
            		<img src="/images/close.svg" alt="Close" className="h-[5vh] w-[5vh]" />
			</span>
          	</button>
	  </div>
          <button className="button text-left text-2xl"><span>About</span></button>
          <button className="button text-left text-2xl"><span>Publications</span></button>
          <button className="button text-left text-2xl"><span>Contact</span></button>
          <button className="button text-left text-2xl"><span>Resume</span></button>
        </div>
      )}
    </div>
  );
}

