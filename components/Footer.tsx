import type { Dictionary } from "@/lib/i18n";
import Logo from "./Logo";

export default function Footer({ dict }: { dict: Dictionary["footer"] }) {
  return (
    <footer className="bg-surface border-t border-surface-variant py-[var(--space-8)]">
      <div className="max-w-[var(--container-max)] mx-auto px-[var(--space-4)] md:px-[var(--space-5)]">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-[var(--space-8)]">
          {/* Logo + tagline */}
          <div>
            <div className="flex items-center gap-[var(--space-2)] mb-[var(--space-2)]">
              <Logo />
              <span className="font-display font-semibold text-[15px] text-on-surface">
                CraveWallet
              </span>
            </div>
            <p className="text-on-surface-variant text-sm max-w-xs leading-relaxed">
              {dict.tagline}
            </p>
            <p className="text-on-surface-variant text-xs mt-[var(--space-1)]">{dict.by}</p>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap gap-x-[var(--space-6)] gap-y-[var(--space-2)]">
            {dict.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-on-surface-variant hover:text-on-surface"
                style={{ transition: "color 160ms var(--ease-out)" }}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-[var(--space-8)] pt-[var(--space-5)] border-t border-surface-variant flex flex-col sm:flex-row justify-between items-center gap-[var(--space-2)]">
          <p className="text-on-surface-variant text-xs">
            © {new Date().getFullYear()} CraveWallet · {dict.credits}
          </p>
          <p className="text-on-surface-variant text-xs">
            {dict.designSystem}
          </p>
        </div>
      </div>
    </footer>
  );
}
