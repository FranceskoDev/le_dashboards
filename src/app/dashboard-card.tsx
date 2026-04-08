"use client";

export default function DashboardCard({
  title,
  desc,
  href,
  cards,
  accent,
  icon,
}: {
  title: string;
  desc: string;
  href: string;
  cards: number;
  accent: string;
  icon: string;
}) {
  return (
    <a
      href={href}
      className="group block rounded-xl p-6 transition-all duration-300 hover:scale-[1.02]"
      style={{
        background: "#131720",
        border: "1px solid #252b3b",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget;
        el.style.borderColor = accent;
        el.style.boxShadow = `0 0 20px ${accent}33, 0 0 40px ${accent}15`;
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget;
        el.style.borderColor = "#252b3b";
        el.style.boxShadow = "none";
      }}
    >
      <div className="flex items-start gap-4">
        <span className="text-3xl">{icon}</span>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-3 mb-2">
            <h2 className="text-lg font-bold truncate">{title}</h2>
            <span
              className="shrink-0 px-2.5 py-0.5 rounded-full text-xs font-bold"
              style={{
                background: `${accent}20`,
                color: accent,
                border: `1px solid ${accent}40`,
              }}
            >
              {cards}
            </span>
          </div>
          <p className="text-sm text-[#8892a8] leading-relaxed">{desc}</p>
          <div
            className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium transition-transform group-hover:translate-x-1"
            style={{ color: accent }}
          >
            Apri dashboard
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              className="transition-transform group-hover:translate-x-0.5"
            >
              <path
                d="M6 3l5 5-5 5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </a>
  );
}
