
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminDashboard from "./components/Admin/AdminDashboard";
import TeacherDashboard from "./components/Teacher/TeacherDashboard";

import Login from "./pages/Login";
import Navbar from './components/Navbar';
import Signup from "./pages/Signup";
import Home from "./pages/Home"; 
import ProtectedRoute from "./routes/ProtectedRoute";
import AdminProfile from "./components/Admin/AdminProfile";
import TeacherProfile from "./components/Teacher/TeacherProfile";
import StudentProfile from "./components/StudentProfile";

import StudentDashboard from "./components/StudentDashboard";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
import AuthProvider from "./context/AuthContext";


function App() {
  return (
    <AuthProvider> 
       <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          
          {/* Protected Routes for Role-based Dashboards */}
          <Route 
            path="/admin" 
            element={<ProtectedRoute role="admin"><AdminDashboard /></ProtectedRoute>} 
          />
          <Route 
            path="/teacher" 
            element={<ProtectedRoute role="teacher"><TeacherDashboard /></ProtectedRoute>} 
          />
          <Route 
            path="/student" 
            element={<ProtectedRoute role="student"><StudentDashboard /></ProtectedRoute>} 
          />

          {/* Profile Routes */}
          <Route 
            path="/profile/admin" 
            element={<ProtectedRoute role="admin"><AdminProfile /></ProtectedRoute>} 
          />
          <Route 
            path="/profile/teacher" 
            element={<ProtectedRoute role="teacher"><TeacherProfile /></ProtectedRoute>} 
          />
          <Route 
            path="/profile/student" 
            element={<ProtectedRoute role="student"><StudentProfile /></ProtectedRoute>} 
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
