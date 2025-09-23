import Navbar from "../../components/Navbar";

export default function PaymentPage() {
  return (
    <div>
      <Navbar />
      <section className="p-8 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Payment</h2>
        <p className="text-center text-gray-600 mb-8">
          Complete your payment securely to finalize your booking.
        </p>
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
    </div>
  );
}
