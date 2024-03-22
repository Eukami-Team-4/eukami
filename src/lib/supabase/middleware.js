import { createServerClient } from "@supabase/ssr";
import { NextResponse } from "next/server";

export async function updateSession(request) {
  let response = NextResponse.next({
    request: {
      headers: request.headers,
    },
  });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    {
      cookies: {
        get(name) {
          return request.cookies.get(name)?.value;
        },
        set(name, value, options) {
          request.cookies.set({
            name,
            value,
            ...options,
          });
          response = NextResponse.next({
            request: {
              headers: request.headers,
            },
          });
          response.cookies.set({
            name,
            value,
            ...options,
          });
        },
        remove(name, options) {
          request.cookies.set({
            name,
            value: "",
            ...options,
          });
          response = NextResponse.next({
            request: {
              headers: request.headers,
            },
          });
          response.cookies.set({
            name,
            value: "",
            ...options,
          });
        },
      },
    }
  );

  try {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    // If user is visiting any admin routes, redirect them to the login page if they're not signed in
    if (
      !user &&
      request.nextUrl.pathname.startsWith("/admin") &&
      request.nextUrl.pathname !== "/admin/login" &&
      request.nextUrl.pathname !== "/admin/sign-up"
    ) {
      console.log("User is not signed in");
      return NextResponse.redirect(`${request.nextUrl.origin}/admin/login`);
    }

    // If user is visiting any admin routes, redirect them to the login page if they're not signed in
    if (
      !user &&
      request.nextUrl.pathname.startsWith("/myaccount") &&
      request.nextUrl.pathname !== "/myaccount/login" &&
      request.nextUrl.pathname !== "/myaccount/sign-up"
    ){
      console.log("User is not signed in");
      return NextResponse.redirect(`${request.nextUrl.origin}/myaccount/login`);
    }

    // If user is signed in, hide the login page
    if (user && request.nextUrl.pathname === "/admin/login") {
      return NextResponse.redirect(`${request.nextUrl.origin}/admin`);
    }
    if (user && request.nextUrl.pathname === "/myaccount/login") {
        return NextResponse.redirect(`${request.nextUrl.origin}/myaccount/profile`);
      }

    // If none of the above conditions are met, continue to the requested route
    return NextResponse.next();
  } catch (error) {
    console.error("Error in middleware:", error);
    // Handle the error as needed
  }
  return response;
}
