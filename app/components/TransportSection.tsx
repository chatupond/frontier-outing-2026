interface Car {
  id: number;
  members: string[];
}

const cars: Car[] = [
  {
    id: 1,
    members: ["Tong Chatuporn", "Bump Dolwijit", "Big Gergchai", "Zai Pattamaporn"],
  },
  {
    id: 2,
    members: ["Gun Pongsagarn", "Khim Siwanun", "Ken Ken", "Ploy Thanawan"],
  },
  {
    id: 3,
    members: ["Praew Pinitpon", "Boy Thanapong", "Opor Danaya", "G Sajeesuda"],
  },
  {
    id: 4,
    members: ["Fei Ratshasit", "Fluke Sattra", "Aome Dolyarat", "Team Suparerk"],
  },
  {
    id: 5,
    members: ["Golf Naruepan", "Fair Thanawat", "Bank Neuron", "Toei Nattawoot"],
  },
  {
    id: 6,
    members: ["Thanakorn Amnajsatit", "Boss Teerapong", "Tan Nititorn"],
  },
  {
    id: 7,
    members: ["Lin Chawakorn", "Poom Wutthidech", "Sun Sarin", "Eth Chonlasai"],
  },
];

const carColors = [
  "from-amber-400 to-orange-500",
  "from-purple-500 to-indigo-600",
  "from-emerald-400 to-teal-500",
  "from-rose-400 to-pink-600",
  "from-blue-400 to-cyan-500",
  "from-violet-500 to-purple-600",
  "from-yellow-400 to-amber-500",
];

function CarCard({ car, colorClass }: { car: Car; colorClass: string }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-200 hover:-translate-y-0.5 transition-transform">
      <div className={`bg-gradient-to-r ${colorClass} px-5 py-4 flex items-center gap-3`}>
        <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
          <span className="text-xl">🚗</span>
        </div>
        <div>
          <p className="text-white/70 text-xs font-medium uppercase tracking-wider">
            Car
          </p>
          <p className="text-white font-bold text-lg leading-tight">{car.id}</p>
        </div>
        <div className="ml-auto bg-white/20 rounded-full px-2.5 py-0.5 text-white text-xs font-medium">
          {car.members.length} seats
        </div>
      </div>

      <div className="p-5">
        <ul className="space-y-2">
          {car.members.map((member, i) => (
            <li key={i} className="flex items-center gap-2.5">
              <div className="w-1.5 h-1.5 rounded-full bg-gray-300 flex-shrink-0" />
              <span className="text-gray-700 text-sm font-medium">{member}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function TransportSection() {
  return (
    <section className="py-24 px-4 bg-stone-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="inline-block text-amber-600 text-sm font-semibold tracking-widest uppercase mb-3">
            Getting There
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Transportation
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            7 cars, 27 adventurers — everyone's covered
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {cars.map((car, i) => (
            <CarCard key={car.id} car={car} colorClass={carColors[i % carColors.length]} />
          ))}
        </div>
      </div>
    </section>
  );
}
