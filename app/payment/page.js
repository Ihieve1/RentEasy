"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Navbar from "../../components/Navbar";

function PaymentContent() {
  const searchParams = useSearchParams();
  const propertyTitle = searchParams.get("title");
  const propertyPrice = searchParams.get("price");

  return (
    <section className="p-8 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">Payment</h2>

      {/* Show property details if passed from property page */}
      {propertyTitle && (
        <div className="mb-6 p-4 bg-gray-100 rounded">
          <h3 className="font-semibold text-lg">{propertyTitle}</h3>
          <p className="text-green-600 font-bold">{propertyPrice}</p>
        </div>
      )}

      <form className="space-y-4 bg-white shadow-md p-6 rounded-xl">
        <input
          type="text"
          placeholder="Full Name"
          className="w-full p-3 border rounded"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 border rounded"
        />
        <input
          type="text"
          placeholder="Card Number"
          className="w-full p-3 border rounded"
        />
        <div className="flex space-x-4">
          <input
            type="text"
            placeholder="MM/YY"
            className="w-1/2 p-3 border rounded"
          />
          <input
            type="text"
            placeholder="CVV"
            className="w-1/2 p-3 border rounded"
          />
        </div>
        <button className="bg-green-600 text-white px-6 py-3 rounded w-full">
          Pay Now
        </button>
      </form>
    </section>
  );
}

export default function PaymentPage() {
  return (
    <div>
      <Navbar />
      <Suspense fallback={<div className="p-8 text-center">Loading payment details...</div>}>
        <PaymentContent />
      </Suspense>
    </div>
  );
}
