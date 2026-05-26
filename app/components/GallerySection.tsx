"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";

const galleryImages = [
  { src: "/images/gallery/DJI_0517.jpg", alt: "Aerial view 1", className: "" },
  { src: "/images/gallery/DJI_0545.jpg", alt: "Aerial view 2", className: "" },
  { src: "/images/gallery/DJI_0547.jpg", alt: "Aerial view 3", className: "" },
  { src: "/images/gallery/DJI_0560.jpg", alt: "Aerial view 4", className: "col-span-2" },
  { src: "/images/gallery/DSC01598.jpg", alt: "Villa photo 1", className: "" },
  { src: "/images/gallery/DSC01671.jpg", alt: "Villa photo 2", className: "" },
  { src: "/images/gallery/DSC01797.jpg", alt: "Villa photo 3", className: "col-span-2" },
  { src: "/images/gallery/DSC01915.jpg", alt: "Villa photo 4", className: "row-span-2" },
  { src: "/images/gallery/DSC02490.jpg", alt: "Villa photo 5", className: "" },
  { src: "/images/gallery/FB_IMG_1693050041351-1.jpg", alt: "Villa photo 6", className: "" },
  { src: "/images/gallery/DSC01663.jpg", alt: "Villa bedroom", className: "col-span-2" },
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

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
      onClick={onClose}
    >
      {/* Close */}
      <button
        className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
        onClick={onClose}
        aria-label="Close"
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Prev */}
      <button
        className="absolute left-4 text-white/80 hover:text-white transition-colors"
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        aria-label="Previous"
      >
        <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Image */}
      <div
        className="relative w-full max-w-5xl mx-16"
        style={{ height: "80vh" }}
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={img.src}
          alt={img.alt}
          fill
          className="object-contain"
          sizes="100vw"
          priority
        />
      </div>

      {/* Next */}
      <button
        className="absolute right-4 text-white/80 hover:text-white transition-colors"
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        aria-label="Next"
      >
        <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Counter */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/60 text-sm">
        {index + 1} / {galleryImages.length}
      </div>
    </div>
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
          <span className="inline-block text-amber-600 text-sm font-semibold tracking-widest uppercase mb-3">
            Our Accommodation
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            THANN Pool Villa - ธันน์
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            A serene retreat nestled in the lush hills of Khaoyai
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[220px]">
          {galleryImages.map((img, i) => (
            <div
              key={i}
              className={`relative overflow-hidden rounded-2xl group cursor-pointer ${img.className}`}
              style={{ minHeight: "220px" }}
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
