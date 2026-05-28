"use client";

import { useEffect, useRef, useState } from "react";

export default function TypingText({
  text,
  className,
  speed = 35,
}: {
  text: string;
  className?: string;
  speed?: number;
}) {
  const [displayed, setDisplayed] = useState("");
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) clearInterval(interval);
    }, speed);
    return () => clearInterval(interval);
  }, [started, text, speed]);

  return (
    <span ref={ref} className={className}>
      {displayed}
      {displayed.length < text.length && (
        <span className="animate-pulse opacity-70">|</span>
      )}
    </span>
  );
}
