"use client";

import React from 'react';

export default function Navbar() {
  return (
    <div className="relative">
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
	}}
	></div>
    </div>
  );
}
