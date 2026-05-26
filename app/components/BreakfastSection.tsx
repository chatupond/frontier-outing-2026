import Image from "next/image";

export default function BreakfastSection() {
  return (
    <section className="flex flex-col md:flex-row-reverse min-h-[600px]">
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
      <div className="w-full md:w-1/2 bg-amber-50 flex items-center">
        <div className="px-10 py-16 md:px-16 max-w-xl">
          <span className="inline-block text-amber-600 text-sm font-semibold tracking-widest uppercase mb-4">
            Morning
          </span>

          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-2">
            Breakfast
          </h2>
          <p className="text-amber-700 text-lg font-medium mb-2">
            Served by the resort
          </p>

          <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full bg-amber-100 text-amber-800 text-sm font-semibold">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2m6-2a10 10 0 11-20 0 10 10 0 0120 0z" />
            </svg>
            08:00 AM
          </div>

          <p className="text-gray-500 leading-relaxed">
            Start your morning with a freshly prepared breakfast served by
            THANN Pool Villa. Enjoy porridge, fresh fruit, crackers, and warm
            beverages on the terrace as the Khaoyai hills wake up around you.
          </p>
        </div>
      </div>
    </section>
  );
}
