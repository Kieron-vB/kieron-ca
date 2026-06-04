"use client";

import Navbar from "@/components/Navbar";

export default function About() {
	return (
		<main className="bg-background">
		<Navbar />
		<section className="pt-[7rem] px-standard">
			<h1 className="text-[10vw] font-headings leading-tight tracking-tight text-text">
				About
			</h1>
			<div className="flex flex-wrap 2xl:flex-nowrap gap-x-[3vw] gap-y-[5vh] md:gap-y-[8vh] items-start">
				<p className="flex-l sm:max-w-[100vw] 2xl:max-w-[50vw] pt-standard font-body leading-paragraph tracking-paragraph text-text text-mobile lg:text-desktop">
				Kieron von Buchstab is many things. He's an <span title="don't tell P Eng Ontario I said this"><u>engineer</u></span>, a developer, a hobbyist, a lobbyist, a freelance lobotomist, and a part time rocket scientist. He likes his coffee black and his tea green, however he doesn't handle caffeine very well. In his free time he enjoys writing, camping, and taking long walks on the beach. Kieron graduated from Carleton University in 2026 with a degree in Aerospace Engineering. He now works for ______________.
				</p>
				<div className="flex-col self-center w-full" style={{ transform: 'rotate(5deg)' }}>
					<img
						src="/images/snowman.jpg"
						alt="Kieron building a snowman"
						className="w-full h-auto items-center rounded-lg shadow-md"
					/>
					<p className="font-writing text-mobile w-full text-center">
						Kieron also likes building snowmen
					</p>
				</div>
			</div>
		</section>
		</main>
	);
}
