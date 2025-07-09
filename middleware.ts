import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import i18nConfig from "./next-i18next.config";

export function middleware(request: NextRequest) {
  // Get locale from cookie or fallback to default locale or 'kr'
  const locale =
    request.cookies.get("NEXT_LOCALE")?.value ||
    i18nConfig.i18n?.defaultLocale ||
    "kr";

  const response = NextResponse.next();

  // Set content language header for SEO and accessibility
  response.headers.set("Content-Language", locale);

  // Set cookie if missing, with secure options (adjust domain/path as needed)
  if (!request.cookies.has("NEXT_LOCALE")) {
    response.cookies.set("NEXT_LOCALE", locale, {
      path: "/",
      httpOnly: false,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24 * 365, // 1 year
    });
  }

  return response;
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
