
import React, { useEffect, useState } from "react";

const StudentTable = () => {
  const [students, setStudents] = useState([]);
  const [courses, setCourses] = useState([]);
  const [grades, setGrades] = useState({});

  // Load data from localStorage
  const loadFromLocalStorage = (key, fallback) => {
    try {
      const data = localStorage.getItem(key);
      return data ? JSON.parse(data) : fallback;
    } catch (error) {
      console.error(`Error loading ${key} from localStorage`, error);
      return fallback;
    }
  };

  useEffect(() => {
    const storedStudents = loadFromLocalStorage("students", []);
    const storedCourses = loadFromLocalStorage("courses", []);
    const storedGrades = loadFromLocalStorage("grades", {});

    setStudents(storedStudents);
    setCourses(storedCourses);
    setGrades(storedGrades);
  }, []);

  return (
    <div className="mb-6 p-4 max-w-screen-xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">Student Progress</h2>

      <div className="overflow-x-auto shadow-lg rounded-lg border border-gray-200">
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-blue-100">
              <th className="px-6 py-3 text-left">Student Name</th>
              <th className="px-6 py-3 text-left">Enrolled Courses</th>
              <th className="px-6 py-3 text-left">Student Progress</th>
            </tr>
          </thead>
          <tbody>
            {students.length > 0 ? (
              students.map((student) => (
                <tr key={student.id} className="border-b border-gray-200">
                  {/* Student Name */}
                  <td className="px-6 py-4">{student.name}</td>

                  {/* Enrolled Courses */}
                  <td className="px-6 py-4">
                    {student.enrollments && student.enrollments.length > 0
                      ? student.enrollments
                          .map((courseId) => {
                            // Convert to number if necessary
                            const normalizedCourseId = parseInt(courseId, 10);
                            const course = courses.find(
                              (c) => c.id === normalizedCourseId
                            );
                            return course ? course.title : "Unknown Course";
                          })
                          .join(", ")
                      : "Not enrolled"}
                  </td>

                  {/* Student Progress (Grades) */}
                  <td className="px-6 py-4">
                    {student.enrollments && student.enrollments.length > 0
                      ? student.enrollments
                          .map((courseId) => {
                            // Convert to number if necessary
                            const normalizedCourseId = parseInt(courseId, 10);
                            const course = courses.find(
                              (c) => c.id === normalizedCourseId
                            );

                            // Get the student's grade for the course from localStorage
                            const courseGrades = grades[normalizedCourseId];
                            const studentGrade = courseGrades
                              ? courseGrades[student.id]
                              : "Not Graded";

                            return (
                              <div key={courseId}>
                                {course ? `${course.title}: ${studentGrade}` : "Unknown Course"}
                              </div>
                            );
                          })
                          .reduce((prev, curr) => [prev, ", ", curr]) // Join course grades with commas
                      : "No grades available"}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" className="px-6 py-4 text-center">
                  No students found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentTable;
