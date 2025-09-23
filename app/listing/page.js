import Navbar from "../../components/Navbar";
import Link from "next/link";

export default function ListingsPage() {
  const properties = [
    {
      id: 1,
      title: "2BR Apartment in Lagos",
      price: "$1,200/month",
      image: "/house1.jpg",
    },
    {
      id: 2,
      title: "Self-Contain in Abuja",
      price: "$800/month",
      image: "/house2.jpg",
    },
    {
      id: 3,
      title: "3BR Duplex in Port Harcourt",
      price: "$2,500/month",
      image: "/house3.jpg",
    },
  ];

  return (
    <div>
      <Navbar />
      <section className="p-8">
        <h2 className="text-3xl font-bold mb-6 text-center">Available Listings</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {properties.map((property) => (
            <div
              key={property.id}
              className="bg-white rounded-xl shadow p-4 hover:shadow-lg transition"
            >
              <img
                src={property.image}
                alt={property.title}
                className="rounded-lg mb-4 h-48 w-full object-cover"
              />
              <h3 className="font-semibold">{property.title}</h3>
              <p className="text-green-600 font-bold">{property.price}</p>

              {/* 🔗 Link to property details */}
              <Link
                href={`/property/${property.id}`}
                className="mt-3 block w-full text-center bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
