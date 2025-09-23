import Navbar from "../../components/Navbar";

export default function LoginPage() {
  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6 text-center">Welcome Back</h2>
          <form className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 border rounded"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-2 border rounded"
            />
            <button className="w-full bg-green-600 text-white p-2 rounded">
              Log In
            </button>
          </form>
          <p className="text-center mt-4 text-sm">
            Don’t have an account?{" "}
            <a href="/signup" className="text-orange-500 font-semibold">
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
