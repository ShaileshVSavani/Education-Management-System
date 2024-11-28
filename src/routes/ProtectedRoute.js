
import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";

const ProtectedRoute = ({ children, role }) => {
  const { user } = useContext(AuthContext); // Get the logged-in user from context

  if (!user) {
    return <Navigate to="/login" replace />; // If the user is not logged in, redirect to login
  }

  if (user.role !== role) {
    return <Navigate to="/" replace />; // If the user doesn't have the required role, redirect to home
  }

  return children; // If the user is logged in and has the correct role, show the page
};

export default ProtectedRoute;
