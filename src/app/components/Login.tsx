// app/components/Login.tsx
import Link from "next/link";

export default function Login() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl text-black font-bold mb-4">Welcome to Cartomancer</h1>
      <p className="mb-8 text-black text-lg">Connect your Spotify account to get started.</p>
      <Link href="/api/auth/login">
        <span className="cursor-pointer px-6 py-3 bg-green-500 text-white rounded hover:bg-green-600">
          Login with Spotify
        </span>
      </Link>
    </div>
  );
}
