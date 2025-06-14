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
    <main className="overflow-hidden md:overflow-auto">
    <div className="hidden md:block">
      <Navbar />
    </div>
	  
      <section className="relative z-10 flex h-auto md:h-screen w-full overflow-visible md:overflow-hidden">
        <div className="hidden xl:block flex w-full"></div>
        {/* On mobile, align top with extra padding; on md+, center with smaller padding */}
        <div className="flex w-full items-start justify-center pt-[12vh] md:items-center md:pt-[5vh]">
          <div
            className="relative flex w-[40vh] md:w-[50vh] 2xl:w-[60vh] aspect-square items-center justify-center xl:cursor-grab xl:active:cursor-grabbing"
          >
            <Circle />
            <Head />
            <Title />
          </div>
		</div>
	  	<h1 className="absolute flex hidden xl:block p-standard absolute bottom-0 left-0 text-[20vw] 2xl:text-[25vh] leading-[0.7] tracking-[-0.05em] font-headings">
	  		Kieron <br></br> von Buchstab
	  	</h1>
	  </section>
    <nav
      className="md:hidden bg-background px-standard pt-4 pb-4 mt-[var(--menu-offset)] flex flex-col space-y-[var(--menu-spacing)]"
      style={{
        '--menu-offset': '11vh',
        '--menu-spacing': '0.8rem',
      } as React.CSSProperties}
    >
      <a href="/about" className="block w-full text-left text-text text-2xl font-buttons border-b border-accent">
        About
      </a>
      <a href="/pubs" className="block w-full text-left text-text text-2xl font-buttons border-b border-accent">
        Publications
      </a>
      <a href="/contact" className="block w-full text-left text-text text-2xl font-buttons border-b border-accent">
        Contact
      </a>
      <a
        href="/pdfs/Engineering Resume - Kieron von Buchstab.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full text-left text-text text-2xl font-buttons border-b border-accent"
      >
        Resume
      </a>
    </nav>
  </main>
  );
}
