import { NextRequest, NextResponse } from "next/server";
import AuthService from "./modules/auth/services/auth-service";

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};

const publicRoutes = ["/", "/pages/sign-up", "/pages/sign-in"];

export async function middleware(req: NextRequest) {
  const pathname = req.nextUrl.pathname;

  if (publicRoutes.includes(pathname)) {
    return NextResponse.next();
  }

  const session = await AuthService.isSessionValid(); // Validar a sessão do JWT

  if (!session) {
    return NextResponse.redirect(new URL("/pages/sign-in", req.url));
  }

  return NextResponse.next();
}
