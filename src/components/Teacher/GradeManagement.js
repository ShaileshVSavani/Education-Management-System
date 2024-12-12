


// import React, { useState, useEffect } from "react";

// const GradeManagement = ({ courses, handleGradeChange }) => {
//   const [students, setStudents] = useState([]);
//   const [grades, setGrades] = useState({}); // Local state for grades
//   const [error, setError] = useState({});

//   // Load students and grades from localStorage on component mount
//   useEffect(() => {
//     const storedStudents = JSON.parse(localStorage.getItem("students")) || [];
//     const storedGrades = JSON.parse(localStorage.getItem("grades")) || {};
//     setStudents(storedStudents);
//     setGrades(storedGrades);
//   }, []);

//   // Function to handle grade change and store it in localStorage
//   const handleGradeBlur = (studentId, courseId, grade) => {
//     const validGrade = /^[A-Fa-f]{1}$/;
//     if (validGrade.test(grade)) {
//       // Update the grade in local state
//       const updatedGrades = {
//         ...grades,
//         [courseId]: {
//           ...grades[courseId],
//           [studentId]: grade,
//         },
//       };

//       // Update grades in localStorage
//       localStorage.setItem("grades", JSON.stringify(updatedGrades));

//       // Update the local state with the new grades
//       setGrades(updatedGrades);

//       setError((prev) => ({ ...prev, [`${courseId}-${studentId}`]: "" })); // Clear error
//     } else {
//       setError((prev) => ({
//         ...prev,
//         [`${courseId}-${studentId}`]: "Invalid grade. Please enter a grade from A to F.",
//       }));
//     }
//   };

//   return (
//     <div>
//       <h2 className="text-xl font-semibold mb-2 text-gray-700">Manage Grades</h2>
//       {courses.map((course) => (
//         <div key={course.id} className="mb-6">
//           <h3 className="text-lg font-medium mb-2">{course.title}</h3>
//           <table className="table-auto w-full border-collapse border border-gray-300">
//             <thead>
//               <tr className="bg-blue-100">
//                 <th className="border border-gray-300 px-6 py-3">Student Name</th>
//                 <th className="border border-gray-300 px-6 py-3">Current Grade</th>
//                 <th className="border border-gray-300 px-6 py-3">Update Grade</th>
//               </tr>
//             </thead>
//             <tbody>
//               {students
//                 .filter((student) => student.enrollments.includes(String(course.id))) // Convert course.id to string
//                 .map((student) => {
//                   const currentGrade = grades[course.id]?.[student.id] || "Not Graded";
//                   return (
//                     <tr key={student.id}>
//                       <td className="border border-gray-300 px-6 py-3 text-center">{student.name}</td>
//                       <td className="border border-gray-300 px-6 py-3 text-center">{currentGrade}</td>
//                       <td className="border border-gray-300 px-6 py-3 text-center">
//                         <input
//                           type="text"
//                           placeholder="Enter Grade"
//                           className="p-2 border rounded-md"
//                           onBlur={(e) => handleGradeBlur(student.id, course.id, e.target.value)}
//                         />
//                       </td>
//                     </tr>
//                   );
//                 })}
//             </tbody>
//           </table>
//         </div>
//       ))}
//       {Object.values(error).some((err) => err) && (
//         <p className="text-red-500 mt-4">{Object.values(error).join(", ")}</p>
//       )}
//     </div>
//   );
// };

// export default GradeManagement;








import React, { useState, useEffect } from "react";

const GradeManagement = ({ courses, handleGradeChange }) => {
  const [students, setStudents] = useState([]);
  const [grades, setGrades] = useState({});
  const [error, setError] = useState({});

  useEffect(() => {
    const storedStudents = JSON.parse(localStorage.getItem("students")) || [];
    const storedGrades = JSON.parse(localStorage.getItem("grades")) || {};
    setStudents(storedStudents);
    setGrades(storedGrades);
  }, []);

  const handleGradeBlur = (studentId, courseId, grade) => {
    const validGrade = /^[A-Fa-f]{1}$/;
    if (validGrade.test(grade)) {
      const updatedGrades = {
        ...grades,
        [courseId]: {
          ...grades[courseId],
          [studentId]: grade,
        },
      };
      localStorage.setItem("grades", JSON.stringify(updatedGrades));
      setGrades(updatedGrades);
      setError((prev) => ({ ...prev, [`${courseId}-${studentId}`]: "" }));
    } else {
      setError((prev) => ({
        ...prev,
        [`${courseId}-${studentId}`]: "Invalid grade. Please enter a grade from A to F.",
      }));
    }
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <h2 className="text-lg sm:text-xl font-semibold mb-4 text-gray-700">
        Manage Grades
      </h2>
      {courses.map((course) => (
        <div key={course.id} className="mb-8">
          <h3 className="text-md sm:text-lg font-medium mb-3 text-gray-800">
            {course.title}
          </h3>
          <div className="overflow-x-auto">
            <table className="table-auto w-full border-collapse border border-gray-300 text-sm sm:text-base">
              <thead>
                <tr className="bg-blue-100">
                  <th className="border border-gray-300 px-3 sm:px-6 py-2 sm:py-3">
                    Student Name
                  </th>
                  <th className="border border-gray-300 px-3 sm:px-6 py-2 sm:py-3">
                    Current Grade
                  </th>
                  <th className="border border-gray-300 px-3 sm:px-6 py-2 sm:py-3">
                    Update Grade
                  </th>
                </tr>
              </thead>
              <tbody>
                {students
                  .filter((student) => student.enrollments.includes(String(course.id)))
                  .map((student) => {
                    const currentGrade = grades[course.id]?.[student.id] || "Not Graded";
                    return (
                      <tr key={student.id} className="odd:bg-white even:bg-gray-50">
                        <td className="border border-gray-300 px-3 sm:px-6 py-2 sm:py-3 text-center">
                          {student.name}
                        </td>
                        <td className="border border-gray-300 px-3 sm:px-6 py-2 sm:py-3 text-center">
                          {currentGrade}
                        </td>
                        <td className="border border-gray-300 px-3 sm:px-6 py-2 sm:py-3 text-center">
                          <input
                            type="text"
                            placeholder="Enter Grade"
                            className="p-2 sm:p-3 border rounded-md w-full focus:ring-2 focus:ring-blue-500"
                            onBlur={(e) => handleGradeBlur(student.id, course.id, e.target.value)}
                          />
                          {error[`${course.id}-${student.id}`] && (
                            <p className="text-red-500 text-xs mt-1">
                              {error[`${course.id}-${student.id}`]}
                            </p>
                          )}
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      ))}
      {Object.values(error).some((err) => err) && (
        <p className="text-red-500 text-sm sm:text-base mt-6">
          {Object.values(error).join(", ")}
        </p>
      )}
    </div>
  );
};

export default GradeManagement;
