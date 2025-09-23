import Navbar from "../../components/Navbar";

export default function ContactPage() {
  return (
    <div>
      <Navbar />
      <section className="p-8 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Contact Us</h2>
        <p className="text-center text-gray-600 mb-8">
          Have questions or need support? Fill out the form below and our team will get back to you.
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
          <textarea
            placeholder="Your Message"
            className="w-full p-3 border rounded h-32"
          ></textarea>
          <button className="bg-green-600 text-white px-6 py-3 rounded w-full">
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
}
