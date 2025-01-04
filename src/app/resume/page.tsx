"use client";

import Navbar from "@/components/Navbar";

export default function About() {
	return (
		<main className="bg-background">
		<Navbar />
		<section className="pt-[7rem] text-center">
			<h1 className="pl-[2rem] text-[10vw] font-headings leading-tight tracking-tight text-text">
				Resume	
			</h1>
			<div className="flex flex-col p-[2rem] gap-[0rem]">
			<a
		       		href=""
				target="_blank"
				rel="noopener noreferrer"
				className="text-link text-[5vw] font-body hover:underline"
			>
			Engineering Resume
			</a>{" "}
			<a
		       		href=""
				target="_blank"
				rel="noopener noreferrer"
				className="text-link text-[5vw] font-body hover:underline"
			>
			Finance Resume
			</a>{" "}	
			<a
		       		href=""
				target="_blank"
				rel="noopener noreferrer"
				className="text-link text-[5vw] font-body hover:underline"
			>
			Entertainment Resume
			</a>{" "}		
			</div>
		</section>
		</main>
	);
}
