"use client";

import { useState } from "react";
import type { Dictionary, Locale } from "@/lib/i18n";

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

type Status = "idle" | "sending" | "success" | "invalid" | "error";

// US40: el visitante deja su correo para recibir el aviso del lanzamiento.
export default function Newsletter({ lang, dict }: { lang: Locale; dict: Dictionary["newsletter"] }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    const value = email.trim();
    if (!EMAIL.test(value)) {
      setStatus("invalid");
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: value, locale: lang }),
      });
      if (res.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus(res.status === 400 ? "invalid" : "error");
      }
    } catch {
      setStatus("error");
    }
  }

  const message =
    status === "success" ? dict.success
    : status === "invalid" ? dict.invalid
    : status === "error" ? dict.error
    : "";

  return (
    <section id="newsletter" className="py-[var(--space-8)] md:py-[var(--space-10)] bg-primary-container">
      <div className="max-w-[var(--container-max)] mx-auto px-[var(--space-4)] md:px-[var(--space-5)] grid grid-cols-1 md:grid-cols-2 gap-[var(--space-8)] items-center">
        <div>
          <h2
            className="font-display font-bold text-on-primary-container leading-[1.1] mb-[var(--space-3)]"
            style={{ fontSize: "clamp(24px, 3vw, 34px)" }}
          >
            {dict.title}
          </h2>
          <p className="text-on-primary-container/75 text-[15px] leading-relaxed">{dict.body}</p>
        </div>

        <form onSubmit={submit} noValidate className="flex flex-col gap-[var(--space-3)]">
          <label htmlFor="newsletter-email" className="text-[13px] font-medium text-on-primary-container">
            {dict.label}
          </label>
          <div className="flex flex-col sm:flex-row gap-[var(--space-3)]">
            <input
              id="newsletter-email"
              type="email"
              autoComplete="email"
              placeholder={dict.placeholder}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-invalid={status === "invalid"}
              aria-describedby="newsletter-status"
              className="flex-1 border border-surface-variant bg-surface px-[var(--space-4)] py-[var(--space-3)] text-[15px] text-on-surface outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
              style={{ borderRadius: "var(--radius-md)" }}
            />
            <button
              type="submit"
              disabled={status === "sending"}
              className="btn bg-primary text-on-primary px-[var(--space-6)] py-[var(--space-3)] text-[15px] font-semibold hover:bg-primary-dark disabled:opacity-60"
            >
              {status === "sending" ? dict.sending : dict.submit}
            </button>
          </div>
          <p
            id="newsletter-status"
            role="status"
            className={`min-h-[20px] text-[13px] font-medium ${status === "success" ? "text-success" : "text-error"}`}
          >
            {message}
          </p>
          <p className="text-on-primary-container/60 text-xs">{dict.privacy}</p>
        </form>
      </div>
    </section>
  );
}
