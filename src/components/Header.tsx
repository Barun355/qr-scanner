import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"; // Icons for hamburger and close
import { account } from "../utils/appwrite";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    account
      .get()
      .then((res) => {
        if (res.$id) {
          setLoggedIn(true);
        }
      })
      .catch((error) => (error.code === 401 ? setLoggedIn(false) : null));
  }, []);

  return (
    <header className="bg-gray-900 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">QR Code Generator</h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex md:items-center space-x-6 *:cursor-pointer *:flex *:justify-center *:items-center">
          <Link to="/" className="text-gray-400 hover:text-white">
            Home
          </Link>
          <Link to="#features" className="text-gray-400 hover:text-white">
            Features
          </Link>
          <Link to="#contact" className="text-gray-400 hover:text-white">
            Contact
          </Link>
          {
            !loggedIn ? (
              <>
          <Link to="/signin" className="text-gray-400 hover:text-white">
            Sign In
          </Link>
          <Link to="/signup" className="text-gray-400 hover:text-white">
            Sign Up
          </Link>
              </>
            ): (
              <Link
                to="/dashboard"
                className="bg-blue-800 hover:bg-blue-500 w-fit py-2 px-4 rounded-lg"
              >
                Dashboard
              </Link>
            )
          }
          
        </nav>

        {/* Hamburger Button (visible on mobile) */}
        <button className="text-white md:hidden" onClick={toggleSidebar}>
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Sidebar for Mobile Devices */}
      <div
        className={`fixed top-0 left-0 h-full w-3/4 bg-gray-800 text-white transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-50 md:hidden`}
      >
        <div className="p-4">
          <h2 className="text-2xl font-bold">QR Code Generator</h2>
          <nav className="mt-8 flex flex-col space-y-4">
            <Link
              to="/"
              onClick={toggleSidebar}
              className="hover:text-gray-400"
            >
              Home
            </Link>
            <Link
              to="#features"
              onClick={toggleSidebar}
              className="hover:text-gray-400"
            >
              Features
            </Link>
            <Link
              to="#contact"
              onClick={toggleSidebar}
              className="hover:text-gray-400"
            >
              Contact
            </Link>
            {!loggedIn ? (
              <>
                <Link
                  to="/signin"
                  onClick={toggleSidebar}
                  className="hover:text-gray-400"
                >
                  Sign In
                </Link>
                <Link
                  to="/signup"
                  onClick={toggleSidebar}
                  className="hover:text-gray-400"
                >
                  Sign Up
                </Link>
              </>
            ) : (
              <Link
                to="/dashboard"
                onClick={toggleSidebar}
                className="bg-blue-800 hover:bg-blue-500 w-fit py-2 px-4 rounded-lg"
              >
                Dashboard
              </Link>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
