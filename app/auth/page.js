"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { auth, googleProvider } from "../../lib/firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import Navbar from "../../components/Navbar";

export default function AuthPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  // Sign in with email
  const handleEmailLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Signed in successfully ✅");
      router.push("/home");
    } catch (err) {
      if (err.code === "auth/user-not-found") {
        // Auto-create user if not exists
        await createUserWithEmailAndPassword(auth, email, password);
        alert("Account created and signed in ✅");
        router.push("/home");
      } else {
        alert(err.message);
      }
    }
  };

  // Google Sign In
  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      alert("Signed in with Google ✅");
      router.push("/home");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div>
      <Navbar />
      <section className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
        <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6 text-center">
            Sign in to EasRent
          </h2>

          {/* Email Login */}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full mb-4 p-3 border rounded"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full mb-4 p-3 border rounded"
          />
          <button
            onClick={handleEmailLogin}
            className="w-full bg-green-600 text-white py-3 rounded mb-4"
          >
            Sign in with Email
          </button>

          {/* Google Login */}
          <button
            onClick={handleGoogleLogin}
            className="w-full bg-red-500 text-white py-3 rounded flex items-center justify-center gap-2"
          >
            <img
              src="https://www.svgrepo.com/show/355037/google.svg"
              alt="Google"
              className="w-5 h-5"
            />
            Sign in with Google
          </button>
        </div>
      </section>
    </div>
  );
}
