import Image from "next/image";

const menu = [
  "คอหมูย่าง",
  "สามชั้นคั่วพริกเกลือ",
  "กะหล่ำปลีทอดน้ำปลา",
  "ปลาหมึกผัดไข่เค็ม",
  "แขนงหมูกรอบ",
  "ส้มตำกุ้งสด ปลาร้า",
  "ส้มตำไทย ไข่เค็ม",
  "ต้มยำกุ้ง น้ำข้น",
  "ยำไข่ดาว",
];

export default function DinnerSection() {
  return (
    <section className="flex flex-col md:flex-row min-h-[600px]">
      {/* Left — image */}
      <div className="relative w-full md:w-1/2 min-h-[400px] md:min-h-[600px]">
        <Image
          src="/images/dinner.jpg"
          alt="Dinner buffet at THANN Pool Villa"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      {/* Right — info */}
      <div className="w-full md:w-1/2 bg-secondary flex items-center">
        <div className="px-10 py-16 md:px-16 max-w-xl">
          <span className="inline-block text-primary text-sm font-semibold tracking-widest uppercase mb-4">
            Dinner
          </span>

          <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-2">
            ล้านริมน้ำ
          </h2>
          <p className="text-primary text-lg font-medium mb-2">
            Poolside dinner at the villa
          </p>
          <p className="text-white/60 text-sm font-medium mb-6">
            🕕 18:00
          </p>

          <p className="text-white/70 leading-relaxed mb-8">
            An evening feast served right by the pool as the sun sets over
            Khaoyai. Enjoy a spread of authentic Thai dishes with the whole
            team under the open sky.
          </p>

          <p className="text-white/60 text-xs font-semibold tracking-widest uppercase mb-3">
            Menu
          </p>
          <ul className="grid grid-cols-2 gap-x-6 gap-y-2 text-white/90 text-sm">
            {menu.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
