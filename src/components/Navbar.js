
import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext"; // Import AuthContext

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useContext(AuthContext); // Get user and logout function from context

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    logout(); // Call the logout function from context
  };

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-indigo-600 p-4 shadow-lg">
      <div className="flex items-center justify-between max-w-6xl mx-auto">
        {/* Logo */}
        <Link to="/" className="text-white text-2xl font-extrabold">
          <span className="text-yellow-400">Edu</span>Hub
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {user ? (
            <>
              {user.role === "admin" && (
                <Link
                  to="/profile/admin"
                  className="text-white text-lg hover:text-yellow-400 transition-all duration-300"
                >
                  Profile
                </Link>
              )}
              {user.role === "teacher" && (
                <Link
                  to="/profile/teacher"
                  className="text-white text-lg hover:text-yellow-400 transition-all duration-300"
                >
                  Profile
                </Link>
              )}
              {user.role === "student" && (
                <Link
                  to="/profile/student"
                  className="text-white text-lg hover:text-yellow-400 transition-all duration-300"
                >
                  Profile
                </Link>
              )}
              <button
                onClick={handleLogout}
                className="text-white text-lg hover:text-yellow-400 transition-all duration-300"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="text-white text-lg hover:text-yellow-400 transition-all duration-300"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="text-white text-lg hover:text-yellow-400 transition-all duration-300"
              >
                SignUp
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden ${isOpen ? "block" : "hidden"} bg-blue-700 py-4 mt-4 rounded-lg shadow-xl`}
      >
        <div className="flex flex-col items-center space-y-4">
          {user ? (
            <>
              {user.role === "admin" && (
                <Link
                  to="/profile/admin"
                  className="text-white text-lg hover:text-yellow-400 transition-all duration-300"
                >
                  Profile
                </Link>
              )}
              {user.role === "teacher" && (
                <Link
                  to="/profile/teacher"
                  className="text-white text-lg hover:text-yellow-400 transition-all duration-300"
                >
                  Profile
                </Link>
              )}
              {user.role === "student" && (
                <Link
                  to="/profile/student"
                  className="text-white text-lg hover:text-yellow-400 transition-all duration-300"
                >
                  Profile
                </Link>
              )}
              <button
                onClick={handleLogout}
                className="text-white text-lg hover:text-yellow-400 transition-all duration-300"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="text-white text-lg hover:text-yellow-400 transition-all duration-300"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="text-white text-lg hover:text-yellow-400 transition-all duration-300"
              >
                SignUp
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
