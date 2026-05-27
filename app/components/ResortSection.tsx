import Image from "next/image";

export default function ResortSection() {
  return (
    <section id="resort" className="flex flex-col md:flex-row min-h-[600px]">
      {/* Left — image */}
      <div className="relative w-full md:w-1/2 min-h-[400px] md:min-h-[600px]">
        <Image
          src="/images/resort.jpg"
          alt="THANN Pool Villa aerial view"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      {/* Right — info */}
      <div className="w-full md:w-1/2 bg-white flex items-center">
        <div className="px-10 py-16 md:px-16 max-w-xl">
          <span className="inline-block text-secondary text-sm font-semibold tracking-widest uppercase mb-4">
            Our Venue
          </span>

          <h2 className="text-4xl sm:text-5xl font-bold text-secondary leading-tight mb-2">
            THANN Pool Villa
          </h2>
          <p className="text-2xl text-secondary/70 font-medium mb-6">ธันน์</p>

          <p className="text-[#333] leading-relaxed mb-8">
            A luxurious private pool villa nestled amid the lush greenery of
            Khaoyai. Enjoy panoramic mountain views, a private infinity pool,
            and elegant spaces designed for relaxation and togetherness — the
            perfect setting for Frontier&apos;s Outing 2026.
          </p>

          <ul className="space-y-3 mb-10 text-[#333] text-sm">
            {[
              { icon: "🏠", text: "Private villa — exclusive for our team" },
              { icon: "🏊", text: "Infinity swimming pool" },
              { icon: "🌄", text: "Panoramic Khaoyai mountain views" },
              { icon: "📍", text: "Pak Chong, Nakhon Ratchasima" },
            ].map(({ icon, text }) => (
              <li key={text} className="flex items-center gap-3">
                <span className="text-lg">{icon}</span>
                <span>{text}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-3">
            <a
              href="https://maps.app.goo.gl/QaK1t8g739sfXd3A8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-secondary hover:bg-secondary/80 transition-colors text-white text-sm font-medium"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
              Google Maps
            </a>

            <a
              href="https://www.facebook.com/p/THANN-Pool-Villa-%E0%B8%98%E0%B8%B1%E0%B8%99%E0%B8%99%E0%B9%8C-61551403683152/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-secondary/30 hover:border-secondary hover:text-secondary transition-colors text-[#333] text-sm font-medium"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              Facebook Page
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
