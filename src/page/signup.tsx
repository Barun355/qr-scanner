import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { account, ID } from '../utils/appwrite';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate()


  const handleSignUp = async (e: any) => {
    e.preventDefault();
    const user = await account.create(ID.unique(), email, password)
    if(user){
        setEmail("")
        setPassword("")
        navigate('/signin')
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 p-4">
      <div className="w-full max-w-xs md:max-w-md lg:max-w-lg bg-gray-800 p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-white mb-6 text-center">Sign Up</h2>
        <form onSubmit={handleSignUp}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-400 text-sm mb-2">Email</label>
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
            <label htmlFor="password" className="block text-gray-400 text-sm mb-2">Password</label>
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
            className="w-full p-3 bg-indigo-600 text-white rounded hover:bg-indigo-500 focus:outline-none"
          >
            Sign Up
          </button>
        </form>
        <p className="mt-4 text-gray-400 text-center">
          Already have an account?{' '}
          <Link to="/signin" className="text-indigo-400 hover:underline">Sign In</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
