import Image from "next/image";

type Screen = "home" | "reminders" | "analysis";

const screenImages: Record<Screen, { light: string; dark: string }> = {
  home: { light: "/app-screens/home.png", dark: "/app-screens/home-dark.png" },
  reminders: { light: "/app-screens/reminders.png", dark: "/app-screens/reminders-dark.png" },
  analysis: { light: "/app-screens/analysis.png", dark: "/app-screens/analysis-dark.png" },
};

export default function PhoneMockup({
  variant = "hero",
  screen = "home",
  alt,
}: {
  variant?: "hero" | "preview";
  screen?: Screen;
  alt: string;
}) {
  const displayW = variant === "hero" ? 260 : 210;

  return (
    <div className="relative shrink-0" style={{ width: displayW }}>
      <div
        className="absolute -inset-8 rounded-full blur-3xl"
        style={{ background: "radial-gradient(ellipse, rgba(59,79,216,0.25) 0%, transparent 70%)" }}
        aria-hidden="true"
      />
      <div
        className="relative overflow-hidden rounded-[28px] border border-white/10 bg-inverse-surface p-[6px]"
        style={{ boxShadow: "var(--shadow-6)" }}
      >
        <Image
          src={screenImages[screen].light}
          alt={alt}
          width={360}
          height={800}
          sizes={`${displayW}px`}
          priority={variant === "hero"}
          className="block h-auto w-full rounded-[21px] dark:hidden"
        />
        <Image
          src={screenImages[screen].dark}
          alt={alt}
          width={360}
          height={800}
          sizes={`${displayW}px`}
          priority={variant === "hero"}
          className="hidden h-auto w-full rounded-[21px] dark:block"
        />
      </div>
    </div>
  );
}
