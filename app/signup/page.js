import Navbar from "../../components/Navbar";

export default function SignUpPage() {
  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6 text-center">
            Create Your Account
          </h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-2 border rounded"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 border rounded"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full p-2 border rounded"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-2 border rounded"
            />
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full p-2 border rounded"
            />
            <button className="w-full bg-orange-500 text-white p-2 rounded">
              Sign Up
            </button>
          </form>
          <p className="text-center mt-4 text-sm">
            Already have an account?{" "}
            <a href="/login" className="text-green-600 font-semibold">
              Log In
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
