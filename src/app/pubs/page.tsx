

"use client";

import Navbar from "@/components/Navbar";
// import Publications3DCarousel from "@/components/Publications3DCarousel";

const publications = [
  { title: "Commercial Off The Shelf Ground Stations For Use in Rapid Testing and Innovation of Space Systems", pdf: "/pdfs/Commercial Off The Shelf Ground Stations For Use in Rapid Testing and Innovation of Space Systems.pdf" },
  { title: "CubeSat Constellations for Use in Hurricane Prediction", pdf: "/pdfs/CubeSat Constellations for Use in Hurricane Prediction.pdf" },
  { title: "Design, Verification, and Validation of the Communication System of an Undergraduate CubeSat Mission", pdf: "/pdfs/Design, Verification, and Validation of the Communication System of an Undergraduate CubeSat Mission.pdf" },
  { title: "The Development of an Undergraduate Ground Station Project for Space Education", pdf: "/pdfs/The Development of an Undergraduate Ground Station Project for Space Education.pdf" },
  { title: "The Importance of Lunar Telecommunications and its Use in Lunar Exploration", pdf: "/pdfs/The Importance of Lunar Telecommunications and its Use in Lunar Exploration.pdf" },
  { title: "The Receipt and Analysis of Weather Data in a Simulated Martian Environment", pdf: "/pdfs/The Receipt and Analysis of Weather Data in a Simulated Martian Environment.pdf" },
];
const icons = [
  "🛰️",
  "🌪️",
  "🛠️",
  "🎓",
  "🌕",
  "🔴",
];

export default function Publications() {
  return (
    <main className="bg-background">
      <Navbar />
      <section className="py-[7rem] text-center">
        <h1 className="text-[10vw] font-headings leading-tight tracking-tight text-text">
          Publications
        </h1>
        <ul className="flex flex-col pt-[4rem] px-standard text-left space-y-12">
          {publications.map((pub, index) => (
            <li key={index}>
              <a
                href={pub.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center space-x-4 overflow-visible"
              >
                <span className="text-2xl lg:text-3xl">{icons[index]}</span>
                <span className="text-link text-mobile lg:text-desktop font-body leading-[0.9] transform origin-left transition-transform duration-200 group-hover:scale-105">
                  {pub.title}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

