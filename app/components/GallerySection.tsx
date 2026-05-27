"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";

const galleryImages = [
  { src: "/images/gallery/DJI_0517.jpg", alt: "Aerial view 1", className: "" },
  { src: "/images/gallery/DJI_0545.jpg", alt: "Aerial view 2", className: "" },
  { src: "/images/gallery/DJI_0547.jpg", alt: "Aerial view 3", className: "" },
  { src: "/images/gallery/DJI_0560.jpg", alt: "Aerial view 4", className: "md:col-span-2" },
  { src: "/images/gallery/DSC01598.jpg", alt: "Villa photo 1", className: "" },
  { src: "/images/gallery/DSC01671.jpg", alt: "Villa photo 2", className: "" },
  { src: "/images/gallery/DSC01797.jpg", alt: "Villa photo 3", className: "md:col-span-2" },
  { src: "/images/gallery/DSC01915.jpg", alt: "Villa photo 4", className: "md:row-span-2" },
  { src: "/images/gallery/DSC02490.jpg", alt: "Villa photo 5", className: "" },
  { src: "/images/gallery/FB_IMG_1693050041351-1.jpg", alt: "Villa photo 6", className: "" },
  { src: "/images/gallery/DSC01663.jpg", alt: "Villa bedroom", className: "md:col-span-2" },
];

function Lightbox({
  index,
  onClose,
  onPrev,
  onNext,
}: {
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const img = galleryImages[index];

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose, onPrev, onNext]);

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/90 p-4"
      onClick={onClose}
    >
      {/* Close */}
      <button
        className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors z-10"
        onClick={onClose}
        aria-label="Close"
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Image + nav row — centered as one unit */}
      <div
        className="flex items-center justify-center w-full max-w-5xl gap-3"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Prev */}
        <button
          className="flex-shrink-0 text-white/80 hover:text-white transition-colors"
          onClick={onPrev}
          aria-label="Previous"
        >
          <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Image */}
        <div className="relative flex-1" style={{ height: "80vh" }}>
          <Image
            src={img.src}
            alt={img.alt}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 80vw"
            priority
          />
        </div>

        {/* Next */}
        <button
          className="flex-shrink-0 text-white/80 hover:text-white transition-colors"
          onClick={onNext}
          aria-label="Next"
        >
          <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Counter */}
      <div className="mt-4 text-white/60 text-sm">
        {index + 1} / {galleryImages.length}
      </div>
    </div>,
    document.body
  );
}

export default function GallerySection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handlePrev = useCallback(() =>
    setActiveIndex((i) => (i === null ? null : (i - 1 + galleryImages.length) % galleryImages.length)),
    []
  );

  const handleNext = useCallback(() =>
    setActiveIndex((i) => (i === null ? null : (i + 1) % galleryImages.length)),
    []
  );

  return (
    <section className="py-24 px-4 bg-stone-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="inline-block text-secondary text-sm font-semibold tracking-widest uppercase mb-3">
            Our Accommodation
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            THANN Pool Villa - ธันน์
          </h2>
          <p className="text-secondary text-lg max-w-xl mx-auto">
            A serene retreat nestled in the lush hills of Khaoyai
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[160px] md:auto-rows-[220px]">
          {galleryImages.map((img, i) => (
            <div
              key={i}
              className={`relative overflow-hidden rounded-2xl group cursor-pointer ${img.className}`}
              onClick={() => setActiveIndex(i)}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 rounded-2xl" />
            </div>
          ))}
        </div>
      </div>

      {activeIndex !== null && (
        <Lightbox
          index={activeIndex}
          onClose={() => setActiveIndex(null)}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      )}
    </section>
  );
}
