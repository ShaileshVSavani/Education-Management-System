// const CourseTable = ({ courses, handleUploadContent }) => (
//     <div className="mb-6">
//       <h2 className="text-xl font-semibold mb-2 text-gray-700">Assigned Courses</h2>
//       <table className="table-auto w-full border-collapse border border-gray-300">
//         <thead>
//           <tr className="bg-blue-100">
//             <th className="border border-gray-300 px-6 py-3">ID</th>
//             <th className="border border-gray-300 px-6 py-3">Title</th>
//             <th className="border border-gray-300 px-6 py-3">Description</th>
//             <th className="border border-gray-300 px-6 py-3">Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {courses.map((course) => (
//             <tr key={course.id}>
//               <td className="border border-gray-300 px-6 py-3">{course.id}</td>
//               <td className="border border-gray-300 px-6 py-3">{course.title}</td>
//               <td className="border border-gray-300 px-6 py-3">{course.description}</td>
//               <td className="border border-gray-300 px-6 py-3">
//                 <button
//                   onClick={() => handleUploadContent(course.id)}
//                   className="px-4 py-2 text-white bg-blue-600 rounded-md"
//                 >
//                   Upload Content
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
  
//   export default CourseTable;
  



import React, { useState, useEffect } from "react";

const CourseTable = ({ handleUploadContent }) => {
  const [courses, setCourses] = useState([]);

  // Load courses from localStorage when the component mounts
  useEffect(() => {
    const storedCourses = JSON.parse(localStorage.getItem("courses")) || [];
    setCourses(storedCourses);
  }, []);

  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold mb-2 text-gray-700">Assigned Courses</h2>
      <table className="table-auto w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-blue-100">
            <th className="border border-gray-300 px-6 py-3">ID</th>
            <th className="border border-gray-300 px-6 py-3">Title</th>
            <th className="border border-gray-300 px-6 py-3">Description</th>
            <th className="border border-gray-300 px-6 py-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course) => (
            <tr key={course.id}>
              <td className="border border-gray-300 px-6 py-3 text-center">{course.id}</td>
              <td className="border border-gray-300 px-6 py-3 text-center">{course.title}</td>
              <td className="border border-gray-300 px-6 py-3 text-center">{course.description}</td>
              <td className="border border-gray-300 px-6 py-3 text-center">
                <button
                  onClick={() => handleUploadContent(course.id)}
                  className="px-4 py-2 text-white bg-blue-600 rounded-md"
                >
                  Upload Content
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CourseTable;
