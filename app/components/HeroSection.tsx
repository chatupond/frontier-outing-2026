"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const FULL_TEXT = "Team outing getaway together <3";

export default function HeroSection() {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setDisplayed(FULL_TEXT.slice(0, i));
      if (i >= FULL_TEXT.length) {
        clearInterval(interval);
        setDone(true);
      }
    }, 45);
    return () => clearInterval(interval);
  }, []);
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

     

        <p className="text-2xl sm:text-3xl md:text-4xl font-light max-w-2xl mx-auto leading-relaxed drop-shadow text-primary">
          {displayed}
          {!done && <span className="animate-pulse">|</span>}
        </p>

        <div className={`mt-10 flex flex-wrap gap-4 justify-center transition-all duration-700 ${done ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          <div className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-secondary font-semibold text-sm">
            <span>📍</span>
            <span>June 6–7, 2026</span>
          </div>
          <div className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-secondary font-semibold text-sm">
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
