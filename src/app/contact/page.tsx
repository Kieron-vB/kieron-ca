"use client";

import Navbar from "@/components/Navbar";

export default function About() {
	return (
		<main className="bg-background">
		<Navbar />
		<section className="pt-[7rem]">
			<h1 className="px-standard text-[10vw] font-headings leading-tight tracking-tight text-text">
				Contact
			</h1>
			<div className="flex flex-wrap gap-[10rem]">
			<p className="text-center w-full pt-[4rem] px-standard font-body leading-paragraph tracking-paragraph text-text text-mobile lg:text-desktop">
				Kieron doesn't have any <span Title="Linkedin doesn't count"><u>social media</u></span>. If you want to contact Kieron about business propositions, top secret missions, his stance on magicians, or a personal admission you can email him at <span className="text-link"> kieron@kieron.ca</span>.			</p>
			</div>
		</section>
		</main>
	);
}
