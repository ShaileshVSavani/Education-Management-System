
import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext"; // Import AuthContext

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { login } = useContext(AuthContext); // Access login function from AuthContext

  const handleSubmit = (e) => {
    e.preventDefault();

    // Get all users from localStorage
    const users = JSON.parse(localStorage.getItem("users"));

    if (users) {
      // Find user by email and password
      const user = users.find(user => user.email === email && user.password === password);

      if (user) {
        // Log in the user using the login function from AuthContext
        login(user);

        // Redirect based on the user's role
        if (user.role === "admin") {
          navigate("/admin");
        } else if (user.role === "teacher") {
          navigate("/teacher");
        } else if (user.role === "student") {
          navigate("/student");
        }
      } else {
        alert("Invalid credentials.");
      }
    } else {
      alert("No users found.");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold text-center mb-4">Login</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mt-1"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mt-1"
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 bg-blue-600 text-white rounded-lg mt-4 hover:bg-blue-700"
        >
          Login
        </button>
      </form>

      <div className="text-center mt-4 text-sm text-gray-600">
        <p>
          Don’t have an account?{" "}
          <a
            href="/signup"
            className="text-blue-600 hover:underline"
          >
            Sign Up Here
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
