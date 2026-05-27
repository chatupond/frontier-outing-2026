import Image from "next/image";

export default function BreakfastSection() {
  return (
    <section className="flex flex-col md:flex-row min-h-[600px]">
      {/* Right — image */}
      <div className="relative w-full md:w-1/2 min-h-[400px] md:min-h-[600px]">
        <Image
          src="/images/breakfast.jpg"
          alt="Breakfast at THANN Pool Villa"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      {/* Left — info */}
      <div className="w-full md:w-1/2 bg-secondary/5 flex items-center">
        <div className="px-10 py-16 md:px-16 max-w-xl">
          <span className="inline-block text-secondary text-sm font-semibold tracking-widest uppercase mb-4">
            Morning
          </span>

          <h2 className="text-4xl sm:text-5xl font-bold text-secondary leading-tight mb-2">
            Breakfast
          </h2>
          <p className="text-secondary/70 text-lg font-medium mb-2">
            Served by the resort
          </p>

          <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full bg-primary/20 text-secondary text-sm font-semibold">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2m6-2a10 10 0 11-20 0 10 10 0 0120 0z" />
            </svg>
            08:00 AM
          </div>

          <p className="text-[#333] leading-relaxed mb-8">
            Start your morning with a freshly prepared breakfast served by
            THANN Pool Villa. Enjoy porridge, fresh fruit, crackers, and warm
            beverages on the terrace as the Khaoyai hills wake up around you.
          </p>

          <p className="text-secondary/50 text-xs font-semibold tracking-widest uppercase mb-3">Menu</p>
          <ul className="grid grid-cols-2 gap-x-6 gap-y-2 text-[#333] text-sm">
            {["ข้าวต้มหมูสับ", "กาแฟ", "โอวัลติน", "ขนมปัง", "ผลไม้"].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary/40 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
