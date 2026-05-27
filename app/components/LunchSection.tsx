import Image from "next/image";

export default function LunchSection() {
  return (
    <section className="flex flex-col md:flex-row min-h-[600px]">
      {/* Left — image */}
      <div className="relative w-full md:w-1/2 min-h-[400px] md:min-h-[600px]">
        <Image
          src="/images/lunch.jpg"
          alt="Khrua Nam Tok restaurant"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      {/* Right — info */}
      <div className="w-full md:w-1/2 bg-secondary flex items-center">
        <div className="px-10 py-16 md:px-16 max-w-xl">
          <span className="inline-block text-primary text-sm font-semibold tracking-widest uppercase mb-4">
            Lunch Stop
          </span>

          <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-2">
            Khrua Nam Tok
          </h2>
          <p className="text-2xl text-primary font-medium mb-2">ครัวน้ำตก</p>
          <p className="text-white/50 text-sm font-medium mb-6">
            🕧 12:30
          </p>

          <p className="text-white/70 leading-relaxed mb-8">
            A beloved riverside restaurant perched beside a natural waterfall in
            Saraburi. Enjoy authentic Thai cuisine surrounded by lush jungle
            scenery and the soothing sound of cascading water — the perfect
            midway lunch before arriving at the villa.
          </p>

          <p className="text-white/50 text-xs font-semibold tracking-widest uppercase mb-3">Menu</p>
          <ul className="grid grid-cols-2 gap-x-6 gap-y-2 mb-10 text-white/80 text-sm">
            {[
              "แกงคั่วหอยขม",
              "ต้มยำปลาคัง",
              "หน่อไม้ฝรั่งผัดกุ้ง",
              "หมึกชุบแป้งทอด",
              "ปลากระพงผัดคื่นช่าย",
              "หมูแดดเดียว",
              "ไก่ทอดเกลือ",
              "ลาบเป็ด",
              "ปูนิ่มทอดกระเทียม",
              "ซี่โครงหมูอบยอดผัก",
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                {item}
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-3">
            <a
              href="https://maps.app.goo.gl/Q26iK55pp9NHisQ3A"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary hover:bg-primary/80 transition-colors text-secondary text-sm font-semibold"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
              Google Maps
            </a>

            <a
              href="https://www.wongnai.com/restaurants/82421KE-%E0%B8%84%E0%B8%A3%E0%B8%B1%E0%B8%A7%E0%B8%99%E0%B9%89%E0%B8%B3%E0%B8%95%E0%B8%81"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/20 hover:border-primary hover:text-primary transition-colors text-white/70 text-sm font-medium"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
              Wongnai Reviews
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
