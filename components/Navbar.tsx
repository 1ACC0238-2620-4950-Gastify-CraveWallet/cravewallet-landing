"use client";

import { useState } from "react";
import type { Dictionary, Locale } from "@/lib/i18n";
import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";
import LanguageSwitch from "./LanguageSwitch";

export default function Navbar({ lang, dict }: { lang: Locale; dict: Dictionary["nav"] }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50"
      style={{
        backgroundColor: "color-mix(in srgb, var(--color-surface) 94%, transparent)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        boxShadow: "0 1px 0 color-mix(in srgb, var(--color-on-surface) 8%, transparent)",
      }}
    >
      <div
        className="max-w-[var(--container-max)] mx-auto px-[var(--space-4)] md:px-[var(--space-5)] h-16 flex items-center justify-between"
      >
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-[var(--space-2)] shrink-0">
          <Logo />
          <span className="font-display font-semibold text-base text-on-surface tracking-tight">
            CraveWallet
          </span>
        </a>

        {/* Desktop nav — visible from 960px */}
        <nav className="hidden md:flex items-center gap-[var(--space-6)]">
          {dict.links.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-on-surface-variant hover:text-on-surface"
              style={{ transition: "color 180ms var(--ease-out)" }}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right side: CTA (from 480px), language, theme + hamburger on mobile */}
        <div className="flex items-center gap-[var(--space-2)]">
          <a
            href="#download"
            className="btn hidden min-[480px]:inline-flex items-center gap-1.5 whitespace-nowrap bg-primary text-on-primary text-sm font-semibold px-[var(--space-4)] py-[var(--space-2)] hover:bg-primary-dark"
            style={{ borderRadius: "var(--radius-md)" }}
          >
            {dict.cta}
          </a>

          <LanguageSwitch lang={lang} label={dict.switchLanguage} />
          <ThemeToggle label={dict.toggleTheme} />

          {/* Hamburger — only on mobile */}
          <button
            className="md:hidden w-8 h-8 flex flex-col items-center justify-center gap-[var(--space-1)]"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? dict.closeMenu : dict.openMenu}
            aria-expanded={menuOpen}
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className="block w-5 rounded-full bg-on-surface"
                style={{
                  height: "1.5px",
                  transition: "transform 200ms var(--ease-out), opacity 200ms var(--ease-out)",
                  transform: menuOpen
                    ? i === 0
                      ? "rotate(45deg) translate(4px, 4px)"
                      : i === 2
                      ? "rotate(-45deg) translate(4px, -4px)"
                      : "none"
                    : "none",
                  opacity: menuOpen && i === 1 ? 0 : 1,
                }}
              />
            ))}
          </button>
        </div>
      </div>

      {/* Mobile drawer — always mounted, transitions via opacity + transform */}
      <div
        className="md:hidden mobile-drawer border-t border-surface-variant px-[var(--space-4)] flex flex-col gap-[var(--space-1)]"
        aria-hidden={!menuOpen}
        style={{
          backgroundColor: "var(--color-surface)",
          opacity: menuOpen ? 1 : 0,
          transform: menuOpen ? "translateY(0)" : "translateY(-6px)",
          pointerEvents: menuOpen ? "auto" : "none",
          paddingTop: menuOpen ? "var(--space-5)" : 0,
          paddingBottom: menuOpen ? "var(--space-5)" : 0,
          maxHeight: menuOpen ? "360px" : "0px",
          overflow: "hidden",
          transition:
            "opacity 220ms var(--ease-out), transform 220ms var(--ease-out), max-height 280ms var(--ease-out), padding 220ms var(--ease-out)",
        }}
      >
        {dict.links.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="text-base font-medium text-on-surface-variant hover:text-on-surface py-[var(--space-2)]"
            style={{ transition: "color 160ms var(--ease-out)" }}
            onClick={() => setMenuOpen(false)}
          >
            {item.label}
          </a>
        ))}
      </div>
    </header>
  );
}
