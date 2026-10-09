import type { Dictionary } from "@/lib/i18n";

type Props = {
  variant?: "hero" | "preview";
  screen?: "dashboard" | "alerts" | "exchange";
  dict: Dictionary["phone"];
};

type PhoneDict = Dictionary["phone"];

function DashboardScreen({ dict }: { dict: PhoneDict }) {
  const t = dict.dashboard;
  return (
    <div className="w-full h-full bg-background flex flex-col">
      {/* Status bar */}
      <div className="flex items-center justify-between px-6 pt-4 pb-2">
        <span className="text-[13px] font-semibold text-on-surface">9:41</span>
        <div className="w-4 h-2.5 border border-on-surface rounded-[3px] relative">
          <div className="absolute inset-[1.5px] right-auto w-2/3 bg-success rounded-[1px]" />
        </div>
      </div>

      {/* Greeting */}
      <div className="flex items-center justify-between px-6 pt-2 pb-4">
        <div>
          <p className="text-[14px] text-on-surface-variant">{t.greeting}</p>
          <p className="text-[20px] font-semibold text-on-surface leading-tight">
            {t.hello}
          </p>
        </div>
        <div
          className="w-10 h-10 bg-primary flex items-center justify-center text-on-primary text-[16px] font-bold"
          style={{ borderRadius: "var(--radius-xl)" }}
        >
          M
        </div>
      </div>

      {/* Total spend card */}
      <div className="mx-4 bg-primary p-5 text-on-primary" style={{ borderRadius: "var(--radius-lg)", boxShadow: "var(--shadow-3)" }}>
        <p className="text-[13px] text-on-primary/70 mb-1">{t.total}</p>
        <p className="text-[36px] font-bold leading-none tracking-tight">
          S/ 187.40
        </p>
        <p className="text-[13px] text-on-primary/70 mt-1">{t.approx}</p>
        <div className="flex gap-2 mt-4">
          <div className="bg-on-primary/15 px-3 py-1.5 text-[12px] font-medium" style={{ borderRadius: "var(--radius-md)" }}>
            {t.active}
          </div>
          <div className="bg-accent px-3 py-1.5 text-[12px] font-medium text-on-accent" style={{ borderRadius: "var(--radius-md)" }}>
            {t.due}
          </div>
        </div>
      </div>

      {/* Upcoming payments */}
      <p className="px-6 pt-5 pb-2 text-[14px] font-semibold text-on-surface">
        {t.upcoming}
      </p>

      <div className="px-4 flex flex-col gap-2">
        {[
          {
            name: "Spotify",
            amount: "S/ 17.90",
            badgeColor: "var(--color-accent)",
            badgeBg: "var(--color-accent-container)",
          },
          {
            name: "Netflix",
            amount: "S/ 43.90",
            badgeColor: "var(--color-warning)",
            badgeBg: "rgba(251,191,36,0.12)",
          },
          {
            name: "Adobe CC",
            amount: "USD 54.99",
            badgeColor: "var(--color-on-surface-variant)",
            badgeBg: "var(--color-surface-variant)",
          },
        ].map((item, i) => (
          <div
            key={item.name}
            className="flex items-center bg-surface px-4 py-3"
            style={{ borderRadius: "var(--radius-lg)", boxShadow: "var(--shadow-1)" }}
          >
            <div
              className="w-9 h-9 bg-surface-variant flex items-center justify-center text-[14px] font-bold text-primary mr-3"
              style={{ borderRadius: "var(--radius-lg)" }}
            >
              {item.name[0]}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[14px] font-medium text-on-surface leading-none mb-0.5">
                {item.name}
              </p>
              <p className="text-[12px] text-on-surface-variant">{t.items[i].sub}</p>
            </div>
            <div className="text-right">
              <p className="text-[14px] font-semibold text-on-surface leading-none mb-0.5">
                {item.amount}
              </p>
              <span
                className="text-[11px] font-medium px-2 py-0.5"
                style={{
                  color: item.badgeColor,
                  backgroundColor: item.badgeBg,
                  borderRadius: "var(--radius-sm)",
                }}
              >
                {t.items[i].badge}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function AlertsScreen({ dict }: { dict: PhoneDict }) {
  const t = dict.alerts;
  return (
    <div className="w-full h-full bg-background flex flex-col">
      <div className="flex items-center justify-between px-6 pt-4 pb-2">
        <span className="text-[13px] font-semibold text-on-surface">9:41</span>
        <div className="w-4 h-2.5 border border-on-surface rounded-[3px] relative">
          <div className="absolute inset-[1.5px] right-auto w-2/3 bg-success rounded-[1px]" />
        </div>
      </div>

      <div className="px-6 pt-2 pb-5">
        <p className="text-[20px] font-semibold text-on-surface">{t.title}</p>
        <p className="text-[13px] text-on-surface-variant">{t.unread}</p>
      </div>

      {/* Featured alert */}
      <div
        className="mx-4 bg-accent-container p-5"
        style={{ borderRadius: "var(--radius-lg)", border: "1px solid rgba(249,115,22,0.3)" }}
      >
        <div className="flex items-center gap-2 mb-3">
          <div
            className="w-6 h-6 bg-accent flex items-center justify-center"
            style={{ borderRadius: "var(--radius-xl)" }}
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="white">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
            </svg>
          </div>
          <p className="text-[13px] font-semibold text-accent">{t.due}</p>
        </div>
        <p className="text-[18px] font-semibold text-on-surface leading-snug mb-1">
          {t.headline}
        </p>
        <p className="text-[32px] font-bold text-on-surface leading-none mb-3">
          S/ 17.90
        </p>
        <p className="text-[13px] text-on-surface-variant mb-4">{t.question}</p>
        <div className="flex gap-2">
          <div
            className="flex-1 bg-accent text-on-accent text-[13px] font-semibold text-center py-2.5"
            style={{ borderRadius: "var(--radius-md)" }}
          >
            {t.cancel}
          </div>
          <div
            className="flex-1 bg-surface text-on-surface text-[13px] font-medium text-center py-2.5 border border-surface-variant"
            style={{ borderRadius: "var(--radius-md)" }}
          >
            {t.renew}
          </div>
        </div>
      </div>

      <div className="px-4 flex flex-col gap-2 mt-3">
        {[
          {
            color: "var(--color-success)",
            bg: "rgba(34,197,94,0.10)",
          },
          {
            color: "var(--color-warning)",
            bg: "rgba(251,191,36,0.12)",
          },
        ].map((a, i) => (
          <div
            key={t.items[i].title}
            className="bg-surface px-4 py-3 border-l-4"
            style={{
              borderColor: a.color,
              borderRadius: "var(--radius-lg)",
              boxShadow: "var(--shadow-1)",
            }}
          >
            <p className="text-[14px] font-semibold text-on-surface">{t.items[i].title}</p>
            <p className="text-[12px] text-on-surface-variant mt-0.5">{t.items[i].body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function ExchangeScreen({ dict }: { dict: PhoneDict }) {
  const t = dict.exchange;
  return (
    <div className="w-full h-full bg-background flex flex-col">
      <div className="flex items-center justify-between px-6 pt-4 pb-2">
        <span className="text-[13px] font-semibold text-on-surface">9:41</span>
        <div className="w-4 h-2.5 border border-on-surface rounded-[3px] relative">
          <div className="absolute inset-[1.5px] right-auto w-2/3 bg-success rounded-[1px]" />
        </div>
      </div>

      <div className="px-6 pt-2 pb-4">
        <p className="text-[20px] font-semibold text-on-surface">{t.title}</p>
      </div>

      {/* Exchange rate card */}
      <div className="mx-4 bg-inverse-surface p-5 text-white" style={{ borderRadius: "var(--radius-lg)" }}>
        <p className="text-[13px] text-white/60 mb-1">{t.source}</p>
        <p className="text-[13px] text-white/70 mb-2">{t.equals}</p>
        <p className="text-[44px] font-bold leading-none">S/ 3.74</p>
        <div className="flex items-center gap-1.5 mt-3">
          <div
            className="w-4 h-4 flex items-center justify-center"
            style={{ borderRadius: "var(--radius-xl)", backgroundColor: "rgba(34,197,94,0.2)" }}
          >
            <svg width="8" height="8" viewBox="0 0 12 12" fill="var(--color-success)">
              <path d="M6 2L9 6H3z"/>
            </svg>
          </div>
          <p className="text-[12px] text-success">{t.delta}</p>
        </div>
      </div>

      {/* Conversion list */}
      <p className="px-6 pt-5 pb-2 text-[14px] font-semibold text-on-surface">
        {t.list}
      </p>
      <div className="px-4 flex flex-col gap-2">
        {[
          { name: "Netflix",   usd: "USD 8.99",  pen: "S/ 33.64" },
          { name: "Spotify",   usd: "USD 4.99",  pen: "S/ 18.67" },
          { name: "Adobe CC",  usd: "USD 54.99", pen: "S/ 205.66" },
          { name: "Canva Pro", usd: "USD 12.99", pen: "S/ 48.58" },
        ].map((s) => (
          <div
            key={s.name}
            className="flex items-center bg-surface px-4 py-3"
            style={{ borderRadius: "var(--radius-lg)", boxShadow: "var(--shadow-1)" }}
          >
            <div
              className="w-9 h-9 bg-surface-variant flex items-center justify-center text-[14px] font-bold text-primary mr-3"
              style={{ borderRadius: "var(--radius-lg)" }}
            >
              {s.name[0]}
            </div>
            <div className="flex-1">
              <p className="text-[14px] font-medium text-on-surface">{s.name}</p>
              <p className="text-[12px] text-on-surface-variant">{s.usd}</p>
            </div>
            <p className="text-[14px] font-semibold text-on-surface">{s.pen}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const screens = {
  dashboard: DashboardScreen,
  alerts: AlertsScreen,
  exchange: ExchangeScreen,
};

export default function PhoneMockup({
  variant = "hero",
  screen = "dashboard",
  dict,
}: Props) {
  const Screen = screens[screen];

  const designW = 360;
  const designH = 760;
  const displayW = variant === "hero" ? 260 : 210;
  const scale = displayW / designW;
  const displayH = Math.round(designH * scale);

  return (
    <div className="relative" style={{ width: displayW }}>
      {/* Ambient glow */}
      <div
        className="absolute -inset-8 rounded-full blur-3xl"
        style={{ background: "radial-gradient(ellipse, rgba(59,79,216,0.25) 0%, transparent 70%)" }}
      />

      {/* Phone frame */}
      <div
        className="relative p-[calc(8px*var(--s))] border border-white/10"
        style={{
          "--s": scale,
          borderRadius: `calc(32px * ${scale})`,
          backgroundColor: "var(--color-inverse-surface)",
          boxShadow: "var(--shadow-6)",
        } as React.CSSProperties}
      >
        <div
          className="overflow-hidden"
          style={{
            borderRadius: `calc(26px * ${scale})`,
            backgroundColor: "var(--color-inverse-surface)",
          }}
        >
          {/* Dynamic Island */}
          <div className="flex justify-center" style={{ paddingTop: `${12 * scale}px`, paddingBottom: `${4 * scale}px` }}>
            <div
              style={{
                width: 80 * scale,
                height: 10 * scale,
                borderRadius: 999,
                backgroundColor: "rgba(0,0,0,0.7)",
              }}
            />
          </div>

          {/* Screen */}
          <div style={{ width: displayW, height: displayH, overflow: "hidden" }}>
            <div
              style={{
                width: designW,
                height: designH,
                transform: `scale(${scale})`,
                transformOrigin: "top left",
              }}
            >
              <Screen dict={dict} />
            </div>
          </div>

          {/* Home indicator */}
          <div className="flex justify-center" style={{ paddingTop: `${6 * scale}px`, paddingBottom: `${8 * scale}px` }}>
            <div
              className="bg-white/25"
              style={{ width: 80 * scale, height: 4 * scale, borderRadius: 999 }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
