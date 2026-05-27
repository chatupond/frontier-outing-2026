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

function CarCard({ car }: { car: Car }) {
  return (
    <div className="group relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 hover:border-primary/40 transition-all duration-300">
      {/* Top accent bar */}
      <div className="h-1 w-full bg-primary" />

      <div className="p-5">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center text-lg">
              🚗
            </div>
            <div>
              <p className="text-white/50 text-xs font-medium uppercase tracking-widest leading-none mb-0.5">
                Car
              </p>
              <p className="text-primary font-bold text-xl leading-none">{car.id}</p>
            </div>
          </div>
          <span className="text-xs font-semibold bg-primary/15 text-primary border border-primary/20 px-2.5 py-1 rounded-full">
            {car.members.length} seats
          </span>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/10 mb-4" />

        {/* Members */}
        <ul className="space-y-2">
          {car.members.map((member, i) => (
            <li key={i} className="flex items-center gap-2.5">
              <div className="w-5 h-5 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 text-[10px] text-primary font-bold">
                {i + 1}
              </div>
              <span className="text-white/80 text-sm font-medium">{member}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function TransportSection() {
  return (
    <section className="py-24 px-4 bg-secondary">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="inline-block text-primary text-sm font-semibold tracking-widest uppercase mb-3">
            Getting There
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Transportation
          </h2>
          <p className="text-white/60 text-lg max-w-xl mx-auto">
            7 cars, 27 adventurers — everyone&apos;s covered
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {cars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      </div>
    </section>
  );
}
