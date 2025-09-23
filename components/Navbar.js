import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 shadow bg-white">
      {/* Logo */}
      <Link href="/" className="text-2xl font-bold text-green-600">
        RentEasy
      </Link>

      {/* Links */}
      <div className="hidden md:flex space-x-6">
        <Link href="/" className="hover:text-orange-500">Home</Link>
        <Link href="/listings" className="hover:text-orange-500">Listings</Link>
        <Link href="/contact" className="hover:text-orange-500">Contact</Link>
      </div>

      {/* Auth Buttons */}
      <div className="space-x-4">
        <Link
          href="/login"
          className="text-gray-700 font-semibold hover:text-green-600"
        >
          Sign In
        </Link>
        <Link
          href="/signup"
          className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
        >
          Sign Up
        </Link>
      </div>
    </nav>
  );
}
