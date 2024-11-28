

// import React, { useState } from "react";

// const TeacherDashboard = () => {
//   const [courses] = useState([
//     { id: 1, title: "Mathematics", description: "Algebra and Geometry" },
//     { id: 2, title: "Science", description: "Physics and Chemistry" },
//   ]);

//   const [students] = useState([
//     { id: 1, name: "John Doe", courseId: 1, progress: "75%" },
//     { id: 2, name: "Jane Smith", courseId: 1, progress: "80%" },
//     { id: 3, name: "Emily Johnson", courseId: 2, progress: "60%" },
//   ]);

//   const [grades, setGrades] = useState({
//     1: { 1: "A", 2: "B+" },  // Course 1, Student 1 gets an A, Student 2 gets B+
//     2: { 3: "C" },           // Course 2, Student 3 gets a C
//   });

//   const [activeTab, setActiveTab] = useState("courses");

//   const handleUploadContent = (courseId) => {
//     alert(`Content uploaded for course ID: ${courseId}`);
//   };

//   const handleGradeChange = (studentId, courseId, newGrade) => {
//     setGrades((prevGrades) => ({
//       ...prevGrades,
//       [courseId]: {
//         ...prevGrades[courseId],
//         [studentId]: newGrade,
//       },
//     }));
//   };

//   return (
//     <div className="p-4">
//       <h1 className="text-2xl font-bold mb-4">Teacher Dashboard</h1>

//       {/* Tab Navigation */}
//       <div className="mb-6 flex space-x-4">
//         <button
//           onClick={() => setActiveTab("courses")}
//           className={`px-4 py-2 font-medium rounded-md ${activeTab === "courses" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
//         >
//           Courses
//         </button>
//         <button
//           onClick={() => setActiveTab("students")}
//           className={`px-4 py-2 font-medium rounded-md ${activeTab === "students" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
//         >
//           Students
//         </button>
//         <button
//           onClick={() => setActiveTab("grades")}
//           className={`px-4 py-2 font-medium rounded-md ${activeTab === "grades" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
//         >
//           Grades
//         </button>
//       </div>

//       {/* Courses Section */}
//       {activeTab === "courses" && (
//         <div className="mb-6">
//           <h2 className="text-xl font-semibold mb-2">Assigned Courses</h2>
//           <table className="table-auto w-full border-collapse border border-gray-300">
//             <thead>
//               <tr className="bg-gray-100">
//                 <th className="border border-gray-300 px-4 py-2">ID</th>
//                 <th className="border border-gray-300 px-4 py-2">Title</th>
//                 <th className="border border-gray-300 px-4 py-2">Description</th>
//                 <th className="border border-gray-300 px-4 py-2">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {courses.map((course) => (
//                 <tr key={course.id}>
//                   <td className="border border-gray-300 px-4 py-2">{course.id}</td>
//                   <td className="border border-gray-300 px-4 py-2">{course.title}</td>
//                   <td className="border border-gray-300 px-4 py-2">{course.description}</td>
//                   <td className="border border-gray-300 px-4 py-2">
//                     <button
//                       onClick={() => handleUploadContent(course.id)}
//                       className="px-4 py-2 text-white bg-blue-500 rounded"
//                     >
//                       Upload Content
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}

//       {/* Student Progress Section */}
//       {activeTab === "students" && (
//         <div className="mb-6">
//           <h2 className="text-xl font-semibold mb-2">Student Progress</h2>
//           <table className="table-auto w-full border-collapse border border-gray-300">
//             <thead>
//               <tr className="bg-gray-100">
//                 <th className="border border-gray-300 px-4 py-2">Student Name</th>
//                 <th className="border border-gray-300 px-4 py-2">Course</th>
//                 <th className="border border-gray-300 px-4 py-2">Progress</th>
//               </tr>
//             </thead>
//             <tbody>
//               {students.map((student) => (
//                 <tr key={student.id}>
//                   <td className="border border-gray-300 px-4 py-2">{student.name}</td>
//                   <td className="border border-gray-300 px-4 py-2">
//                     {courses.find((course) => course.id === student.courseId)?.title}
//                   </td>
//                   <td className="border border-gray-300 px-4 py-2">{student.progress}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}

//       {/* Grade Management Section */}
//       {activeTab === "grades" && (
//         <div>
//           <h2 className="text-xl font-semibold mb-2">Manage Grades</h2>
//           {courses.map((course) => (
//             <div key={course.id} className="mb-4">
//               <h3 className="text-lg font-medium mb-2">{course.title}</h3>
//               <table className="table-auto w-full border-collapse border border-gray-300">
//                 <thead>
//                   <tr className="bg-gray-100">
//                     <th className="border border-gray-300 px-4 py-2">Student Name</th>
//                     <th className="border border-gray-300 px-4 py-2">Current Grade</th>
//                     <th className="border border-gray-300 px-4 py-2">Update Grade</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {students
//                     .filter((student) => student.courseId === course.id)
//                     .map((student) => (
//                       <tr key={student.id}>
//                         <td className="border border-gray-300 px-4 py-2">{student.name}</td>
//                         <td className="border border-gray-300 px-4 py-2">
//                           {grades[course.id]?.[student.id] || "Not Graded"}
//                         </td>
//                         <td className="border border-gray-300 px-4 py-2">
//                           <input
//                             type="text"
//                             placeholder="Enter Grade"
//                             className="p-2 border rounded"
//                             onBlur={(e) =>
//                               handleGradeChange(student.id, course.id, e.target.value)
//                             }
//                           />
//                         </td>
//                       </tr>
//                     ))}
//                 </tbody>
//               </table>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default TeacherDashboard;



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
    { id: 1, name: "John Doe", courseId: 1, progress: "75%" },
    { id: 2, name: "Jane Smith", courseId: 1, progress: "80%" },
    { id: 3, name: "Emily Johnson", courseId: 2, progress: "60%" },
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
