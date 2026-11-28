import { NextResponse } from "next/server";

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const API_URL = process.env.CRAVEWALLET_API_URL ?? "https://cravewallet-api-av2.onrender.com";

// US40: validates the address and stores it through the CraveWallet API
// (POST /api/v1/launch-subscribers). The browser only talks to this route,
// so the API does not need to allow the landing page origin.
export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const email = typeof body?.email === "string" ? body.email.trim() : "";
  const locale = body?.locale === "en" ? "en" : "es";

  if (!EMAIL.test(email) || email.length > 254) {
    return NextResponse.json({ error: "invalid_email" }, { status: 400 });
  }

  try {
    const res = await fetch(`${API_URL}/api/v1/launch-subscribers`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, locale }),
      signal: AbortSignal.timeout(20_000),
    });
    if (res.status === 400) return NextResponse.json({ error: "invalid_email" }, { status: 400 });
    if (!res.ok) return NextResponse.json({ error: "unavailable" }, { status: 502 });
    return NextResponse.json({ ok: true }, { status: 202 });
  } catch {
    return NextResponse.json({ error: "unavailable" }, { status: 502 });
  }
}
