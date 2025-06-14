"use client";

import Navbar from "../components/Navbar";
import Circle from "../components/Circle";
import Title from "../components/Title";
import dynamic from "next/dynamic";

const Head = dynamic(() => import("../components/Head"), {
	ssr:false,
});

export default function Home() {
  return (
	  <main className="">
    <div className="hidden md:block">
      <Navbar />
    </div>
	  
      <section className="relative flex h-auto md:h-screen w-full overflow-hidden">
        <div className="hidden xl:block flex w-full"></div>
        {/* On mobile, align top with extra padding; on md+, center with smaller padding */}
        <div className="flex w-full items-start justify-center pt-[10vh] md:items-center md:pt-[5vh]">
	 	 	<div className="relative flex w-[40vh] md:w-[50vh] 2xl:w-[60vh] aspect-square items-center justify-center">
	  			<Circle />
	  			<Head />
				<Title />
	  		</div>
		</div>
	  	<h1 className="absolute flex hidden xl:block p-standard absolute bottom-0 left-0 text-[20vw] 2xl:text-[25vh] leading-[0.7] tracking-[-0.05em] font-headings">
	  		Kieron <br></br> von Buchstab
	  	</h1>
	  </section>
    <nav className="md:hidden bg-background px-standard pt-4 pb-8 flex flex-col space-y-4">
      <a href="/about" className="button text-left text-2xl"><span>About</span></a>
      <a href="/pubs" className="button text-left text-2xl"><span>Publications</span></a>
      <a href="/contact" className="button text-left text-2xl"><span>Contact</span></a>
      <a href="/pdfs/Engineering Resume - Kieron von Buchstab.pdf" target="_blank" rel="noopener noreferrer" className="button text-left text-2xl"><span>Resume</span></a>
    </nav>
  </main>
  );
}
