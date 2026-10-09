// Isotipo de CraveWallet: billetera con la marca de acento.
export default function Logo() {
  return (
    <div
      className="w-7 h-7 bg-primary text-on-primary flex items-center justify-center"
      style={{ borderRadius: "var(--radius-md)" }}
    >
      <svg width="14" height="14" viewBox="0 0 18 18" fill="none" aria-hidden="true">
        <path
          d="M3 6h12a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1z"
          fill="currentColor"
          fillOpacity="0.95"
        />
        <path d="M5 6V4a4 4 0 0 1 8 0v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M9 4L13 1" stroke="var(--color-accent)" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </div>
  );
}
