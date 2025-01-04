"use client";

import Navbar from "@/components/Navbar";

export default function About() {
	return (
		<main className="bg-background">
		<Navbar />
		<section className="pt-[7rem] pl-[2rem]">
			<h1 className="text-[10vw] font-headings leading-tight tracking-tight text-text">
				About
			</h1>
			<div className="flex flex-wrap gap-[10rem]">
			<p className="max-w-3xl pt-[2rem] font-body leading-[1.0] tracking-[-0.03em] text-text text-[2.5vw]">
				Kieron von Buchstab is many things. He's a student, a developer, a hobbyist, a lobbyist, a freelance lobotomist, and a part time rocket scientist. He likes his coffee black, his tea green, and currently his favorite animal is the tree kangaroo. In his free time he enjoys writing, programming, and camping. He's currently in his third year of aerospace engineering at Carleton University but might drop out if he gets bored or something more fun comes up.
			</p>
			<div className="flex flex-col relative" style={{ transform: 'rotate(5deg)' }}
>
			<img
				src="/images/snowman.jpg"
				alt="Kieron building a snowman"
				className="flex items-center w-[50rem] rounded-lg shadow-md"
			/>
			<p 
				className="absolute font-writing text-[1.25vw] left-[8rem] w-full text-center"
				style= {{ bottom: '1rem' }}
			>
				Kieron also likes building snowmen
			</p>
			</div>
			</div>
		</section>
		</main>
	);
}
