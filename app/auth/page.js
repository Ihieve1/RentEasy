"use client";

import { auth, googleProvider } from "../../lib/firebase";
import { signInWithPopup } from "firebase/auth";
import { useRouter } from "next/navigation";

export default function AuthPage() {
  const router = useRouter();

 const handleGoogleLogin = async () => {
  try {
    await signInWithPopup(auth, googleProvider); // ✅ use googleProvider
    router.push("/home");
  } catch (error) {
    console.error("Login failed", error);
  }
};

  return (
    <div className="h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-2xl font-bold mb-6">Sign In</h1>
        <button
          onClick={handleGoogleLogin}
          className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700"
        >
          Sign in with Google
        </button>
      </div>
    </div>
  );
}
