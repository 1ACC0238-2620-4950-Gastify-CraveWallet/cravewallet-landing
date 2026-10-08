const questions = [
  {
    q: "¿CraveWallet cancela mis suscripciones por mí?",
    a: "No. CraveWallet te avisa antes de cada renovación para que decidas a tiempo, pero la cancelación se hace directamente con cada servicio.",
  },
  {
    q: "¿Tengo que conectar mi cuenta bancaria?",
    a: "No. Tú registras tus suscripciones y gastos en la aplicación; CraveWallet no accede a tus cuentas ni a tus tarjetas.",
  },
  {
    q: "¿Cómo calcula cuánto pago en soles?",
    a: "Usa una cotización del dólar con su fecha de actualización para estimar el monto. Es una referencia: el cargo final depende del tipo de cambio que aplique tu banco.",
  },
  {
    q: "¿Cuándo recibo el aviso de un cobro?",
    a: "24 horas antes de la fecha de renovación que registraste, como un recordatorio en el calendario de tu celular, si le das permiso a la aplicación.",
  },
  {
    q: "¿Qué incluye el plan gratuito?",
    a: "Hasta 5 suscripciones activas, alertas antes de cada cobro, la estimación en soles y el registro de gastos de delivery. Premium agrega registro ilimitado de suscripciones, analítica avanzada y recordatorios prioritarios.",
  },
];

export default function Faq() {
  return (
    <section id="preguntas" className="py-24 md:py-32 bg-white">
      <div className="max-w-[1280px] mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-[1fr_1.6fr] gap-12">
        <div>
          <p className="text-[#3B4FD8] text-xs font-semibold uppercase tracking-[0.12em] mb-4">
            Preguntas frecuentes
          </p>
          <h2
            className="font-display font-bold text-[#0F172A] leading-[1.08]"
            style={{ fontSize: "clamp(28px, 4vw, 44px)" }}
          >
            Lo que suelen preguntarnos.
          </h2>
        </div>

        <div className="flex flex-col divide-y divide-[#E2E8F0] border-y border-[#E2E8F0]">
          {questions.map((item) => (
            <details key={item.q} className="group py-5">
              <summary className="flex items-center justify-between gap-6 cursor-pointer list-none font-display font-semibold text-[17px] text-[#0F172A]">
                {item.q}
                <span
                  aria-hidden="true"
                  className="shrink-0 text-[#3B4FD8] text-[22px] leading-none transition-transform duration-200 group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="text-[#64748B] text-[15px] leading-relaxed mt-3 pr-10">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
