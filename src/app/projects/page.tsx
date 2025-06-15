"use client";

import Navbar from "@/components/Navbar";
import Projects3DCarousel from "@/components/Projects3DCarousel";

export default function Projects() {
  const projects = [
    {
      title: "Project One",
      description: "Description for project one.",
      image: "https://via.placeholder.com/800x400?text=Project+One",
      link: "#",
    },
    {
      title: "Project Two",
      description: "Description for project two.",
      image: "https://via.placeholder.com/800x400?text=Project+Two",
      link: "#",
    },
    {
      title: "Project Three",
      description: "Description for project three.",
      image: "https://via.placeholder.com/800x400?text=Project+Three",
      link: "#",
    },
  ];

  return (
    <main className="bg-background">
      <Navbar />
      <section className="pt-[7rem] px-standard">
        <h1 className="text-[10vw] font-headings leading-tight tracking-tight text-text">
          Projects
        </h1>
        <div className="mt-8">
          <Projects3DCarousel items={projects} />
        </div>
      </section>
    </main>
  );
}