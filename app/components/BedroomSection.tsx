import Image from "next/image";

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
  "2nd Floor": "bg-amber-100 text-amber-700",
  "3rd Floor": "bg-purple-100 text-purple-700",
};

function RoomCard({ room }: { room: Room }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col">
      <div className="relative h-48 overflow-hidden">
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
              <div className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-100 to-amber-100 flex items-center justify-center flex-shrink-0 text-xs">
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

export default function BedroomSection() {
  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="inline-block text-purple-600 text-sm font-semibold tracking-widest uppercase mb-3">
            Where You Sleep
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Bedroom Assignments
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Six beautiful rooms, each with its own charm
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {rooms.map((room) => (
            <RoomCard key={room.id} room={room} />
          ))}
        </div>
      </div>
    </section>
  );
}
