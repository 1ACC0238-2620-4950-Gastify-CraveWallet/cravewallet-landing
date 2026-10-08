"use client";

import { useState } from "react";

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

type Status = { kind: "idle" | "sending" | "success" | "error"; message?: string };

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>({ kind: "idle" });

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!EMAIL.test(email.trim())) {
      setStatus({ kind: "error", message: "El correo no tiene un formato válido." });
      return;
    }
    setStatus({ kind: "sending" });
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim() }),
      });
      const data = await res.json();
      setStatus({ kind: res.ok ? "success" : "error", message: data.message });
      if (res.ok) setEmail("");
    } catch {
      setStatus({ kind: "error", message: "No pudimos enviar tu correo. Inténtalo de nuevo." });
    }
  }

  return (
    <section id="novedades" className="py-20 md:py-24 bg-[#E0E4FF]">
      <div className="max-w-[1280px] mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <h2
            className="font-display font-bold text-[#0A1172] leading-[1.1] mb-3"
            style={{ fontSize: "clamp(24px, 3vw, 34px)" }}
          >
            Sé de los primeros en usar CraveWallet.
          </h2>
          <p className="text-[#0A1172]/70 text-[15px] leading-relaxed">
            Déjanos tu correo y te avisaremos cuando la aplicación esté disponible.
          </p>
        </div>

        <form onSubmit={submit} noValidate className="flex flex-col gap-3">
          <label htmlFor="newsletter-email" className="text-[13px] font-medium text-[#0A1172]">
            Correo electrónico
          </label>
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              id="newsletter-email"
              type="email"
              autoComplete="email"
              placeholder="tucorreo@ejemplo.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-invalid={status.kind === "error"}
              aria-describedby="newsletter-status"
              className="flex-1 rounded-xl border border-[#C7CEFF] bg-white px-4 py-3.5 text-[15px] text-[#0F172A] outline-none focus:border-[#3B4FD8] focus:ring-2 focus:ring-[#3B4FD8]/20"
            />
            <button
              type="submit"
              disabled={status.kind === "sending"}
              className="btn rounded-xl bg-[#3B4FD8] px-6 py-3.5 text-[15px] font-semibold text-white hover:bg-[#2537B0] disabled:opacity-60"
            >
              {status.kind === "sending" ? "Enviando…" : "Avísame"}
            </button>
          </div>
          <p
            id="newsletter-status"
            role="status"
            className={`min-h-[20px] text-[13px] ${status.kind === "error" ? "text-[#B91C1C]" : "text-[#15803D]"}`}
          >
            {status.message}
          </p>
        </form>
      </div>
    </section>
  );
}
