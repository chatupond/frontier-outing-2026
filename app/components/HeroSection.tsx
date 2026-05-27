"use client";

import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      <Image
        src="/images/hero.jpg"
        alt="THANN Pool Villa Khaoyai"
        fill
        className="object-cover object-center"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black/85" />

      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">

        <div className="flex justify-center mb-4">
          <Image
            src="/images/logo.png"
            alt="Frontier's Outing Logo"
            width={520}
            height={360}
            className="drop-shadow-2xl animate-bounce-slow"
            priority
          />
        </div>

     

        <p className="text-2xl sm:text-3xl md:text-4xl text-white/85 font-light max-w-2xl mx-auto leading-relaxed drop-shadow">
          <span className="text-primary">2026</span> - Team outing getaway together &lt;3{" "}
         
        </p>

        <div className="mt-10 flex flex-wrap gap-4 justify-center">
          <div className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm">
            <span>📍</span>
            <span>June 6–7, 2026</span>
          </div>
          <div className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm">
            <span>👥</span>
            <span>29 Team Members</span>
          </div>
          
        </div>

        <button
          className="mt-14 animate-bounce block mx-auto"
          onClick={() => document.getElementById("resort")?.scrollIntoView({ behavior: "smooth" })}
          aria-label="Scroll to next section"
        >
          <svg
            className="w-6 h-6 mx-auto text-white/60"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      </div>
    </section>
  );
}
