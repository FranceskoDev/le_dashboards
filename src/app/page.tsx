import DashboardCard from "./dashboard-card";

const dashboards = [
  {
    title: "Turismo Tricologico Albania",
    desc: "39 cliniche trapianto capelli — Agenzie italiane e cliniche albanesi",
    href: "/dashboard-TURISMO-TRICOLOGICO-ALBANIA.html",
    cards: 39,
    accent: "#d4a017",
    icon: "🇦🇱",
  },
  {
    title: "Turismo Tricologico Turchia",
    desc: "70 cliniche trapianto capelli — Istanbul, Ankara, Antalya",
    href: "/dashboard-TURISMO-TRICOLOGICO-TURCHIA.html",
    cards: 70,
    accent: "#e23e3e",
    icon: "🇹🇷",
  },
  {
    title: "Top Cliniche Mondo",
    desc: "302 cliniche in 52 paesi — Escluse Turchia e Albania",
    href: "/dashboard-CLINICHE-MONDO-200.html",
    cards: 302,
    accent: "#6366f1",
    icon: "🌍",
  },
  {
    title: "Turismo Medico Albania",
    desc: "219 strutture — Dentale, estetica, IVF, bariatrica, oculistica",
    href: "/dashboard-TURISMO-MEDICO-ALBANIA.html",
    cards: 219,
    accent: "#14b8a6",
    icon: "🏥",
  },
  {
    title: "Turismo Medico Mondo",
    desc: "162 agenzie, piattaforme, network ospedalieri e facilitatori globali in 45+ paesi",
    href: "/dashboard-TURISMO-MEDICO-MONDO.html",
    cards: 162,
    accent: "#f97316",
    icon: "🌐",
  },
];

export default function Home() {
  const total = dashboards.reduce((sum, d) => sum + d.cards, 0);

  return (
    <div className="min-h-screen relative">
      {/* Background grid */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(99,102,241,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.03) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div
        className="fixed -top-48 -right-48 w-[600px] h-[600px] pointer-events-none opacity-60"
        style={{
          background:
            "radial-gradient(circle, rgba(99,102,241,0.08), transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-16">
        {/* Hero */}
        <header className="text-center mb-16">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide mb-6"
            style={{
              background: "rgba(99,102,241,0.12)",
              color: "#818cf8",
              border: "1px solid rgba(99,102,241,0.3)",
            }}
          >
            <span
              className="w-2 h-2 rounded-full animate-pulse"
              style={{ background: "#818cf8" }}
            />
            Dashboard Hub
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Turismo Medico &{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: "linear-gradient(135deg, #6366f1, #14b8a6)",
              }}
            >
              Tricologico
            </span>
          </h1>
          <p className="text-[#8892a8] text-lg max-w-xl mx-auto">
            Centro di controllo per tutte le dashboard di ricerca. Livelli,
            note e filtri salvati su Supabase in tempo reale.
          </p>

          <div className="flex justify-center gap-4 mt-8 flex-wrap">
            <Stat value={dashboards.length} label="Dashboard" color="#6366f1" />
            <Stat value={total} label="Card totali" color="#14b8a6" />
            <Stat value={52} label="Paesi" color="#d4a017" />
          </div>
        </header>

        {/* Dashboard grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {dashboards.map((d) => (
            <DashboardCard key={d.href} {...d} />
          ))}
        </div>

        {/* Footer */}
        <footer className="text-center mt-16 pt-8 border-t border-[#252b3b] text-[#5a6478] text-sm">
          {total} strutture verificate &middot; Supabase Realtime &middot; 2025
        </footer>
      </div>
    </div>
  );
}

function Stat({
  value,
  label,
  color,
}: {
  value: number;
  label: string;
  color: string;
}) {
  return (
    <div
      className="text-center px-6 py-3 rounded-lg min-w-[100px]"
      style={{ background: "#131720", border: "1px solid #252b3b" }}
    >
      <div className="text-2xl font-extrabold" style={{ color }}>
        {value}
      </div>
      <div className="text-[10px] uppercase tracking-wider text-[#5a6478]">
        {label}
      </div>
    </div>
  );
}
