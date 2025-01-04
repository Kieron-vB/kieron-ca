"use client";

import Navbar from "../components/Navbar";
import Circle from "../components/Circle";
import dynamic from "next/dynamic";

const Head = dynamic(() => import("../components/Head"), {
	ssr:false,
});

export default function Home() {
  return (
	  <main className="">
	  <Navbar />
	  <Circle />
	  <Head />
	  <section className="h-screen w-full overflow-hidden">
	  	<div className="relative h-full">
	  		<h1 className="absolute bottom-0 left-0 text-[15rem] leading-tight tracking-tight font-headings p-8">
	  			Kieron <br /> von Buchstab
	  		</h1>
	  	</div>
	  </section>
	  </main>
  );
}
