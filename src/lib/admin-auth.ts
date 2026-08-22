import { cookies } from "next/headers";
import crypto from "crypto";

const COOKIE_NAME = "admin_session";

function createToken() {
  const secret = process.env.ADMIN_SECRET;

  if (!secret) {
    throw new Error("ADMIN_SECRET is not configured");
  }

  return crypto
    .createHmac("sha256", secret)
    .update("admin-authenticated")
    .digest("hex");
}

export async function isAdminAuthenticated() {
  const cookieStore = await cookies();

  const cookie = cookieStore.get(COOKIE_NAME);

  if (!cookie) {
    return false;
  }

  const expectedToken = createToken();

  return cookie.value === expectedToken;
}

export function getAdminToken() {
  return createToken();
}
