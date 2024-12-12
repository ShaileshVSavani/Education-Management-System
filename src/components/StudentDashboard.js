
import React, { useState, useEffect } from "react";

const StudentDashboard = () => {
  const [courses, setCourses] = useState([]);
  const [grades, setGrades] = useState({});
  const [students, setStudents] = useState([]);
  const [user, setUser] = useState(null);
  const [assignments, setAssignments] = useState({});

  useEffect(() => {
    // Load data from localStorage
    const storedUser = JSON.parse(localStorage.getItem("user_data"))?.user;
    const storedCourses = JSON.parse(localStorage.getItem("courses")) || [];
    const storedGrades = JSON.parse(localStorage.getItem("grades")) || {};
    const storedStudents = JSON.parse(localStorage.getItem("students")) || [];

    setUser(storedUser);
    setCourses(storedCourses);
    setGrades(storedGrades);
    setStudents(storedStudents);
  }, []);

  const handleAssignmentSubmit = (courseId) => {
    const assignmentFile = prompt("Please upload your assignment (provide a file path or URL):");

    if (assignmentFile) {
      setAssignments((prev) => ({
        ...prev,
        [courseId]: assignmentFile,
      }));
      alert("Assignment submitted successfully!");
    }
  };

  if (!user) {
    return <div className="text-center py-10 text-lg">Please log in to see your grades</div>;
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Student Dashboard</h1>
      <h2 className="text-2xl font-medium text-gray-700 mb-6">Your Grades:</h2>

      <div className="overflow-x-auto bg-white shadow-md rounded-lg">
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-blue-100">
              <th className="py-2 px-4 text-center">Course Name</th>
              <th className="py-2 px-4 text-center">Student Name</th>
              <th className="py-2 px-4 text-center">Grade</th>
              <th className="py-2 px-4 text-center">Submit Assignment</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(grades).map(([courseId, courseGrades]) => {
              // Find the course title using courseId
              const course = courses.find((course) => course.id.toString() === courseId);
              const courseName = course ? course.title : "Unknown Course";

              return Object.entries(courseGrades).map(([studentId, grade]) => {
                // Find the student name using studentId
                const student = students.find((student) => student.id.toString() === studentId);
                const studentName = student ? student.name : "Unknown Student";

                return (
                  <tr key={`${courseId}-${studentId}`} className="border-b">
                    <td className="py-2 px-4 text-center">{courseName}</td>
                    <td className="py-2 px-4 text-center">{studentName}</td>
                    <td className="py-2 px-4 text-center">{grade}</td>
                    <td className="py-2 px-4 text-center">
                      <button
                        onClick={() => handleAssignmentSubmit(courseId)}
                        className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-700"
                      >
                        Submit Assignment
                      </button>
                    </td>
                  </tr>
                );
              });
            })}
          </tbody>
        </table>
      </div>

      <div className="mt-8">
        <h3 className="text-xl font-medium text-gray-700">Submitted Assignments:</h3>
        <ul className="mt-2">
          {Object.entries(assignments).map(([courseId, assignment]) => (
            <li key={courseId} className="py-2">
              <span className="font-semibold">{courseId}:</span> {assignment}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default StudentDashboard;
