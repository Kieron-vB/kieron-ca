"use client";

import React from 'react';
import Link from 'next/link';
import Logo from "../public/logo.svg";

export default function Navbar() {
	return (
		<nav className="bg-background flex justify-between px-2 py-2">
			<button className="button"><span>About</span></button>
			<button className="button"><span>Publications</span></button>
			<button className="button py-0"><span>
				<img src="/images/Logo.svg" alt="Logo" className="h-14 w-16 block" />
			</span></button>
			<button className="button"><span>Contact</span></button>
			<button className="button"><span>Resume</span></button>
		</nav>
	);
}
// Placeholder Navbar content here

