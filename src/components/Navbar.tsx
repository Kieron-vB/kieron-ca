"use client";

import React from 'react';
import Link from 'next/link';
import Logo from "../public/logo.svg";

export default function Navbar() {
	return (
		<nav className="bg-background flex justify-between px-2 py-2">
			<button className="button"><span>About</span></button>
			<button className="button"><span>Publications</span></button>
			<button className="button"><span>
				<img src="/images/globe.svg" alt="Logo" className="h-8 w-8" />
			</span></button>
			<button className="button"><span>Contact</span></button>
			<button className="button"><span>Resume</span></button>
		</nav>
	);
}
// Placeholder Navbar content here

