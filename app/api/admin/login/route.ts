import { NextResponse } from "next/server";
import { getAdminToken } from "@/src/lib/admin-auth";

export async function POST(request: Request) {
  const body = await request.json();

  const password = body.password;

  if (!password) {
    return NextResponse.json({ error: "Mot de passe requis" }, { status: 400 });
  }

  if (password !== process.env.ADMIN_PASSWORD) {
    return NextResponse.json(
      { error: "Mot de passe incorrect 2" },
      { status: 401 },
    );
  }

  const response = NextResponse.json({
    success: true,
  });

  response.cookies.set("admin_session", getAdminToken(), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 7,
    path: "/",
  });

  return response;
}
