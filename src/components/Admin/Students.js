

// import React, { useState, useEffect, useContext } from "react";
// import { AuthContext } from "../../context/AuthContext";

// const Students = () => {
//   const { students, updateState } = useContext(AuthContext);
//   const [courses, setCourses] = useState([]); // Initializing with an empty array
//   const [formState, setFormState] = useState({ name: "", courseId: "" });
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   // Fetch courses from localStorage on component mount
//   useEffect(() => {
//     const storedCourses = JSON.parse(localStorage.getItem("courses")) || [];
//     setCourses(storedCourses);

//     // Fetch students from localStorage on mount
//     const storedStudents = JSON.parse(localStorage.getItem("students")) || [];
//     updateState("students", storedStudents); // Initialize students state from localStorage
//   }, [updateState]); // Only run once on mount

//   const handleAddStudent = (e) => {
//     e.preventDefault();
//     const newStudent = {
//       id: Date.now(),
//       name: formState.name,
//       enrollments: formState.courseId ? [formState.courseId] : [], // Enroll student to selected course
//     };

//     const updatedStudents = [...students, newStudent];
//     updateState("students", updatedStudents); // Update AuthContext
//     localStorage.setItem("students", JSON.stringify(updatedStudents)); // Save to localStorage

//     setFormState({ name: "", courseId: "" });
//     setIsModalOpen(false); // Close the modal after adding the student
//   };

//   const handleDeleteStudent = (id) => {
//     const updatedStudents = students.filter((student) => student.id !== id);
//     updateState("students", updatedStudents); // Update AuthContext
//     localStorage.setItem("students", JSON.stringify(updatedStudents)); // Save to localStorage
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 p-6">
//       <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
//         <h2 className="text-2xl font-semibold text-center mb-6">Manage Students</h2>

//         {/* Add Student Button */}
//         <button
//           onClick={() => setIsModalOpen(true)}
//           className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
//         >
//           Add Student
//         </button>

//         {/* Students Table */}
//         <div className="overflow-x-auto mt-6">
//           <table className="w-full border-collapse border border-gray-300">
//             <thead className="bg-blue-100">
//               <tr>
//                 <th className="border border-gray-300 px-4 py-2">ID</th>
//                 <th className="border border-gray-300 px-4 py-2">Name</th>
//                 <th className="border border-gray-300 px-4 py-2">Enrolled Course</th>
//                 <th className="border border-gray-300 px-4 py-2">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {students && students.length > 0 ? (
//                 students.map((student) => (
//                   <tr key={student.id} className="text-center">
//                     <td className="border border-gray-300 px-4 py-2">{student.id}</td>
//                     <td className="border border-gray-300 px-4 py-2">{student.name}</td>
//                     <td className="border border-gray-300 px-4 py-2">
//                       {student.enrollments.length > 0
//                         ? courses.find((course) => course.id === parseInt(student.enrollments[0]))?.title || "Unknown"
//                         : "Not Enrolled"}
//                     </td>
//                     <td className="border border-gray-300 px-4 py-2">
//                       <button
//                         onClick={() => handleDeleteStudent(student.id)}
//                         className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
//                       >
//                         Delete
//                       </button>
//                     </td>
//                   </tr>
//                 ))
//               ) : (
//                 <tr>
//                   <td colSpan="4" className="text-center p-4 text-gray-500 font-medium">
//                     No students added yet.
//                   </td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         </div>
//       </div>

//       {/* Modal */}
//       {isModalOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
//           <div className="bg-white rounded-lg shadow-lg w-96 p-6 relative">
//             <h3 className="text-lg font-semibold text-gray-700 mb-4">Add Student</h3>
//             <form onSubmit={handleAddStudent} className="space-y-4">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">Student Name</label>
//                 <input
//                   type="text"
//                   value={formState.name}
//                   onChange={(e) => setFormState({ ...formState, name: e.target.value })}
//                   className="w-full p-2 mt-1 border border-gray-300 rounded focus:ring focus:ring-blue-300 focus:outline-none"
//                   placeholder="Enter student name"
//                   required
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">Enroll in Course</label>
//                 <select
//                   value={formState.courseId}
//                   onChange={(e) => setFormState({ ...formState, courseId: e.target.value })}
//                   className="w-full p-2 mt-1 border border-gray-300 rounded focus:ring focus:ring-blue-300 focus:outline-none"
//                   required
//                 >
//                   <option value="">Select a Course</option>
//                   {courses.length > 0 ? (
//                     courses.map((course) => (
//                       <option key={course.id} value={course.id}>
//                         {course.title}
//                       </option>
//                     ))
//                   ) : (
//                     <option value="">No Courses Available</option>
//                   )}
//                 </select>
//               </div>
//               <div className="flex justify-end space-x-4">
//                 <button
//                   type="button"
//                   onClick={() => setIsModalOpen(false)}
//                   className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 transition"
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   type="submit"
//                   className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
//                 >
//                   Add Student
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Students;







import React, { useState, useEffect } from "react";

const Students = () => {
  const [students, setStudents] = useState([]);
  const [courses, setCourses] = useState([]);
  const [formState, setFormState] = useState({ name: "", courseId: "" });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [sortField, setSortField] = useState(null);
  const [sortOrder, setSortOrder] = useState("asc");
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const storedCourses = JSON.parse(localStorage.getItem("courses")) || [];
    const storedStudents = JSON.parse(localStorage.getItem("students")) || [];
    setCourses(storedCourses);
    setStudents(storedStudents);
  }, []);

  const handleAddStudent = (e) => {
    e.preventDefault();
    const newStudent = {
      id: Date.now(),
      name: formState.name,
      enrollments: formState.courseId ? [formState.courseId] : [],
    };

    const updatedStudents = [...students, newStudent];
    setStudents(updatedStudents);
    localStorage.setItem("students", JSON.stringify(updatedStudents));

    setFormState({ name: "", courseId: "" });
    setIsModalOpen(false);
  };

  const handleDeleteStudent = (id) => {
    const updatedStudents = students.filter((student) => student.id !== id);
    setStudents(updatedStudents);
    localStorage.setItem("students", JSON.stringify(updatedStudents));
  };

  const sortStudents = (field) => {
    const order = sortField === field && sortOrder === "asc" ? "desc" : "asc";
    setSortField(field);
    setSortOrder(order);

    setStudents([
      ...students.sort((a, b) => {
        const valueA = a[field]?.toString().toLowerCase();
        const valueB = b[field]?.toString().toLowerCase();
        if (valueA < valueB) return order === "asc" ? -1 : 1;
        if (valueA > valueB) return order === "asc" ? 1 : -1;
        return 0;
      }),
    ]);
  };

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold text-center mb-6">Manage Students</h2>

        {/* Filter Input */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="Filter by name"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded focus:ring focus:ring-blue-300 focus:outline-none"
          />
        </div>

        {/* Add Student Button */}
        <button
          onClick={() => setIsModalOpen(true)}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          Add Student
        </button>

        {/* Students Table */}
        <div className="overflow-x-auto mt-6">
          <table className="w-full border-collapse border border-gray-300">
            <thead className="bg-blue-100">
              <tr>
                <th
                  onClick={() => sortStudents("id")}
                  className="border border-gray-300 px-4 py-2 cursor-pointer"
                >
                  ID {sortField === "id" && (sortOrder === "asc" ? "↑" : "↓")}
                </th>
                <th
                  onClick={() => sortStudents("name")}
                  className="border border-gray-300 px-4 py-2 cursor-pointer"
                >
                  Name {sortField === "name" && (sortOrder === "asc" ? "↑" : "↓")}
                </th>
                <th className="border border-gray-300 px-4 py-2">Enrolled Course</th>
                <th className="border border-gray-300 px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredStudents.length > 0 ? (
                filteredStudents.map((student) => (
                  <tr key={student.id} className="text-center">
                    <td className="border border-gray-300 px-4 py-2">{student.id}</td>
                    <td className="border border-gray-300 px-4 py-2">{student.name}</td>
                    <td className="border border-gray-300 px-4 py-2">
                      {student.enrollments.length > 0
                        ? courses.find((course) => course.id === parseInt(student.enrollments[0]))?.title || "Unknown"
                        : "Not Enrolled"}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      <button
                        onClick={() => handleDeleteStudent(student.id)}
                        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="text-center p-4 text-gray-500 font-medium">
                    No students added yet.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-96 p-6 relative">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">Add Student</h3>
            <form onSubmit={handleAddStudent} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Student Name</label>
                <input
                  type="text"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="w-full p-2 mt-1 border border-gray-300 rounded focus:ring focus:ring-blue-300 focus:outline-none"
                  placeholder="Enter student name"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Enroll in Course</label>
                <select
                  value={formState.courseId}
                  onChange={(e) => setFormState({ ...formState, courseId: e.target.value })}
                  className="w-full p-2 mt-1 border border-gray-300 rounded focus:ring focus:ring-blue-300 focus:outline-none"
                >
                  <option value="">Select a Course</option>
                  {courses.length > 0 ? (
                    courses.map((course) => (
                      <option key={course.id} value={course.id}>
                        {course.title}
                      </option>
                    ))
                  ) : (
                    <option value="">No Courses Available</option>
                  )}
                </select>
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                >
                  Add Student
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Students;
