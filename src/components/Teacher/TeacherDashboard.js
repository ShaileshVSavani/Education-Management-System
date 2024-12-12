
import React, { useState, useContext } from "react";
import Tabs from "./Tabs";
import CourseTable from "./CourseTable";
import GradeManagement from "./GradeManagement";
import StudentTable from "./StudentTable";
import { AuthContext } from "../../context/AuthContext";

const TeacherDashboard = () => {
  const { courses, students, grades, setGrades } = useContext(AuthContext);
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
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />

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
