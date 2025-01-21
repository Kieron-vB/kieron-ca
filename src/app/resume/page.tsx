"use client";

import Navbar from "@/components/Navbar";

export default function About() {
	return (
		<main className="bg-background">
		<Navbar />
		<section className="pt-[7rem] text-center">
			<h1 className="text-[10vw] font-headings leading-tight tracking-tight text-text">
				Resume	
			</h1>
			<div className="flex flex-col pt-[4rem] px-standard">
			<a
		       		href="/pdfs/Engineering Resume - Kieron von Buchstab.pdf"
				target="_blank"
				rel="noopener noreferrer"
				className="text-link text-mobile lg:text-desktop font-body hover:underline"
			>
			Engineering Resume
			</a>{" "}
			<a
		       		href="/pdfs/Finance Resume - Kieron von Buchstab.pdf"
				target="_blank"
				rel="noopener noreferrer"
				className="text-link text-mobile lg:text-desktop font-body hover:underline"
			>
			Finance Resume
			</a>{" "}	
			<a
		       		href="/pdfs/Entertainment Resume - Kieron von Buchstab.pdf"
				target="_blank"
				rel="noopener noreferrer"
				className="text-link text-mobile lg:text-desktop font-body hover:underline"
			>
			Entertainment Resume
			</a>{" "}		
			</div>
		</section>
		</main>
	);
}
