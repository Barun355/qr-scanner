import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { account } from "../utils/appwrite";
import { toast } from "react-toastify";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSignIn = async (e: any) => {
    e.preventDefault();

    try {
      setLoading(true);
      const user = await account.createEmailPasswordSession(email, password);
      setLoading(false);
      if (user?.$id) {
        setEmail("");
        setPassword("");
        navigate("/dashboard");
      }
    } catch (err: any) {
      toast.error(err?.message);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 p-4">
      <div className="w-full max-w-xs md:max-w-md lg:max-w-lg bg-gray-800 p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-white mb-6 text-center">
          Sign In
        </h2>
        <form onSubmit={handleSignIn}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-400 text-sm mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-gray-400 text-sm mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className={`w-full p-3 bg-indigo-600 text-white rounded hover:bg-indigo-500 focus:outline-none ${
              loading && "cursor-wait"
            }`}
            aria-disabled={loading}
          >
            Sign In
          </button>
        </form>
        <p className="mt-4 text-gray-400 text-center">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-indigo-400 hover:underline">
            Get one
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
