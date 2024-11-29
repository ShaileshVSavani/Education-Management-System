
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify"; 
const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("student"); 
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

   
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const existingUser = users.find(user => user.email === email);
    if (existingUser) {
      toast.error("User with this email already exists."); 
      return;
    }

 
    const newUser = { email, password, role };
    users.push(newUser);
   
    localStorage.setItem("users", JSON.stringify(users));

    toast.success("Account created successfully!");

  
    if (role === "admin") {
      navigate("/admin");
    } else if (role === "teacher") {
      navigate("/teacher");
    } else if (role === "student") {
      navigate("/student");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold text-center mb-4">Create Your Account</h1>
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
        <div>
          <label className="block text-sm font-medium text-gray-700">Role</label>
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mt-1"
          >
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
            <option value="admin">Admin</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full py-2 bg-blue-600 text-white rounded-lg mt-4 hover:bg-blue-700"
        >
          Sign Up
        </button>
      </form>

      <div className="text-center mt-4 text-sm text-gray-600">
        <p>
          Already have an account?{" "}
          <a
            href="/login"
            className="text-blue-600 hover:underline"
          >
            Login here
          </a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
