import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function middleware(req: NextRequest) {
  const token = cookies().get("token");

  if (!token) {
    return NextResponse.redirect(new URL("/login", req.url));
  } else {
    const next = NextResponse.next();
    next.headers.set("Authorization", `Bearer ${token}`);
    return next;
  }
}

export const config = {
  matcher: "/dashboard",
};
