"use client";

import { useCounter } from "@/hooks/useCounter";
import { numberLocale, type Dictionary, type Locale } from "@/lib/i18n";

function StatCard({
  prefix = "",
  suffix = "",
  target,
  label,
  sublabel,
  source,
  locale,
}: {
  prefix?: string;
  suffix?: string;
  target: number;
  label: string;
  sublabel: string;
  source: string;
  locale: string;
}) {
  const { count, ref } = useCounter(target, 1600);
  return (
    <div ref={ref} className="text-center">
      <p
        className="font-display font-bold text-white leading-none mb-[var(--space-2)]"
        style={{ fontSize: "clamp(40px, 5vw, 64px)" }}
      >
        {prefix}
        {count.toLocaleString(locale)}
        {suffix}
      </p>
      <p className="text-white text-[15px] font-semibold mb-[var(--space-1)]">{label}</p>
      <p className="text-white/45 text-sm leading-snug max-w-[200px] mx-auto">
        {sublabel}
      </p>
      <p className="text-white/20 text-xs mt-[var(--space-2)]">{source}</p>
    </div>
  );
}

const SERVICES = [
  "Spotify Premium", "Netflix", "Disney+", "Max (HBO)", "Crunchyroll",
  "Xbox Game Pass", "Apple Music", "YouTube Premium", "Amazon Prime",
  "ChatGPT Plus", "Adobe Creative Cloud", "Canva Pro", "Figma", "Dropbox",
  "Google Drive", "iCloud", "GitHub Copilot", "Notion", "LinkedIn Premium",
  "Smart Fit", "Británico", "Netzun", "PedidosYa Plus", "Rappi Prime",
  "MongoDB Atlas",
];

const STORY_COLORS = ["var(--color-accent)", "var(--color-warning)", "var(--color-info)"];

export default function Problem({ lang, dict }: { lang: Locale; dict: Dictionary["problem"] }) {
  return (
    <section
      id="problem"
      className="py-[var(--space-8)] md:py-[var(--space-10)] bg-inverse-surface relative overflow-hidden"
    >
      {/* Ambient glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at bottom center, rgba(59,79,216,0.14) 0%, transparent 65%)",
        }}
      />

      <div className="relative max-w-[var(--container-max)] mx-auto px-[var(--space-4)] md:px-[var(--space-5)]">
        {/* Header */}
        <div className="max-w-2xl mb-[var(--space-8)] md:mb-[var(--space-10)]">
          <p className="text-accent text-xs font-semibold uppercase tracking-[0.12em] mb-[var(--space-4)]">
            {dict.eyebrow}
          </p>
          <h2
            className="font-display font-bold text-white leading-[1.04] mb-[var(--space-5)]"
            style={{ fontSize: "clamp(28px, 4.5vw, 52px)" }}
          >
            {dict.title[0]}
            <br />
            {dict.title[1]}
          </h2>
          <p className="text-white/50 text-base leading-relaxed max-w-lg">
            {dict.body}
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-[var(--space-8)] md:gap-[var(--space-8)] mb-[var(--space-8)]">
          {dict.stats.map((stat) => (
            <StatCard key={stat.label} {...stat} locale={numberLocale[lang]} />
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[var(--space-4)] mb-[var(--space-8)]">
          {dict.stories.map((item, i) => (
            <div
              key={item.person}
              className="p-[var(--space-4)] border-l-[3px] bg-white/4"
              style={{ borderColor: STORY_COLORS[i], borderRadius: "var(--radius-lg)" }}
            >
              <p className="text-white/70 text-sm leading-relaxed mb-[var(--space-2)]">
                &ldquo;{item.quote}&rdquo;
              </p>
              <p className="text-white/30 text-xs font-medium">
                {item.person}
              </p>
            </div>
          ))}
        </div>

        {/* Services tag cloud */}
        <div className="border-t border-white/8 pt-[var(--space-8)]">
          <p className="text-white/30 text-xs uppercase tracking-widest mb-[var(--space-5)]">
            {dict.servicesTitle}
          </p>
          <div className="flex flex-wrap gap-[var(--space-2)]">
            {SERVICES.map((s) => (
              <span
                key={s}
                className="text-xs font-medium text-white/35 border border-white/8 px-[var(--space-3)] py-[var(--space-1)]"
                style={{ borderRadius: "var(--radius-sm)" }}
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
