"use client";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useAuth } from "../../lib/AuthContext";

export default function HomePage() {
  const { user } = useAuth();

  const listings = [
    {
      id: 1,
      title: "2-Bedroom Apartment in Lekki",
      price: "₦1,200,000 / year",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    },
    {
      id: 2,
      title: "Self Contain in Ikeja",
      price: "₦350,000 / year",
      image:
        "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800&q=80",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow px-6 md:px-12 py-12 bg-gray-50 pb-24">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-10">
          Featured Apartments 🏡
        </h1>

        {/* 🏠 Apartments grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {listings.map((house) => (
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
                <p className="text-green-700 font-bold mt-2">{house.price}</p>
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
