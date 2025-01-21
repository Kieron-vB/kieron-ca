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
	  <Navbar />
	  
	  <section className="relative flex h-screen w-full overflow-hidden">
	  	 <div className="hidden xl:block flex w-full"></div>
		 <div className="flex w-full items-center justify-center pt-[5vh]">
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
	  </main>
  );
}
