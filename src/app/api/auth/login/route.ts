// app/api/auth/login/route.ts
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  // A simple (insecure) state string for demo purposes.
  const state = Math.random().toString(36).substring(2, 15);
  const scope = "user-read-email user-read-private";

  const params = new URLSearchParams({
    client_id: process.env.SPOTIFY_CLIENT_ID || "",
    response_type: "code",
    redirect_uri: process.env.SPOTIFY_REDIRECT_URI || "",
    scope,
    state
  });

  const spotifyAuthURL = `https://accounts.spotify.com/authorize?${params.toString()}`;
  return NextResponse.redirect(spotifyAuthURL);
}
