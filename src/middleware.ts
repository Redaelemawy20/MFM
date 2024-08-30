import createMiddleware from "next-intl/middleware";
import { locales /* ... */ } from "./config";
import { auth } from "@/auth";
export default auth((req) => {
  const { nextUrl } = req;
  const excludePattern = "^(/(" + locales.join("|") + "))?/dashboard/?.*?$";
  const publicPathnameRegex = RegExp(excludePattern, "i");
  const isPublicPage = !publicPathnameRegex.test(req.nextUrl.pathname);
  const isAuthenticated = !!req.auth;
  if (isPublicPage || isAuthenticated) return ntlMiddelware(req);

  return Response.redirect(new URL("/login", nextUrl));
});

export const config = {
  // Skip paths that should not be internationalized
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};

const ntlMiddelware = createMiddleware({
  // A list of all locales that are supported
  locales,
  localePrefix: "as-needed",
  // Used when no locale matches
  defaultLocale: "ar",
});

// export const config = {
//   // Match only internationalized pathnames
//   matcher: ["/((?!api|static|.*\\..*|_next).*)"],
// };
