// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import i18nConfig from "./next-i18next.config";

export function middleware(request: NextRequest) {
  // Get the locale from the request, or default to 'kr'
  let locale =
    request.cookies.get("NEXT_LOCALE")?.value || i18nConfig.i18n.defaultLocale;

  // Set html lang attribute
  const response = NextResponse.next();
  response.headers.set("Content-Language", locale);

  // Update cookie if needed
  if (!request.cookies.has("NEXT_LOCALE")) {
    response.cookies.set("NEXT_LOCALE", locale);
  }

  return response;
}

export const config = {
  // Match all request paths except for the ones starting with:
  // - api (API routes)
  // - _next/static (static files)
  // - _next/image (image optimization files)
  // - favicon.ico (favicon file)
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
