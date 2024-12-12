
import React, { useState } from "react";
import Courses from "./Courses";
import Students from "./Students";
import Teachers from "./Teachers";

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("teachers");

  return (
    <div className="p-4 max-w-screen-xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-center">Admin Dashboard</h1>

      {/* Tab Navigation */}
      <div className="flex justify-center gap-4 mb-6">
      <button
          onClick={() => setActiveTab("teachers")}
          className={`px-4 py-2 rounded ${activeTab === "teachers" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
        >
          Teachers
        </button>
        <button
          onClick={() => setActiveTab("courses")}
          className={`px-4 py-2 rounded ${activeTab === "courses" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
        >
          Courses
        </button>
        <button
          onClick={() => setActiveTab("students")}
          className={`px-4 py-2 rounded ${activeTab === "students" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
        >
          Students
        </button>
      
      </div>

      {/* Tab Content */}
      {activeTab === "courses" && <Courses />}
      {activeTab === "students" && <Students />}
      {activeTab === "teachers" && <Teachers />}
    </div>
  );
};

export default AdminDashboard;
