import type { Dictionary } from "@/lib/i18n";

// US32: preguntas frecuentes con <details>, accesibles con teclado y lector de pantalla sin JavaScript.
export default function Faq({ dict }: { dict: Dictionary["faq"] }) {
  return (
    <section id="faq" className="py-[var(--space-8)] md:py-[var(--space-10)] bg-surface">
      <div className="max-w-[var(--container-max)] mx-auto px-[var(--space-4)] md:px-[var(--space-5)] grid grid-cols-1 md:grid-cols-[1fr_1.6fr] gap-[var(--space-8)]">
        <div>
          <p className="text-primary text-xs font-semibold uppercase tracking-[0.12em] mb-[var(--space-4)]">
            {dict.eyebrow}
          </p>
          <h2
            className="font-display font-bold text-on-surface leading-[1.08]"
            style={{ fontSize: "clamp(28px, 4vw, 44px)" }}
          >
            {dict.title}
          </h2>
        </div>

        <div className="flex flex-col divide-y divide-surface-variant border-y border-surface-variant">
          {dict.items.map((item) => (
            <details key={item.q} className="group py-[var(--space-5)]">
              <summary className="flex items-center justify-between gap-[var(--space-5)] cursor-pointer list-none font-display font-semibold text-[17px] text-on-surface focus-visible:outline-2 focus-visible:outline-primary">
                {item.q}
                <span
                  aria-hidden="true"
                  className="shrink-0 text-primary text-[22px] leading-none transition-transform duration-200 group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="text-on-surface-variant text-[15px] leading-relaxed mt-[var(--space-3)] pr-[var(--space-8)]">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
