interface ScheduleItem {
  time: string;
  title: string;
  icon: string;
  detail?: string;
}

interface DaySchedule {
  day: string;
  date: string;
  items: ScheduleItem[];
}

const schedule: DaySchedule[] = [
  {
    day: "Day 1",
    date: "Saturday, June 6",
    items: [
      {
        time: "12:30",
        title: "Lunch together",
        detail: "กินอาหารกลางวัน ที่ร้านอาหารครัวน้ำตก",
        icon: "🍽️",
      },
      {
        time: "14:30",
        title: "Check-in",
        detail: "เช็คอินที่พัก THANN Pool Villa",
        icon: "🏨",
      },
      {
        time: "18:00",
        title: "Dinner",
        detail: "ริมสระที่พัก อาหารจากร้าน ล้านริมน้ำ",
        icon: "🥘",
      },
      {
        time: "20:00",
        title: "Free Time & Relaxation",
        detail: "เล่นน้ำ/เกมส์/drink",
        icon: "🌙",
      },
    ],
  },
  {
    day: "Day 2",
    date: "Sunday, June 7",
    items: [
      {
        time: "08:00",
        title: "Breakfast",
        detail: "อาหารเช้าจากที่พัก",
        icon: "☕",
      },
      {
        time: "10:00",
        title: "Shower & Pack Luggage",
        detail: "เตรียมตัวเดินทางกลับ",
        icon: "🧳",
      },
      {
        time: "11:45",
        title: "Group Photo Session",
        detail: "ถ่ายรูปร่วมกัน",
        icon: "📸",
      },
      {
        time: "12:00",
        title: "Check-out",
        detail: "ออกจากที่พัก",
        icon: "👋",
      },
    ],
  },
];

function TimelineItem({
  item,
  isLast,
}: {
  item: ScheduleItem;
  isLast: boolean;
}) {
  return (
    <div className="flex gap-4 group">
      <div className="flex flex-col items-center">
        <div className="w-11 h-11 rounded-full bg-white shadow-md border border-secondary/20 flex items-center justify-center text-xl flex-shrink-0 group-hover:scale-110 transition-transform duration-200">
          {item.icon}
        </div>
        {!isLast && <div className="w-0.5 flex-1 mt-2 bg-secondary/10 min-h-8" />}
      </div>

      <div className="pb-8 flex-1 min-w-0">
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
          <div className="flex items-start justify-between gap-2 flex-wrap">
            <div>
              <p className="font-semibold text-gray-900 text-base">
                {item.title}
              </p>
              {item.detail && (
                <p className="text-[#333] text-sm mt-0.5">{item.detail}</p>
              )}
            </div>
            <span className="flex-shrink-0 text-sm font-bold text-secondary bg-primary/20 px-3 py-1 rounded-full">
              {item.time}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function DayBlock({ day }: { day: DaySchedule }) {
  return (
    <div className="flex-1 min-w-0">
      <div className="flex items-center gap-3 mb-6">
        <div className="px-4 py-2 rounded-2xl bg-secondary text-primary font-bold text-sm">
          {day.day}
        </div>
        <span className="text-gray-400 text-sm font-medium">{day.date}</span>
      </div>

      <div>
        {day.items.map((item, i) => (
          <TimelineItem key={i} item={item} isLast={i === day.items.length - 1} />
        ))}
      </div>
    </div>
  );
}

export default function ScheduleSection() {
  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <span className="inline-block text-secondary text-sm font-semibold tracking-widest uppercase mb-3">
            Itinerary
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Trip Schedule
          </h2>
          <p className="text-secondary text-lg max-w-xl mx-auto">
            Two days packed with food, fun, and unforgettable moments
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 md:gap-12">
          {schedule.map((day, i) => (
            <DayBlock key={i} day={day} />
          ))}
        </div>
      </div>
    </section>
  );
}
