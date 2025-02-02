// app/api/auth/callback/route.ts
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get("code");

  if (!code) {
    return NextResponse.json({ error: "No code provided" }, { status: 400 });
  }

  const body = new URLSearchParams({
    grant_type: "authorization_code",
    code,
    redirect_uri: process.env.SPOTIFY_REDIRECT_URI || "",
    client_id: process.env.SPOTIFY_CLIENT_ID || "",
    client_secret: process.env.SPOTIFY_CLIENT_SECRET || ""
  });

  const tokenResponse = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: body.toString()
  });

  const data = await tokenResponse.json();

  if (data.access_token) {
    const res = NextResponse.redirect(new URL("/", request.url));
    res.cookies.set("spotifyToken", data.access_token, { path: "/", httpOnly: true });
    return res;
  } else {
    return NextResponse.json({ error: "Failed to obtain access token", details: data }, { status: 500 });
  }
}
