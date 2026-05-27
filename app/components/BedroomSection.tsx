"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

interface Room {
  id: number;
  floor: string;
  members: string[];
  image: string;
}

const rooms: Room[] = [
  {
    id: 1,
    floor: "2nd Floor",
    image: "/images/room1.JPG",
    members: ["Khim Siwanun", "Praew Pinitpon", "G Sajeesuda", "Opor Danaya"],
  },
  {
    id: 2,
    floor: "2nd Floor",
    image: "/images/room2.JPG",
    members: ["Zai Pattamaporn", "Mook Chonlakan", "Ploy Thanawan", "Aome Dolyarat"],
  },
  {
    id: 3,
    floor: "3rd Floor",
    image: "/images/room3.JPG",
    members: ["Team Suparerk", "Fair Thanawat", "Bank Niphatsin", "Tong Chatuporn"],
  },
  {
    id: 4,
    floor: "3rd Floor",
    image: "/images/room4.JPG",
    members: [
      "Lin Chawakorn",
      "Toei Nattawoot",
      "Eth Chonlasai",
      "Fei Ratshasit",
      "Big Gergchai",
      "Poom Wutthidech",
      "Sun Sarin",
      "Fluke Sattra",
    ],
  },
  {
    id: 5,
    floor: "3rd Floor",
    image: "/images/room5.JPG",
    members: ["Golf Naruepan", "Bump Dolwijit", "Ken Ken"],
  },
  {
    id: 6,
    floor: "3rd Floor",
    image: "/images/room6.JPG",
    members: ["Gun Pongsagarn", "Boy Thanapong", "Tan Nititorn", "Boss Teerapong", "Thanakorn Amnajsatit"],
  },
];

const floorColors: Record<string, string> = {
  "2nd Floor": "bg-primary/20 text-secondary",
  "3rd Floor": "bg-secondary/10 text-secondary",
};

function RoomCard({ room, onImageClick }: { room: Room; onImageClick: (room: Room) => void }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col">
      <div
        className="relative h-48 overflow-hidden cursor-zoom-in"
        onClick={() => onImageClick(room)}
      >
        <Image
          src={room.image}
          alt={`Room ${room.id}`}
          fill
          className="object-cover transition-transform duration-500 hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        <div className="absolute bottom-3 left-3 flex items-center gap-2">
          <span className="bg-white/90 backdrop-blur-sm text-gray-800 font-bold text-sm px-3 py-1 rounded-full">
            Room {room.id}
          </span>
          <span
            className={`text-xs font-medium px-2.5 py-1 rounded-full backdrop-blur-sm ${floorColors[room.floor]}`}
          >
            {room.floor}
          </span>
        </div>
        <div className="absolute top-3 right-3 bg-black/40 backdrop-blur-sm rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
          </svg>
        </div>
      </div>

      <div className="p-5 flex-1">
        <div className="flex items-center justify-between mb-3">
          <span className="text-gray-400 text-xs font-medium uppercase tracking-wide">
            Guests
          </span>
          <span className="text-gray-400 text-xs">
            {room.members.length} {room.members.length === 1 ? "person" : "people"}
          </span>
        </div>
        <ul className="space-y-1.5">
          {room.members.map((member, i) => (
            <li key={i} className="flex items-center gap-2.5">
              <div className="w-6 h-6 rounded-full bg-gradient-to-br from-primary/20 to-secondary/10 flex items-center justify-center flex-shrink-0 text-xs">
                {member.charAt(0)}
              </div>
              <span className="text-gray-700 text-sm font-medium">{member}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

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
  onGoTo: (i: number) => void;
}) {
  const room = rooms[index];

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose, onPrev, onNext]);

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/80 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors z-10"
        aria-label="Close"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Modal */}
      <div
        className="flex flex-col md:flex-row w-full max-w-5xl max-h-[85vh] rounded-2xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Image + prev/next */}
        <div className="relative flex-1 bg-black flex items-center justify-center min-h-0">
          <Image
            src={room.image}
            alt={`Room ${room.id}`}
            width={2000}
            height={2000}
            className="w-full h-auto max-h-[85vh] object-contain"
            sizes="(max-width: 768px) 100vw, 70vw"
            priority
          />
          {/* Prev */}
          <button
            onClick={onPrev}
            className="absolute left-3 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
            aria-label="Previous room"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          {/* Next */}
          <button
            onClick={onNext}
            className="absolute right-3 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
            aria-label="Next room"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Guest list */}
        <div className="w-full md:w-64 bg-white flex flex-col p-6 overflow-y-auto">
          <div className="mb-4">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-gray-900 font-bold text-xl">Room {room.id}</span>
              <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${floorColors[room.floor]}`}>
                {room.floor}
              </span>
            </div>
            <p className="text-gray-400 text-xs uppercase tracking-wide">
              {room.members.length} {room.members.length === 1 ? "guest" : "guests"}
            </p>
          </div>
          <ul className="space-y-2 flex-1">
            {room.members.map((member, i) => (
              <li key={i} className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary/20 to-secondary/10 flex items-center justify-center flex-shrink-0 text-sm font-medium text-gray-700">
                  {member.charAt(0)}
                </div>
                <span className="text-gray-700 text-sm font-medium">{member}</span>
              </li>
            ))}
          </ul>
          {/* Pagination dots */}
          <div className="flex justify-center gap-1.5 pt-4 border-t border-gray-100 mt-4">
            {rooms.map((_, i) => (
              <button
                key={i}
                onClick={() => onGoTo(i)}
                className={`w-2 h-2 rounded-full transition-all ${
                  i === index ? "bg-secondary w-4" : "bg-secondary/20"
                }`}
                aria-label={`Room ${i + 1}`}
              />
            ))}
          </div>
          <p className="text-center text-gray-400 text-xs mt-2">{index + 1} / {rooms.length}</p>
        </div>
      </div>
    </div>,
    document.body
  );
}

export default function BedroomSection() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handlePrev = () =>
    setSelectedIndex((i) => (i === null ? null : (i - 1 + rooms.length) % rooms.length));
  const handleNext = () =>
    setSelectedIndex((i) => (i === null ? null : (i + 1) % rooms.length));

  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="inline-block text-secondary text-sm font-semibold tracking-widest uppercase mb-3">
            Where You Sleep
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Bedroom Assignments
          </h2>
          <p className="text-secondary text-lg max-w-xl mx-auto">
            Six beautiful rooms, each with its own charm
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {rooms.map((room, i) => (
            <RoomCard key={room.id} room={room} onImageClick={() => setSelectedIndex(i)} />
          ))}
        </div>
      </div>

      {selectedIndex !== null && (
        <Lightbox
          index={selectedIndex}
          onClose={() => setSelectedIndex(null)}
          onPrev={handlePrev}
          onNext={handleNext}
          onGoTo={setSelectedIndex}
        />
      )}
    </section>
  );
}
