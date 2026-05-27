const amenities = [
  { icon: "🚿", th: "เครื่องทำน้ำอุ่น", en: "Hot Water Shower" },
  { icon: "💨", th: "ไดร์เป่าผม", en: "Hair Dryer" },
  { icon: "🛁", th: "ผ้าเช็ดตัว", en: "Bath Towel" },
  { icon: "🧖", th: "ผ้าเช็ดผม", en: "Hair Towel" },
  { icon: "🧴", th: "ครีมอาบน้ำ", en: "Body Wash" },
  { icon: "🧴", th: "แชมพู", en: "Shampoo" },
  { icon: "💆", th: "ครีมนวดผม", en: "Hair Conditioner" },
  { icon: "🧴", th: "โลชั่นทาผิว", en: "Body Lotion" },
  { icon: "🎩", th: "หมวกคลุมผม", en: "Shower Cap" },
  { icon: "🫙", th: "คอตตอนบัด", en: "Cotton Buds" },
  { icon: "🩱", th: "เสื้อคลุม", en: "Bathrobe" },
];

export default function AmenitiesSection() {
  return (
    <section className="py-20 px-4 bg-secondary">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block text-primary text-sm font-semibold tracking-widest uppercase mb-3">
            In-Room
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            สิ่งอำนวยความสะดวก
          </h2>
          <p className="text-white/60 text-lg">Room Facilities & Amenities</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {amenities.map((item, i) => (
            <div
              key={i}
              className="bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:border-primary/40 transition-all duration-200 p-5 flex flex-col items-center text-center gap-2"
            >
              <span className="text-3xl">{item.icon}</span>
              <span className="text-white font-semibold text-sm leading-tight">{item.th}</span>
              <span className="text-white/50 text-xs">{item.en}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
