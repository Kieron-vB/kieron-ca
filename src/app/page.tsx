"use client";

import Navbar from "../components/Navbar";
import dynamic from "next/dynamic";

const HeadWithCircle = dynamic(() => import("../components/Head"), {
	ssr:false,
});

export default function AboutPage() {
  return (
	  <main className="">
	  <Navbar />
	  <HeadWithCircle />
	  <section className="h-screen w-full overflow-hidden">
	  	<div className="relative h-full">
	  		<h1 className="absolute bottom-0 left-0 text-[15rem] leading-[0.7] tracking-[-0.05em] font-headings p-8">
	  			Kieron <br /> von Buchstab
	  		</h1>
	  	</div>
	  </section>
	  </main>
  );
}
