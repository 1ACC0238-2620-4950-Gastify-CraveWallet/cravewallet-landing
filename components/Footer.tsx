const NAV_LINKS = [
  { label: "El problema", href: "#problem" },
  { label: "Solución", href: "#solution" },
  { label: "Preview", href: "#preview" },
  { label: "Premium", href: "#premium" },
  { label: "Descarga", href: "#descarga" },
];

export default function Footer() {
  return (
    <footer className="bg-white border-t border-[#E2E8F0] py-10">
      <div className="max-w-[1280px] mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          {/* Logo + tagline */}
          <div>
            <div className="flex items-center gap-2 mb-2">
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
              <span className="font-display font-semibold text-[15px] text-[#0F172A]">
                CraveWallet
              </span>
            </div>
            <p className="text-[#64748B] text-[13px] max-w-xs leading-relaxed">
              Empoderamiento financiero para nativos digitales peruanos.
            </p>
            <p className="text-[#64748B] text-[12px] mt-1">by Gastify</p>
          </div>

          {/* Nav links — match chapter 3 exactly */}
          <nav className="flex flex-wrap gap-x-7 gap-y-2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[13px] text-[#64748B] hover:text-[#0F172A] transition-colors"
                style={{ transition: "color 160ms cubic-bezier(0.23,1,0.32,1)" }}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-8 pt-6 border-t border-[#E2E8F0] flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-[#64748B] text-[12px]">
            © {new Date().getFullYear()} CraveWallet · Proyecto universitario — UPC · Ingeniería de Software
          </p>
          <p className="text-[#64748B] text-[12px]">
            Design System v1.0 · Material Design 3
          </p>
        </div>
      </div>
    </footer>
  );
}
