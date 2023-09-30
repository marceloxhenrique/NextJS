import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { verifyAuth } from "@/libs/auth";

export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const isPublicPath = path === "/login" || path === "/signup";
  const token = request.cookies.get("token")?.value || "";

  const verifiedToken =
    token &&
    (await verifyAuth(token).catch((err) => {
      console.log(err);
    }));

  const url = request.nextUrl;
  url.pathname = "/";
  if (isPublicPath && verifiedToken) {
    return NextResponse.redirect(url);
  }
  if (!isPublicPath && !verifiedToken) {
    return NextResponse.redirect(new URL("/login", request.nextUrl));
  }
}

export const config = {
  matcher: ["/", "/signup", "/login", "/profile/:path*"],
};
