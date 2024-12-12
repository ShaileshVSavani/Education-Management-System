
// import React, { useContext, useState } from "react";
// import { AuthContext } from "../../context/AuthContext";

// const Courses = () => {
//   const { user, teachers, courses, setCourses } = useContext(AuthContext);
//   const [formState, setFormState] = useState({
//     id: "",
//     title: "",
//     description: "",
//     startDate: "",
//     endDate: "",
//     teacherId: "",
//   });
//   const [isFormVisible, setFormVisible] = useState(false);

//   // Add or update course
//   const handleAddOrUpdateCourse = (e) => {
//     e.preventDefault();
//     const { title, description, startDate, endDate, teacherId } = formState;

//     if (!title || !description || !startDate || !endDate || !teacherId) {
//       alert("Please fill in all the fields.");
//       return;
//     }

//     let updatedCourses = [...courses];
//     if (formState.id) {
//       updatedCourses = updatedCourses.map((course) =>
//         course.id === formState.id
//           ? { ...course, title, description, startDate, endDate, teacherId }
//           : course
//       );
//     } else {
//       const newCourse = {
//         id: Date.now(),
//         title,
//         description,
//         startDate,
//         endDate,
//         teacherId,
//       };
//       updatedCourses.push(newCourse);
//     }

//     // Update courses in the global context and localStorage
//     setCourses(updatedCourses);

//     // Clear form state after adding or updating
//     setFormState({
//       id: "",
//       title: "",
//       description: "",
//       startDate: "",
//       endDate: "",
//       teacherId: "",
//     });
//     setFormVisible(false);
//   };

//   // Edit course
//   const handleEditCourse = (course) => {
//     setFormState({
//       id: course.id,
//       title: course.title,
//       description: course.description,
//       startDate: course.startDate,
//       endDate: course.endDate,
//       teacherId: course.teacherId,
//     });
//     setFormVisible(true);
//   };

//   // Delete course
//   const handleDeleteCourse = (id) => {
//     const updatedCourses = courses.filter((course) => course.id !== id);
//     setCourses(updatedCourses);
//   };

//   if (!user || user.role !== "admin") {
//     return <div>Access Denied</div>;
//   }

//   return (
//     <div className="container mx-auto p-4">
//       <h2 className="text-2xl font-semibold mb-6 text-center">Manage Courses</h2>

//       <div className="flex justify-end mb-4">
//         <button
//           onClick={() => setFormVisible(true)}
//           className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700"
//         >
//           Add Course
//         </button>
//       </div>

//       {isFormVisible && (
//         <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
//           <div className="bg-white w-full max-w-lg p-6 rounded shadow-md">
//             <h3 className="text-lg font-bold mb-4">
//               {formState.id ? "Edit Course" : "Add Course"}
//             </h3>
//             <form onSubmit={handleAddOrUpdateCourse} className="space-y-4">
//               <div>
//                 <label className="block font-medium">Course Title</label>
//                 <input
//                   type="text"
//                   value={formState.title}
//                   onChange={(e) =>
//                     setFormState({ ...formState, title: e.target.value })
//                   }
//                   className="w-full p-2 border rounded"
//                   placeholder="Enter course title"
//                   required
//                 />
//               </div>
//               <div>
//                 <label className="block font-medium">Course Description</label>
//                 <textarea
//                   value={formState.description}
//                   onChange={(e) =>
//                     setFormState({ ...formState, description: e.target.value })
//                   }
//                   className="w-full p-2 border rounded"
//                   placeholder="Enter course description"
//                   required
//                 ></textarea>
//               </div>
//               <div className="flex gap-4">
//                 <div className="w-1/2">
//                   <label className="block font-medium">Start Date</label>
//                   <input
//                     type="date"
//                     value={formState.startDate}
//                     onChange={(e) =>
//                       setFormState({ ...formState, startDate: e.target.value })
//                     }
//                     className="w-full p-2 border rounded"
//                     required
//                   />
//                 </div>
//                 <div className="w-1/2">
//                   <label className="block font-medium">End Date</label>
//                   <input
//                     type="date"
//                     value={formState.endDate}
//                     onChange={(e) =>
//                       setFormState({ ...formState, endDate: e.target.value })
//                     }
//                     className="w-full p-2 border rounded"
//                     required
//                   />
//                 </div>
//               </div>
//               <div>
//                 <label className="block font-medium">Assign Teacher</label>
//                 <select
//                   value={formState.teacherId}
//                   onChange={(e) =>
//                     setFormState({ ...formState, teacherId: e.target.value })
//                   }
//                   className="w-full p-2 border rounded"
//                   required
//                 >
//                   <option value="">Select a teacher</option>
//                   {teachers.map((teacher) => (
//                     <option key={teacher.id} value={teacher.id}>
//                       {teacher.name}
//                     </option>
//                   ))}
//                 </select>
//               </div>
//               <div className="flex justify-end space-x-2">
//                 <button
//                   type="button"
//                   onClick={() => setFormVisible(false)}
//                   className="px-4 py-2 text-gray-700 bg-gray-200 rounded hover:bg-gray-300"
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   type="submit"
//                   className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700"
//                 >
//                   {formState.id ? "Update" : "Add"}
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}

//       <table className="w-full border-collapse border border-gray-200 shadow-md rounded">
//         <thead className="bg-gray-100">
//           <tr>
//             <th className="border px-4 py-2">ID</th>
//             <th className="border px-4 py-2">Title</th>
//             <th className="border px-4 py-2">Description</th>
//             <th className="border px-4 py-2">Start Date</th>
//             <th className="border px-4 py-2">End Date</th>
//             <th className="border px-4 py-2">Teacher</th>
//             <th className="border px-4 py-2">Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {courses.map((course) => {
//             const teacher = teachers.find(
//               (teacher) => String(teacher.id) === String(course.teacherId)
//             );

//             return (
//               <tr key={course.id} className="odd:bg-white even:bg-gray-50">
//                 <td className="border px-4 py-2 text-center">{course.id}</td>
//                 <td className="border px-4 py-2 text-center">{course.title}</td>
//                 <td className="border px-4 py-2 text-center">{course.description}</td>
//                 <td className="border px-4 py-2 text-center">{course.startDate}</td>
//                 <td className="border px-4 py-2 text-center">{course.endDate}</td>
//                 <td className="border px-4 py-2 text-center">
//                   {teacher ? teacher.name : "Unknown"}
//                 </td>
//                 <td className="border px-4 py-2 text-center">
//                   <button
//                     onClick={() => handleEditCourse(course)}
//                     className="px-2 py-1 text-white bg-yellow-500 rounded hover:bg-yellow-600 mr-2"
//                   >
//                     Edit
//                   </button>
//                   <button
//                     onClick={() => handleDeleteCourse(course.id)}
//                     className="px-2 py-1 text-white bg-red-500 rounded hover:bg-red-600"
//                   >
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             );
//           })}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Courses;






// import React, { useContext, useState } from "react";
// import { AuthContext } from "../../context/AuthContext";

// const Courses = () => {
//   const { user, teachers, courses, setCourses } = useContext(AuthContext);
//   const [formState, setFormState] = useState({
//     id: "",
//     title: "",
//     description: "",
//     startDate: "",
//     endDate: "",
//     teacherId: "",
//   });
//   const [isFormVisible, setFormVisible] = useState(false);
//   const [sortField, setSortField] = useState("");
//   const [sortOrder, setSortOrder] = useState("asc");
//   const [filter, setFilter] = useState("");

//   // Sort courses
//   const sortedCourses = [...courses].sort((a, b) => {
//     if (!sortField) return 0;
//     const fieldA = a[sortField]?.toString().toLowerCase() || "";
//     const fieldB = b[sortField]?.toString().toLowerCase() || "";
//     if (sortOrder === "asc") return fieldA.localeCompare(fieldB);
//     return fieldB.localeCompare(fieldA);
//   });

//   // Filter courses
//   const filteredCourses = sortedCourses.filter((course) =>
//     course.title.toLowerCase().includes(filter.toLowerCase())
//   );

//   // Add or update course
//   const handleAddOrUpdateCourse = (e) => {
//     e.preventDefault();
//     const { title, description, startDate, endDate, teacherId } = formState;

//     if (!title || !description || !startDate || !endDate || !teacherId) {
//       alert("Please fill in all the fields.");
//       return;
//     }

//     let updatedCourses = [...courses];
//     if (formState.id) {
//       updatedCourses = updatedCourses.map((course) =>
//         course.id === formState.id
//           ? { ...course, title, description, startDate, endDate, teacherId }
//           : course
//       );
//     } else {
//       const newCourse = {
//         id: Date.now(),
//         title,
//         description,
//         startDate,
//         endDate,
//         teacherId,
//       };
//       updatedCourses.push(newCourse);
//     }

//     setCourses(updatedCourses);
//     setFormState({
//       id: "",
//       title: "",
//       description: "",
//       startDate: "",
//       endDate: "",
//       teacherId: "",
//     });
//     setFormVisible(false);
//   };

//   // Edit course
//   const handleEditCourse = (course) => {
//     setFormState(course);
//     setFormVisible(true);
//   };

//   // Delete course
//   const handleDeleteCourse = (id) => {
//     const updatedCourses = courses.filter((course) => course.id !== id);
//     setCourses(updatedCourses);
//   };

//   const toggleSort = (field) => {
//     if (sortField === field) {
//       setSortOrder(sortOrder === "asc" ? "desc" : "asc");
//     } else {
//       setSortField(field);
//       setSortOrder("asc");
//     }
//   };

//   if (!user || user.role !== "admin") {
//     return <div>Access Denied</div>;
//   }

//   return (
//     <div className="container mx-auto p-4">
//       <h2 className="text-2xl font-semibold mb-6 text-center">Manage Courses</h2>

//       <div className="flex justify-between items-center mb-4">
//         <button
//           onClick={() => setFormVisible(true)}
//           className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700"
//         >
//           Add Course
//         </button>
//         <input
//           type="text"
//           value={filter}
//           onChange={(e) => setFilter(e.target.value)}
//           placeholder="Filter by title"
//           className="p-2 border rounded w-64"
//         />
//       </div>

//       {isFormVisible && (
//         <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
//           <div className="bg-white w-full max-w-lg p-6 rounded shadow-md">
//             <h3 className="text-lg font-bold mb-4">
//               {formState.id ? "Edit Course" : "Add Course"}
//             </h3>
//             <form onSubmit={handleAddOrUpdateCourse} className="space-y-4">
//               <div>
//                 <label className="block font-medium">Course Title</label>
//                 <input
//                   type="text"
//                   value={formState.title}
//                   onChange={(e) =>
//                     setFormState({ ...formState, title: e.target.value })
//                   }
//                   className="w-full p-2 border rounded"
//                   required
//                 />
//               </div>
//               <div>
//                 <label className="block font-medium">Course Description</label>
//                 <textarea
//                   value={formState.description}
//                   onChange={(e) =>
//                     setFormState({ ...formState, description: e.target.value })
//                   }
//                   className="w-full p-2 border rounded"
//                   required
//                 ></textarea>
//               </div>
//               <div className="flex gap-4">
//                 <div className="w-1/2">
//                   <label className="block font-medium">Start Date</label>
//                   <input
//                     type="date"
//                     value={formState.startDate}
//                     onChange={(e) =>
//                       setFormState({ ...formState, startDate: e.target.value })
//                     }
//                     className="w-full p-2 border rounded"
//                     required
//                   />
//                 </div>
//                 <div className="w-1/2">
//                   <label className="block font-medium">End Date</label>
//                   <input
//                     type="date"
//                     value={formState.endDate}
//                     onChange={(e) =>
//                       setFormState({ ...formState, endDate: e.target.value })
//                     }
//                     className="w-full p-2 border rounded"
//                     required
//                   />
//                 </div>
//               </div>
//               <div>
//                 <label className="block font-medium">Assign Teacher</label>
//                 <select
//                   value={formState.teacherId}
//                   onChange={(e) =>
//                     setFormState({ ...formState, teacherId: e.target.value })
//                   }
//                   className="w-full p-2 border rounded"
//                   required
//                 >
//                   <option value="">Select a teacher</option>
//                   {teachers.map((teacher) => (
//                     <option key={teacher.id} value={teacher.id}>
//                       {teacher.name}
//                     </option>
//                   ))}
//                 </select>
//               </div>
//               <div className="flex justify-end space-x-2">
//                 <button
//                   type="button"
//                   onClick={() => setFormVisible(false)}
//                   className="px-4 py-2 text-gray-700 bg-gray-200 rounded hover:bg-gray-300"
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   type="submit"
//                   className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700"
//                 >
//                   {formState.id ? "Update" : "Add"}
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}

//       <table className="w-full border-collapse border border-gray-200 shadow-md rounded">
//         <thead className="bg-gray-100">
//           <tr>
//             <th
//               className="border px-4 py-2 cursor-pointer"
//               onClick={() => toggleSort("id")}
//             >
//               ID
//             </th>
//             <th
//               className="border px-4 py-2 cursor-pointer"
//               onClick={() => toggleSort("title")}
//             >
//               Title
//             </th>
//             <th className="border px-4 py-2">Description</th>
//             <th
//               className="border px-4 py-2 cursor-pointer"
//               onClick={() => toggleSort("startDate")}
//             >
//               Start Date
//             </th>
//             <th
//               className="border px-4 py-2 cursor-pointer"
//               onClick={() => toggleSort("endDate")}
//             >
//               End Date
//             </th>
//             <th className="border px-4 py-2">Teacher</th>
//             <th className="border px-4 py-2">Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {filteredCourses.map((course) => {
//             const teacher = teachers.find(
//               (teacher) => String(teacher.id) === String(course.teacherId)
//             );
//             return (
//               <tr key={course.id} className="odd:bg-white even:bg-gray-50">
//                 <td className="border px-4 py-2 text-center">{course.id}</td>
//                 <td className="border px-4 py-2 text-center">{course.title}</td>
//                 <td className="border px-4 py-2 text-center">{course.description}</td>
//                 <td className="border px-4 py-2 text-center">{course.startDate}</td>
//                 <td className="border px-4 py-2 text-center">{course.endDate}</td>
//                 <td className="border px-4 py-2 text-center">
//                   {teacher ? teacher.name : "Unknown"}
//                 </td>
//                 <td className="border px-4 py-2 text-center">
//                   <button
//                     onClick={() => handleEditCourse(course)}
//                     className="px-2 py-1 text-white bg-yellow-500 rounded hover:bg-yellow-600 mr-2"
//                   >
//                     Edit
//                   </button>
//                   <button
//                     onClick={() => handleDeleteCourse(course.id)}
//                     className="px-2 py-1 text-white bg-red-500 rounded hover:bg-red-600"
//                   >
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             );
//           })}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Courses;






import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";

const Courses = () => {
  const { user, teachers, courses, setCourses } = useContext(AuthContext);
  const [formState, setFormState] = useState({
    id: "",
    title: "",
    description: "",
    startDate: "",
    endDate: "",
    teacherId: "",
  });
  const [isFormVisible, setFormVisible] = useState(false);
  const [sortField, setSortField] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const [filter, setFilter] = useState("");

  const sortedCourses = [...courses].sort((a, b) => {
    if (!sortField) return 0;
    const fieldA = a[sortField]?.toString().toLowerCase() || "";
    const fieldB = b[sortField]?.toString().toLowerCase() || "";
    if (sortOrder === "asc") return fieldA.localeCompare(fieldB);
    return fieldB.localeCompare(fieldA);
  });

  const filteredCourses = sortedCourses.filter((course) =>
    course.title.toLowerCase().includes(filter.toLowerCase())
  );

  const handleAddOrUpdateCourse = (e) => {
    e.preventDefault();
    const { title, description, startDate, endDate, teacherId } = formState;

    if (!title || !description || !startDate || !endDate || !teacherId) {
      alert("Please fill in all the fields.");
      return;
    }

    let updatedCourses = [...courses];
    if (formState.id) {
      updatedCourses = updatedCourses.map((course) =>
        course.id === formState.id
          ? { ...course, title, description, startDate, endDate, teacherId }
          : course
      );
    } else {
      const newCourse = {
        id: Date.now(),
        title,
        description,
        startDate,
        endDate,
        teacherId,
      };
      updatedCourses.push(newCourse);
    }

    setCourses(updatedCourses);
    setFormState({
      id: "",
      title: "",
      description: "",
      startDate: "",
      endDate: "",
      teacherId: "",
    });
    setFormVisible(false);
  };

  const handleEditCourse = (course) => {
    setFormState(course);
    setFormVisible(true);
  };

  const handleDeleteCourse = (id) => {
    const updatedCourses = courses.filter((course) => course.id !== id);
    setCourses(updatedCourses);
  };

  const toggleSort = (field) => {
    if (sortField === field) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortOrder("asc");
    }
  };

  if (!user || user.role !== "admin") {
    return <div>Access Denied</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-6 text-center">Manage Courses</h2>

      <div className="flex flex-wrap justify-between items-center mb-4 gap-2">
        <button
          onClick={() => setFormVisible(true)}
          className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700"
        >
          Add Course
        </button>
        <input
          type="text"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          placeholder="Filter by title"
          className="p-2 border rounded w-full sm:w-64"
        />
      </div>

      {isFormVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
          <div className="bg-white w-full max-w-lg p-6 rounded shadow-md max-h-screen overflow-y-auto">
            <h3 className="text-lg font-bold mb-4">
              {formState.id ? "Edit Course" : "Add Course"}
            </h3>
            <form onSubmit={handleAddOrUpdateCourse} className="space-y-4">
              <div>
                <label className="block font-medium">Course Title</label>
                <input
                  type="text"
                  value={formState.title}
                  onChange={(e) =>
                    setFormState({ ...formState, title: e.target.value })
                  }
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
              <div>
                <label className="block font-medium">Course Description</label>
                <textarea
                  value={formState.description}
                  onChange={(e) =>
                    setFormState({ ...formState, description: e.target.value })
                  }
                  className="w-full p-2 border rounded"
                  required
                ></textarea>
              </div>
              <div className="flex flex-wrap gap-4">
                <div className="w-full sm:w-1/2">
                  <label className="block font-medium">Start Date</label>
                  <input
                    type="date"
                    value={formState.startDate}
                    onChange={(e) =>
                      setFormState({ ...formState, startDate: e.target.value })
                    }
                    className="w-full p-2 border rounded"
                    required
                  />
                </div>
                <div className="w-full sm:w-1/2">
                  <label className="block font-medium">End Date</label>
                  <input
                    type="date"
                    value={formState.endDate}
                    onChange={(e) =>
                      setFormState({ ...formState, endDate: e.target.value })
                    }
                    className="w-full p-2 border rounded"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block font-medium">Assign Teacher</label>
                <select
                  value={formState.teacherId}
                  onChange={(e) =>
                    setFormState({ ...formState, teacherId: e.target.value })
                  }
                  className="w-full p-2 border rounded"
                  required
                >
                  <option value="">Select a teacher</option>
                  {teachers.map((teacher) => (
                    <option key={teacher.id} value={teacher.id}>
                      {teacher.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={() => setFormVisible(false)}
                  className="px-4 py-2 text-gray-700 bg-gray-200 rounded hover:bg-gray-300"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700"
                >
                  {formState.id ? "Update" : "Add"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-200 shadow-md rounded">
          <thead className="bg-gray-100">
            <tr>
              <th
                className="border px-4 py-2 cursor-pointer"
                onClick={() => toggleSort("id")}
              >
                ID
              </th>
              <th
                className="border px-4 py-2 cursor-pointer"
                onClick={() => toggleSort("title")}
              >
                Title
              </th>
              <th className="border px-4 py-2">Description</th>
              <th
                className="border px-4 py-2 cursor-pointer"
                onClick={() => toggleSort("startDate")}
              >
                Start Date
              </th>
              <th
                className="border px-4 py-2 cursor-pointer"
                onClick={() => toggleSort("endDate")}
              >
                End Date
              </th>
              <th className="border px-4 py-2">Teacher</th>
              <th className="border px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredCourses.map((course) => {
              const teacher = teachers.find(
                (teacher) => String(teacher.id) === String(course.teacherId)
              );
              return (
                <tr key={course.id} className="odd:bg-white even:bg-gray-50">
                  <td className="border px-4 py-2 text-center">{course.id}</td>
                  <td className="border px-4 py-2 text-center">{course.title}</td>
                  <td className="border px-4 py-2 text-center">
                    {course.description}
                  </td>
                  <td className="border px-4 py-2 text-center">
                    {course.startDate}
                  </td>
                  <td className="border px-4 py-2 text-center">
                    {course.endDate}
                  </td>
                  <td className="border px-4 py-2 text-center">
                    {teacher ? teacher.name : "Unknown"}
                  </td>
                  <td className="border px-4 py-2 text-center">
                    <button
                      onClick={() => handleEditCourse(course)}
                      className="px-2 py-1 text-white bg-yellow-500 rounded hover:bg-yellow-600 mr-2"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteCourse(course.id)}
                      className="px-2 py-1 text-white bg-red-500 rounded hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Courses;
