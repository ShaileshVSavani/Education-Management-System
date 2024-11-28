// import React, { useState } from "react";

// const AdminDashboard = () => {
//   // State for managing courses, students, and teachers
//   const [courses, setCourses] = useState([
//     { id: 1, title: "Mathematics", description: "Basic Algebra and Geometry" },
//     { id: 2, title: "Science", description: "Physics and Chemistry Basics" },
//   ]);

//   const [students, setStudents] = useState([
//     { id: 1, name: "John Doe", email: "john@example.com" },
//     { id: 2, name: "Jane Smith", email: "jane@example.com" },
//   ]);

//   const [teachers, setTeachers] = useState([
//     { id: 1, name: "Mr. Adams", subject: "Mathematics" },
//     { id: 2, name: "Ms. Baker", subject: "Science" },
//   ]);

//   const [formState, setFormState] = useState({ title: "", description: "" });
//   const [studentForm, setStudentForm] = useState({ name: "", email: "" });
//   const [teacherForm, setTeacherForm] = useState({ name: "", subject: "" });

//   // Handlers for adding new items
//   const handleAddCourse = (e) => {
//     e.preventDefault();
//     const newCourse = {
//       id: Date.now(),
//       title: formState.title,
//       description: formState.description,
//     };
//     setCourses([...courses, newCourse]);
//     setFormState({ title: "", description: "" });
//   };

//   const handleAddStudent = (e) => {
//     e.preventDefault();
//     const newStudent = {
//       id: Date.now(),
//       name: studentForm.name,
//       email: studentForm.email,
//     };
//     setStudents([...students, newStudent]);
//     setStudentForm({ name: "", email: "" });
//   };

//   const handleAddTeacher = (e) => {
//     e.preventDefault();
//     const newTeacher = {
//       id: Date.now(),
//       name: teacherForm.name,
//       subject: teacherForm.subject,
//     };
//     setTeachers([...teachers, newTeacher]);
//     setTeacherForm({ name: "", subject: "" });
//   };

//   // Handlers for deleting items
//   const handleDeleteCourse = (id) => {
//     setCourses(courses.filter((course) => course.id !== id));
//   };

//   const handleDeleteStudent = (id) => {
//     setStudents(students.filter((student) => student.id !== id));
//   };

//   const handleDeleteTeacher = (id) => {
//     setTeachers(teachers.filter((teacher) => teacher.id !== id));
//   };

//   return (
//     <div className="p-4">
//       <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>

//       {/* Courses Section */}
//       <div className="mb-6">
//         <h2 className="text-xl font-semibold mb-2">Courses</h2>
//         <form onSubmit={handleAddCourse} className="space-y-4 mb-4">
//           <div>
//             <label className="block font-medium">Course Title</label>
//             <input
//               type="text"
//               value={formState.title}
//               onChange={(e) => setFormState({ ...formState, title: e.target.value })}
//               className="w-full p-2 border rounded"
//               placeholder="Enter course title"
//               required
//             />
//           </div>
//           <div>
//             <label className="block font-medium">Course Description</label>
//             <textarea
//               value={formState.description}
//               onChange={(e) => setFormState({ ...formState, description: e.target.value })}
//               className="w-full p-2 border rounded"
//               placeholder="Enter course description"
//               required
//             ></textarea>
//           </div>
//           <button type="submit" className="px-4 py-2 text-white bg-blue-500 rounded">
//             Add Course
//           </button>
//         </form>

//         <table className="table-auto w-full border-collapse border border-gray-300 mb-6">
//           <thead>
//             <tr className="bg-gray-100">
//               <th className="border border-gray-300 px-4 py-2">ID</th>
//               <th className="border border-gray-300 px-4 py-2">Title</th>
//               <th className="border border-gray-300 px-4 py-2">Description</th>
//               <th className="border border-gray-300 px-4 py-2">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {courses.map((course) => (
//               <tr key={course.id}>
//                 <td className="border border-gray-300 px-4 py-2">{course.id}</td>
//                 <td className="border border-gray-300 px-4 py-2">{course.title}</td>
//                 <td className="border border-gray-300 px-4 py-2">{course.description}</td>
//                 <td className="border border-gray-300 px-4 py-2">
//                   <button
//                     onClick={() => handleDeleteCourse(course.id)}
//                     className="px-4 py-2 text-white bg-red-500 rounded"
//                   >
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* Students Section */}
//       <div className="mb-6">
//         <h2 className="text-xl font-semibold mb-2">Students</h2>
//         <form onSubmit={handleAddStudent} className="space-y-4 mb-4">
//           <div>
//             <label className="block font-medium">Student Name</label>
//             <input
//               type="text"
//               value={studentForm.name}
//               onChange={(e) => setStudentForm({ ...studentForm, name: e.target.value })}
//               className="w-full p-2 border rounded"
//               placeholder="Enter student name"
//               required
//             />
//           </div>
//           <div>
//             <label className="block font-medium">Student Email</label>
//             <input
//               type="email"
//               value={studentForm.email}
//               onChange={(e) => setStudentForm({ ...studentForm, email: e.target.value })}
//               className="w-full p-2 border rounded"
//               placeholder="Enter student email"
//               required
//             />
//           </div>
//           <button type="submit" className="px-4 py-2 text-white bg-blue-500 rounded">
//             Add Student
//           </button>
//         </form>

//         <table className="table-auto w-full border-collapse border border-gray-300 mb-6">
//           <thead>
//             <tr className="bg-gray-100">
//               <th className="border border-gray-300 px-4 py-2">ID</th>
//               <th className="border border-gray-300 px-4 py-2">Name</th>
//               <th className="border border-gray-300 px-4 py-2">Email</th>
//               <th className="border border-gray-300 px-4 py-2">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {students.map((student) => (
//               <tr key={student.id}>
//                 <td className="border border-gray-300 px-4 py-2">{student.id}</td>
//                 <td className="border border-gray-300 px-4 py-2">{student.name}</td>
//                 <td className="border border-gray-300 px-4 py-2">{student.email}</td>
//                 <td className="border border-gray-300 px-4 py-2">
//                   <button
//                     onClick={() => handleDeleteStudent(student.id)}
//                     className="px-4 py-2 text-white bg-red-500 rounded"
//                   >
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* Teachers Section */}
//       <div>
//         <h2 className="text-xl font-semibold mb-2">Teachers</h2>
//         <form onSubmit={handleAddTeacher} className="space-y-4 mb-4">
//           <div>
//             <label className="block font-medium">Teacher Name</label>
//             <input
//               type="text"
//               value={teacherForm.name}
//               onChange={(e) => setTeacherForm({ ...teacherForm, name: e.target.value })}
//               className="w-full p-2 border rounded"
//               placeholder="Enter teacher name"
//               required
//             />
//           </div>
//           <div>
//             <label className="block font-medium">Subject</label>
//             <input
//               type="text"
//               value={teacherForm.subject}
//               onChange={(e) => setTeacherForm({ ...teacherForm, subject: e.target.value })}
//               className="w-full p-2 border rounded"
//               placeholder="Enter subject"
//               required
//             />
//           </div>
//           <button type="submit" className="px-4 py-2 text-white bg-blue-500 rounded">
//             Add Teacher
//           </button>
//         </form>

//         <table className="table-auto w-full border-collapse border border-gray-300">
//           <thead>
//             <tr className="bg-gray-100">
//               <th className="border border-gray-300 px-4 py-2">ID</th>
//               <th className="border border-gray-300 px-4 py-2">Name</th>
//               <th className="border border-gray-300 px-4 py-2">Subject</th>
//               <th className="border border-gray-300 px-4 py-2">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {teachers.map((teacher) => (
//               <tr key={teacher.id}>
//                 <td className="border border-gray-300 px-4 py-2">{teacher.id}</td>
//                 <td className="border border-gray-300 px-4 py-2">{teacher.name}</td>
//                 <td className="border border-gray-300 px-4 py-2">{teacher.subject}</td>
//                 <td className="border border-gray-300 px-4 py-2">
//                   <button
//                     onClick={() => handleDeleteTeacher(teacher.id)}
//                     className="px-4 py-2 text-white bg-red-500 rounded"
//                   >
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;



import React, { useState } from "react";
import Courses from "./Courses";
import Students from "./Students";
import Teachers from "./Teachers";

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("courses");

  return (
    <div className="p-4 max-w-screen-xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-center">Admin Dashboard</h1>

      {/* Tab Navigation */}
      <div className="flex justify-center gap-4 mb-6">
        <button
          onClick={() => setActiveTab("courses")}
          className={`px-4 py-2 rounded ${activeTab === "courses" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
        >
          Courses
        </button>
        <button
          onClick={() => setActiveTab("students")}
          className={`px-4 py-2 rounded ${activeTab === "students" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
        >
          Students
        </button>
        <button
          onClick={() => setActiveTab("teachers")}
          className={`px-4 py-2 rounded ${activeTab === "teachers" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
        >
          Teachers
        </button>
      </div>

      {/* Tab Content */}
      {activeTab === "courses" && <Courses />}
      {activeTab === "students" && <Students />}
      {activeTab === "teachers" && <Teachers />}
    </div>
  );
};

export default AdminDashboard;
