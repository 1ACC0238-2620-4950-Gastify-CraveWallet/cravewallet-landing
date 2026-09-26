"use client";

import { useState, useEffect } from "react";

const NAV_LINKS = [
  { label: "El problema", href: "#problem" },
  { label: "Solución", href: "#solution" },
  { label: "Premium", href: "#premium" },
  { label: "Descarga", href: "#descarga" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const textColor = scrolled ? "#64748B" : "rgba(255,255,255,0.65)";
  const textColorHover = scrolled ? "#0F172A" : "white";

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        transition:
          "background-color 220ms cubic-bezier(0.23,1,0.32,1), box-shadow 220ms cubic-bezier(0.23,1,0.32,1)",
        backgroundColor: scrolled ? "rgba(255,255,255,0.94)" : "transparent",
        backdropFilter: scrolled ? "blur(14px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(14px)" : "none",
        boxShadow: scrolled ? "0 1px 0 rgba(15,23,42,0.07)" : "none",
      }}
    >
      <div className="max-w-[1280px] mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2 shrink-0">
          <div className="w-7 h-7 bg-[#3B4FD8] rounded-lg flex items-center justify-center">
            <svg width="14" height="14" viewBox="0 0 18 18" fill="none">
              <path
                d="M3 6h12a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1z"
                fill="white"
                fillOpacity="0.95"
              />
              <path
                d="M5 6V4a4 4 0 0 1 8 0v2"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M9 4L13 1"
                stroke="#F97316"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <span
            className="font-display font-semibold text-[16px] tracking-tight"
            style={{
              color: scrolled ? "#0F172A" : "white",
              transition: "color 220ms cubic-bezier(0.23,1,0.32,1)",
            }}
          >
            CraveWallet
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[14px] font-medium"
              style={{
                color: textColor,
                transition: "color 180ms cubic-bezier(0.23,1,0.32,1)",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.color = textColorHover)
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.color = textColor)
              }
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Primary CTA — always visible per chapter 3 */}
        <a
          href="#descarga"
          className="btn hidden md:inline-flex items-center gap-1.5 bg-[#3B4FD8] text-white text-[13px] font-semibold px-4 py-2 rounded-lg hover:bg-[#2537B0]"
        >
          Descargar gratis
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden w-8 h-8 flex flex-col items-center justify-center gap-[5px]"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="block w-5 rounded-full"
              style={{
                height: "1.5px",
                backgroundColor: scrolled ? "#0F172A" : "white",
                transition:
                  "transform 200ms cubic-bezier(0.23,1,0.32,1), opacity 200ms",
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

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="md:hidden bg-white/98 backdrop-blur-sm border-t border-[#EEF2F7] px-4 py-5 flex flex-col gap-1">
          {NAV_LINKS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[15px] font-medium text-[#64748B] hover:text-[#0F172A] py-2.5 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#descarga"
            className="btn mt-2 bg-[#3B4FD8] text-white text-[14px] font-semibold px-4 py-3 rounded-xl text-center hover:bg-[#2537B0]"
            onClick={() => setMenuOpen(false)}
          >
            Descargar gratis
          </a>
        </div>
      )}
    </header>
  );
}
