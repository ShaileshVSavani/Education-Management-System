
// import React, { useEffect, useContext } from "react";
// import { AuthContext } from "../../context/AuthContext";
// import PropTypes from "prop-types";

// const CourseTable = ({ handleUploadContent }) => {
//   const { courses, updateState } = useContext(AuthContext);

//   useEffect(() => {
//     if (courses.length === 0) {
//       const storedCourses = JSON.parse(localStorage.getItem("courses")) || [];
//       updateState("courses", storedCourses);
//     }
//   }, [courses, updateState]);

//   return (
//     <div className="mb-6">
//       <h2 className="text-xl font-semibold mb-2 text-gray-700">Assigned Courses</h2>
//       {courses.length > 0 ? (
//         <table className="table-auto w-full border-collapse border border-gray-300">
//           <thead>
//             <tr className="bg-blue-100">
//               <th className="border border-gray-300 px-6 py-3">ID</th>
//               <th className="border border-gray-300 px-6 py-3">Title</th>
//               <th className="border border-gray-300 px-6 py-3">Description</th>
//               <th className="border border-gray-300 px-6 py-3">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {courses.map((course) => (
//               <tr key={course.id}>
//                 <td className="border border-gray-300 px-6 py-3 text-center">{course.id}</td>
//                 <td className="border border-gray-300 px-6 py-3 text-center">{course.title}</td>
//                 <td className="border border-gray-300 px-6 py-3 text-center">{course.description}</td>
//                 <td className="border border-gray-300 px-6 py-3 text-center">
//                   <button
//                     onClick={() => handleUploadContent(course.id)}
//                     className="px-4 py-2 text-white bg-blue-600 rounded-md"
//                   >
//                     Upload Content
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       ) : (
//         <p className="text-gray-500">No courses assigned yet.</p>
//       )}
//     </div>
//   );
// };

// CourseTable.propTypes = {
//   handleUploadContent: PropTypes.func.isRequired,
// };

// export default CourseTable;







import React, { useEffect, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import PropTypes from "prop-types";

const CourseTable = ({ handleUploadContent }) => {
  const { courses, updateState } = useContext(AuthContext);

  useEffect(() => {
    if (courses.length === 0) {
      const storedCourses = JSON.parse(localStorage.getItem("courses")) || [];
      updateState("courses", storedCourses);
    }
  }, [courses, updateState]);

  return (
    <div className="mb-6 px-4 sm:px-6 lg:px-8">
      <h2 className="text-lg sm:text-xl font-semibold mb-4 text-gray-700">
        Assigned Courses
      </h2>
      {courses.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="table-auto w-full border-collapse border border-gray-300 text-sm sm:text-base">
            <thead>
              <tr className="bg-blue-100 text-gray-700">
                <th className="border border-gray-300 px-3 sm:px-6 py-2 sm:py-3">ID</th>
                <th className="border border-gray-300 px-3 sm:px-6 py-2 sm:py-3">Title</th>
                <th className="border border-gray-300 px-3 sm:px-6 py-2 sm:py-3">Description</th>
                <th className="border border-gray-300 px-3 sm:px-6 py-2 sm:py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {courses.map((course) => (
                <tr key={course.id} className="odd:bg-white even:bg-gray-50">
                  <td className="border border-gray-300 px-3 sm:px-6 py-2 sm:py-3 text-center">
                    {course.id}
                  </td>
                  <td className="border border-gray-300 px-3 sm:px-6 py-2 sm:py-3 text-center">
                    {course.title}
                  </td>
                  <td className="border border-gray-300 px-3 sm:px-6 py-2 sm:py-3 text-center">
                    {course.description}
                  </td>
                  <td className="border border-gray-300 px-3 sm:px-6 py-2 sm:py-3 text-center">
                    <button
                      onClick={() => handleUploadContent(course.id)}
                      className="px-3 sm:px-4 py-1 sm:py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition duration-200"
                    >
                      Upload Content
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-gray-500 text-sm sm:text-base">
          No courses assigned yet.
        </p>
      )}
    </div>
  );
};

CourseTable.propTypes = {
  handleUploadContent: PropTypes.func.isRequired,
};

export default CourseTable;
