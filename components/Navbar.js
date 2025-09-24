"use client";

import { useAuth } from "../lib/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo / Brand Name */}
        <a href="/home" className="text-2xl font-bold text-green-700">
          EasRent
        </a>

        {/* ✅ Only show Sign Out button if logged in */}
        {user && (
          <button
            onClick={logout}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Sign Out
          </button>
        )}
      </div>
    </nav>
  );
}
