import React, { useState } from "react";

const StudentDashboard = () => {
  const [courses, setCourses] = useState([
    { id: 1, title: "Mathematics", grade: "A" },
    { id: 2, title: "Science", grade: "B+" },
  ]);

  const handleAssignmentSubmit = (courseId) => {
    alert(`Assignment submitted for course ID: ${courseId}`);
  };

  return (
    <div className="p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12">
      <h1 className="text-2xl sm:text-3xl font-bold mb-4 text-center text-gray-800">
        Student Dashboard
      </h1>

      <h2 className="text-xl font-semibold mb-4 text-gray-700">Enrolled Courses</h2>

      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse border border-gray-300">
          <thead>
            <tr className="bg-blue-100">
              <th className="border border-gray-300 px-4 py-3 text-center">ID</th>
              <th className="border border-gray-300 px-4 py-3 text-center">Title</th>
              <th className="border border-gray-300 px-4 py-3 text-center">Grade</th>
              <th className="border border-gray-300 px-4 py-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course) => (
              <tr key={course.id} className="border-t">
                <td className="border border-gray-300 px-4 py-3 text-center">{course.id}</td>
                <td className="border border-gray-300 px-4 py-3 text-center">{course.title}</td>
                <td className="border border-gray-300 px-4 py-3 text-center">{course.grade}</td>
                <td className="border border-gray-300 px-4 py-3 text-center">
                  <button
                    onClick={() => handleAssignmentSubmit(course.id)}
                    className="px-4 py-2 text-white bg-green-500 rounded-md hover:bg-green-600"
                  >
                    Submit Assignment
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentDashboard;
