const Tabs = ({ activeTab, setActiveTab }) => (
    <div className="mb-6 flex space-x-4 justify-center">
      <button
        onClick={() => setActiveTab("courses")}
        className={`px-6 py-3 font-medium rounded-md transition-all duration-300 ${activeTab === "courses" ? "bg-blue-600 text-white" : "bg-gray-200"}`}
      >
        Courses
      </button>
      <button
        onClick={() => setActiveTab("students")}
        className={`px-6 py-3 font-medium rounded-md transition-all duration-300 ${activeTab === "students" ? "bg-blue-600 text-white" : "bg-gray-200"}`}
      >
        Students
      </button>
      <button
        onClick={() => setActiveTab("grades")}
        className={`px-6 py-3 font-medium rounded-md transition-all duration-300 ${activeTab === "grades" ? "bg-blue-600 text-white" : "bg-gray-200"}`}
      >
        Grades
      </button>
    </div>
  );
  
  export default Tabs;
  