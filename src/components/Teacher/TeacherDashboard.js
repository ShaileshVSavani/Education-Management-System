
import React, { useState } from "react";
import Tabs from "./Tabs";
import CourseTable from "./CourseTable";
import StudentTable from "./StudentTable";
import GradeManagement from "./GradeManagement";

const TeacherDashboard = () => {
  const [courses] = useState([
    { id: 1, title: "Mathematics", description: "Algebra and Geometry" },
    { id: 2, title: "Science", description: "Physics and Chemistry" },
  ]);
  const [students] = useState([
    { id: 1, name: "ABC", courseId: 1, progress: "75%" },
    { id: 2, name: "MNP", courseId: 1, progress: "80%" },
    { id: 3, name: "XYZ", courseId: 2, progress: "60%" },
  ]);
  const [grades, setGrades] = useState({
    1: { 1: "A", 2: "B+" },
    2: { 3: "C" },
  });

  const [activeTab, setActiveTab] = useState("courses");

  const handleUploadContent = (courseId) => {
    alert(`Content uploaded for course ID: ${courseId}`);
  };

  const handleGradeChange = (studentId, courseId, newGrade) => {
    setGrades((prevGrades) => ({
      ...prevGrades,
      [courseId]: {
        ...prevGrades[courseId],
        [studentId]: newGrade,
      },
    }));
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Teacher Dashboard</h1>

      {/* Tab Navigation */}
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Tab Content */}
      {activeTab === "courses" && (
        <CourseTable courses={courses} handleUploadContent={handleUploadContent} />
      )}
      {activeTab === "students" && (
        <StudentTable students={students} courses={courses} />
      )}
      {activeTab === "grades" && (
        <GradeManagement
          courses={courses}
          students={students}
          grades={grades}
          handleGradeChange={handleGradeChange}
        />
      )}
    </div>
  );
};

export default TeacherDashboard;
