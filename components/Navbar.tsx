"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        transition: "background-color 200ms cubic-bezier(0.23,1,0.32,1), box-shadow 200ms cubic-bezier(0.23,1,0.32,1)",
        backgroundColor: scrolled ? "rgba(255,255,255,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        boxShadow: scrolled ? "0 1px 0 rgba(15,23,42,0.06)" : "none",
      }}
    >
      <div className="max-w-[1280px] mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <div className="w-7 h-7 bg-[#3B4FD8] rounded-lg flex items-center justify-center shrink-0">
            <svg width="14" height="14" viewBox="0 0 18 18" fill="none">
              <path d="M3 6h12a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1z" fill="white" fillOpacity="0.95" />
              <path d="M5 6V4a4 4 0 0 1 8 0v2" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M9 4L13 1" stroke="#F97316" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </div>
          <span
            className="font-display font-semibold text-[16px] tracking-tight"
            style={{
              color: scrolled ? "#0F172A" : "white",
              transition: "color 200ms cubic-bezier(0.23,1,0.32,1)",
            }}
          >
            CraveWallet
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7">
          {[
            { label: "El problema", href: "#problema" },
            { label: "Funciones", href: "#funciones" },
            { label: "Planes", href: "#planes" },
            { label: "Preguntas", href: "#preguntas" },
            { label: "Descarga", href: "#descarga" },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-[14px] font-medium"
              style={{
                color: scrolled ? "#64748B" : "rgba(255,255,255,0.65)",
                transition: "color 200ms cubic-bezier(0.23,1,0.32,1)",
              }}
              onMouseEnter={(e) =>
                ((e.target as HTMLElement).style.color = scrolled ? "#0F172A" : "white")
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.color = scrolled ? "#64748B" : "rgba(255,255,255,0.65)")
              }
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="#descarga"
          className="btn hidden md:inline-flex items-center gap-2 bg-[#F97316] text-white text-[13px] font-semibold px-4 py-2 rounded-lg hover:bg-[#ea6a0f]"
        >
          Descargar gratis
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden w-8 h-8 flex flex-col items-center justify-center gap-[5px]"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menú"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="block w-5 h-[1.5px] rounded-full"
              style={{
                backgroundColor: scrolled ? "#0F172A" : "white",
                transition: "transform 200ms cubic-bezier(0.23,1,0.32,1), opacity 200ms",
                transform:
                  menuOpen
                    ? i === 0
                      ? "rotate(45deg) translate(4px, 4px)"
                      : i === 2
                      ? "rotate(-45deg) translate(4px, -4px)"
                      : "scaleX(0)"
                    : "none",
                opacity: menuOpen && i === 1 ? 0 : 1,
              }}
            />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-[#EEF2F7] px-4 py-5 flex flex-col gap-4">
          {[
            { label: "El problema", href: "#problema" },
            { label: "Funciones", href: "#funciones" },
            { label: "Planes", href: "#planes" },
            { label: "Preguntas", href: "#preguntas" },
            { label: "Descarga", href: "#descarga" },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-[15px] font-medium text-[#64748B] hover:text-[#0F172A] transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#descarga"
            className="btn bg-[#F97316] text-white text-[14px] font-semibold px-4 py-3 rounded-xl text-center hover:bg-[#ea6a0f]"
            onClick={() => setMenuOpen(false)}
          >
            Descargar gratis
          </a>
        </div>
      )}
    </header>
  );
}
