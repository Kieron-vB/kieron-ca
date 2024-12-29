

"use client";

import React from 'react';
import Link from 'next/link';

export default function Navbar() {
	return (
		<nav className="bg-background flex justify-between">
			<button className="button">About</button>
			<button className="button">Publications</button>
			<button className="button">Logo</button>
			<button className="button">Contact</button>
			<button className="button">Resume</button>
		</nav>
	);
}
// Placeholder Navbar content here

