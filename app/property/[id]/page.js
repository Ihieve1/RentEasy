import Navbar from "../../../components/Navbar";
import Link from "next/link";

export default function PropertyDetails({ params }) {
  const { id } = params;

  const properties = {
    1: {
      title: "2BR Apartment in Lagos",
      price: "$1,200/month",
      image: "/house1.jpg",
      desc: "Spacious 2-bedroom apartment with modern facilities.",
    },
    2: {
      title: "Self-Contain in Abuja",
      price: "$800/month",
      image: "/house2.jpg",
      desc: "Affordable single room with private facilities.",
    },
    3: {
      title: "3BR Duplex in Port Harcourt",
      price: "$2,500/month",
      image: "/house3.jpg",
      desc: "Luxury duplex with 3 bedrooms and a large living space.",
    },
  };

  const property =
    properties[id] || {
      title: "Property Not Found",
      price: "-",
      image: "/hero.jpg",
      desc: "No details available.",
    };

  return (
    <div>
      <Navbar />
      <section className="p-8 max-w-4xl mx-auto">
        <img
          src={property.image}
          alt={property.title}
          className="rounded-xl mb-6 w-full h-80 object-cover"
        />
        <h2 className="text-3xl font-bold mb-2">{property.title}</h2>
        <p className="text-green-600 font-bold text-xl">{property.price}</p>
        <p className="mt-4 text-gray-700">{property.desc}</p>

        <div className="mt-6 flex space-x-4">
          {/* Pass property details in URL query */}
          <Link
            href={`/payment?title=${encodeURIComponent(
              property.title
            )}&price=${encodeURIComponent(property.price)}`}
            className="bg-orange-500 text-white px-6 py-3 rounded"
          >
            Proceed to Payment
          </Link>

          <a
            href="/contact"
            className="bg-green-600 text-white px-6 py-3 rounded"
          >
            Contact Agent
          </a>
        </div>
      </section>
    </div>
  );
}
