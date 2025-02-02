// app/page.tsx
import { cookies } from "next/headers";
import Login from "./components/Login";
import MoodCards from "./components/MoodCards";

export default async function HomePage() {
  const cookieStore = await cookies();
  const token = cookieStore.get("spotifyToken")?.value;

  if (!token) {
    return <Login />;
  }

  return <MoodCards />;
}
