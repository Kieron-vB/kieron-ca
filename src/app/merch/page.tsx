"use client";

import Navbar from "@/components/Navbar";

export default function Merch() {
  return (
    <main className="bg-background">
      <Navbar />
      <section className="pt-[7rem] px-standard">
        <h1 className="text-[10vw] font-headings leading-tight tracking-tight text-text">
          Merch
        </h1>
        <p className="pt-standard font-body leading-paragraph tracking-paragraph text-text text-mobile lg:text-desktop">
          {/* Merchandise coming soon. */}
          Check out my merch coming soon!
        </p>
      </section>
    </main>
  );
}