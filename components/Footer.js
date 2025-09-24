"use client";

import { useAuth } from "../lib/AuthContext";

export default function Footer() {
  const { user, logout } = useAuth();

  return (
    <footer className="bg-green-700 text-white py-6 fixed bottom-0 left-0 w-full shadow-lg">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        <p className="text-sm">
          © {new Date().getFullYear()} EasRent. All rights reserved.
        </p>

        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="/home" className="hover:underline">
            Home
          </a>
          <a href="/contact" className="hover:underline">
            Contact
          </a>
          <a href="/listings" className="hover:underline">
            Properties
          </a>

          {/* ✅ Dynamic Sign In / Sign Out */}
          {user ? (
            <button
              onClick={logout}
              className="bg-red-500 px-3 py-1 rounded hover:bg-red-600"
            >
              Sign Out
            </button>
          ) : (
            <a href="/auth" className="hover:underline">
              Sign In
            </a>
          )}
        </div>
      </div>
    </footer>
  );
}
