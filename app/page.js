"use client";

import { useRouter } from "next/navigation";

export default function LandingPage() {
  const router = useRouter();

  return (
    <div className="pb-24">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center text-center">
        <div className="absolute inset-0 bg-[url('/hero.jpg')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 text-white max-w-2xl px-4 sm:px-8">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold">
            Find Your Dream Home Today
          </h1>
          <p className="mt-4 text-base sm:text-lg">
            Rent or Buy apartments, houses, and more — all in one place
          </p>

          {/* Sign In Button (always shows on Landing Page) */}
          <button
            onClick={() => router.push("/auth")}
            className="mt-6 bg-green-600 px-6 py-3 text-white font-semibold rounded hover:bg-green-700 transition w-full sm:w-auto"
          >
            Sign In
          </button>

          {/* Search Bar */}
          <div className="mt-6 bg-white rounded-lg flex items-center overflow-hidden max-w-xl mx-auto flex-wrap">
            <input
              type="text"
              placeholder="Enter a location..."
              className="p-3 flex-1 text-gray-800 outline-none"
            />
            <select className="p-3 text-gray-800 outline-none">
              <option>Rent</option>
              <option>Buy</option>
            </select>
            <button className="bg-orange-500 px-6 py-3 text-white font-semibold w-full sm:w-auto">
              Search
            </button>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="p-8 text-center">
        <h2 className="text-2xl font-bold mb-6">Browse by Category</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="bg-green-600 text-white p-8 rounded-xl shadow hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-2">For Rent</h3>
            <p>Affordable apartments and houses for rent.</p>
          </div>
          <div className="bg-orange-500 text-white p-8 rounded-xl shadow hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-2">For Sale</h3>
            <p>Buy your next home with ease.</p>
          </div>
          <div className="bg-gray-700 text-white p-8 rounded-xl shadow hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-2">Luxury</h3>
            <p>Discover premium listings with top features.</p>
          </div>
        </div>
      </section>

      {/* Featured Listings */}
      <section className="p-8 bg-gray-50">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Featured Listings
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="bg-white rounded-xl shadow p-4 hover:shadow-lg transition"
            >
              <img
                src={`/house${item}.jpg`}
                alt="house"
                className="rounded-lg mb-4 h-48 w-full object-cover"
              />
              <h3 className="font-semibold">2BR Apartment in Lagos</h3>
              <p className="text-green-600 font-bold">₦1,200,000/year</p>
              <button className="mt-3 w-full bg-green-600 text-white py-2 rounded">
                View Details
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center p-6 mt-12">
        <p>© {new Date().getFullYear()} RentEasy. All rights reserved.</p>
      </footer>
    </div>
  );
}
