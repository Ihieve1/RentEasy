"use client";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useState } from "react";

export default function ListingsPage() {
  const [filter, setFilter] = useState("all");

  const listings = [
    {
      id: 1,
      title: "2-Bedroom Apartment in Lekki",
      price: 1200000,
      location: "Lagos",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    },
    {
      id: 2,
      title: "Self Contain in Ikeja",
      price: 350000,
      location: "Lagos",
      image:
        "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800&q=80",
    },
    {
      id: 3,
      title: "Luxury Duplex in Abuja",
      price: 3500000,
      location: "Abuja",
      image:
        "https://images.unsplash.com/photo-1628744446164-bb6e89cf4031?w=800&q=80",
    },
    {
      id: 4,
      title: "1-Bedroom Apartment in Port Harcourt",
      price: 800000,
      location: "Port Harcourt",
      image:
        "https://images.unsplash.com/photo-1600607687920-4ce965f69a11?w=800&q=80",
    },
  ];

  const filteredListings =
    filter === "all"
      ? listings
      : listings.filter((item) => item.location === filter);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow px-6 md:px-12 py-12 bg-gray-50">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Available Listings 🏘️
        </h1>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <button
            onClick={() => setFilter("all")}
            className={`px-4 py-2 rounded-lg ${
              filter === "all"
                ? "bg-green-700 text-white"
                : "bg-gray-200 text-gray-800"
            }`}
          >
            All
          </button>
          <button
            onClick={() => setFilter("Lagos")}
            className={`px-4 py-2 rounded-lg ${
              filter === "Lagos"
                ? "bg-green-700 text-white"
                : "bg-gray-200 text-gray-800"
            }`}
          >
            Lagos
          </button>
          <button
            onClick={() => setFilter("Abuja")}
            className={`px-4 py-2 rounded-lg ${
              filter === "Abuja"
                ? "bg-green-700 text-white"
                : "bg-gray-200 text-gray-800"
            }`}
          >
            Abuja
          </button>
          <button
            onClick={() => setFilter("Port Harcourt")}
            className={`px-4 py-2 rounded-lg ${
              filter === "Port Harcourt"
                ? "bg-green-700 text-white"
                : "bg-gray-200 text-gray-800"
            }`}
          >
            Port Harcourt
          </button>
        </div>

        {/* Listings Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredListings.map((house) => (
            <div
              key={house.id}
              className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden"
            >
              <img
                src={house.image}
                alt={house.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-5">
                <h2 className="text-lg font-semibold">{house.title}</h2>
                <p className="text-green-700 font-bold mt-2">
                  ₦{house.price.toLocaleString()} / year
                </p>
                <p className="text-gray-500 text-sm">{house.location}</p>
                <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
