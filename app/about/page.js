import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function AboutPage() {
  return (
    <div>
      <Navbar />
      <section className="p-8 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">About RentEasy</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          RentEasy is a modern rental and property buying platform designed to
          make finding your dream home simple and secure. Whether you are
          looking for affordable apartments, luxury houses, or short-term stays,
          we’ve got you covered.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Our mission is to connect tenants, buyers, and property owners in a
          safe and easy-to-use environment. With just a few clicks, you can rent,
          buy, or contact agents directly through our platform.
        </p>
      </section>
      <Footer />
    </div>
  );
}
