import { NextResponse } from "next/server";

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

// Validates the subscription request. Storing the address requires the
// CraveWallet backend, which is not deployed yet (Sprint 2).
export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const email = typeof body?.email === "string" ? body.email.trim() : "";

  if (!EMAIL.test(email)) {
    return NextResponse.json({ message: "El correo no tiene un formato válido." }, { status: 400 });
  }

  return NextResponse.json({ message: "¡Listo! Te avisaremos del lanzamiento." }, { status: 201 });
}
