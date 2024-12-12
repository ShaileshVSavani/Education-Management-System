import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";


const AdminProfile = () => {
  const { user } = useContext(AuthContext); 

  if (!user || user.role !== "admin") {
    return <div>Access Denied</div>; 
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Admin Profile</h1>
      <p>Email: {user.email}</p>
      <p>Role: {user.role}</p>
      <div className="mt-4">
        <Link
          to="/admin"
        
          className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
        >
          Go to Dashboard
        </Link>
      </div>
    </div>
  );
};

export default AdminProfile;
