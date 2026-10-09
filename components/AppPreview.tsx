import type { Dictionary } from "@/lib/i18n";
import PhoneMockup from "./PhoneMockup";

const screens = [
  { screen: "home" as const, label: "01" },
  { screen: "reminders" as const, label: "02" },
  { screen: "analysis" as const, label: "03" },
];

const TONE_COLORS = ["var(--color-accent)", "var(--color-success)", "var(--color-info)"];

export default function AppPreview({
  dict,
  tone,
}: {
  dict: Dictionary["preview"];
  tone: Dictionary["tone"];
}) {
  return (
    <section id="preview" className="py-[var(--space-8)] md:py-[var(--space-10)] bg-background overflow-hidden">
      <div className="max-w-[var(--container-max)] mx-auto px-[var(--space-4)] md:px-[var(--space-5)]">

        {/* Header */}
        <div className="mb-[var(--space-8)]">
          <p className="text-primary text-xs font-semibold uppercase tracking-[0.12em] mb-[var(--space-4)]">
            {dict.eyebrow}
          </p>
          <h2
            className="font-display font-bold text-on-surface leading-[1.08] max-w-lg"
            style={{ fontSize: "clamp(28px, 4vw, 44px)" }}
          >
            {dict.title}
            <br />
            <span className="text-on-surface-variant">{dict.titleMuted}</span>
          </h2>
        </div>

        {/* Phones — center lifts slightly */}
        <div className="flex flex-col md:flex-row gap-[var(--space-8)] md:gap-[var(--space-5)] items-center md:items-end justify-center">
          {screens.map((s, i) => (
            <div
              key={s.screen}
              className={`flex flex-col items-center gap-[var(--space-5)] ${
                i === 1 ? "md:-translate-y-10" : ""
              }`}
            >
              <PhoneMockup
                variant="preview"
                screen={s.screen}
                alt={`${dict.screens[i].title}: ${dict.screens[i].description}`}
              />
              <div className="text-center">
                <p className="text-on-surface-variant text-xs font-medium mb-[var(--space-1)]">{s.label}</p>
                <p className="font-display font-semibold text-on-surface text-[15px]">
                  {dict.screens[i].title}
                </p>
                <p className="text-on-surface-variant text-sm mt-[var(--space-1)] max-w-[150px] leading-snug">
                  {dict.screens[i].description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Tone block */}
        <div className="mt-[var(--space-8)] border-t border-surface-variant pt-[var(--space-8)] max-w-2xl">
          <p className="text-on-surface-variant text-xs uppercase tracking-[0.1em] font-medium mb-[var(--space-5)]">
            {dict.toneTitle}
          </p>
          <div className="flex flex-col gap-[var(--space-3)]">
            {tone.map((msg, i) => (
              <div
                key={msg}
                className="flex items-start gap-[var(--space-3)] py-[var(--space-3)] px-[var(--space-4)] bg-surface border-l-[3px]"
                style={{ borderColor: TONE_COLORS[i], borderRadius: "var(--radius-lg)" }}
              >
                <div
                  className="w-1.5 h-1.5 rounded-full shrink-0 mt-2"
                  style={{ backgroundColor: TONE_COLORS[i] }}
                />
                <p className="text-on-surface text-[15px] leading-relaxed">
                  &ldquo;{msg}&rdquo;
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
