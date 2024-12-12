
// import React, { useState, useContext, useEffect } from "react";
// import { AuthContext } from "../../context/AuthContext";

// const Teachers = () => {
//   const { teachers, updateState } = useContext(AuthContext);
//   const [formState, setFormState] = useState({ name: "", subject: "" });
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [filterText, setFilterText] = useState("");
//   const [sortKey, setSortKey] = useState(null);
//   const [sortOrder, setSortOrder] = useState("asc");

//   // Load teachers from localStorage when the component mounts
//   useEffect(() => {
//     const storedTeachers = JSON.parse(localStorage.getItem("teachers")) || [];
//     updateState("teachers", storedTeachers);
//   }, [updateState]);

//   // Add a new teacher
//   const handleAddTeacher = (e) => {
//     e.preventDefault();
//     const newTeacher = {
//       id: Date.now(),
//       name: formState.name,
//       subject: formState.subject,
//     };

//     const updatedTeachers = [...teachers, newTeacher];
//     updateState("teachers", updatedTeachers);
//     localStorage.setItem("teachers", JSON.stringify(updatedTeachers));

//     setFormState({ name: "", subject: "" });
//     setIsModalOpen(false); // Close modal after adding teacher
//   };

//   // Delete a teacher
//   const handleDeleteTeacher = (id) => {
//     const updatedTeachers = teachers.filter((teacher) => teacher.id !== id);
//     updateState("teachers", updatedTeachers);
//     localStorage.setItem("teachers", JSON.stringify(updatedTeachers));
//   };

//   // Filter and sort logic
//   const filteredTeachers = teachers
//     .filter((teacher) =>
//       teacher.name.toLowerCase().includes(filterText.toLowerCase()) ||
//       teacher.subject.toLowerCase().includes(filterText.toLowerCase())
//     )
//     .sort((a, b) => {
//       if (!sortKey) return 0;
//       const valueA = a[sortKey].toLowerCase();
//       const valueB = b[sortKey].toLowerCase();
//       if (valueA < valueB) return sortOrder === "asc" ? -1 : 1;
//       if (valueA > valueB) return sortOrder === "asc" ? 1 : -1;
//       return 0;
//     });

//   // Handle sorting
//   const handleSort = (key) => {
//     if (sortKey === key) {
//       setSortOrder(sortOrder === "asc" ? "desc" : "asc");
//     } else {
//       setSortKey(key);
//       setSortOrder("asc");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 p-4">
//       <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
//         <h2 className="text-2xl font-semibold text-center mb-6">
//           Manage Teachers
//         </h2>

//         {/* Add Teacher Button */}
//         <button
//           onClick={() => setIsModalOpen(true)}
//           className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
//         >
//           Add Teacher
//         </button>

//         {/* Filter Input */}
//         <input
//           type="text"
//           placeholder="Search by name or subject"
//           value={filterText}
//           onChange={(e) => setFilterText(e.target.value)}
//           className="mt-4 w-full p-2 border rounded focus:ring focus:ring-blue-300 focus:outline-none"
//         />

//         {/* Teachers List */}
//         <div className="overflow-x-auto mt-6">
//           <table className="w-full border-collapse border border-gray-300">
//             <thead className="bg-blue-100">
//               <tr>
//                 <th className="border border-gray-300 px-4 py-2">ID</th>
//                 <th
//                   className="border border-gray-300 px-4 py-2 cursor-pointer"
//                   onClick={() => handleSort("name")}
//                 >
//                   Name {sortKey === "name" && (sortOrder === "asc" ? "\u2191" : "\u2193")}
//                 </th>
//                 <th
//                   className="border border-gray-300 px-4 py-2 cursor-pointer"
//                   onClick={() => handleSort("subject")}
//                 >
//                   Subject {sortKey === "subject" && (sortOrder === "asc" ? "\u2191" : "\u2193")}
//                 </th>
//                 <th className="border border-gray-300 px-4 py-2">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {filteredTeachers.map((teacher) => (
//                 <tr key={teacher.id} className="text-center">
//                   <td className="border border-gray-300 px-4 py-2">
//                     {teacher.id}
//                   </td>
//                   <td className="border border-gray-300 px-4 py-2">
//                     {teacher.name}
//                   </td>
//                   <td className="border border-gray-300 px-4 py-2">
//                     {teacher.subject}
//                   </td>
//                   <td className="border border-gray-300 px-4 py-2">
//                     <button
//                       onClick={() => handleDeleteTeacher(teacher.id)}
//                       className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
//                     >
//                       Delete
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//               {filteredTeachers.length === 0 && (
//                 <tr>
//                   <td
//                     colSpan="4"
//                     className="text-center p-4 text-gray-500 font-medium"
//                   >
//                     No teachers match your criteria.
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
//             <h3 className="text-lg font-semibold text-gray-700 mb-4">
//               Add Teacher
//             </h3>
//             <form onSubmit={handleAddTeacher} className="space-y-4">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">
//                   Teacher Name
//                 </label>
//                 <input
//                   type="text"
//                   value={formState.name}
//                   onChange={(e) =>
//                     setFormState({ ...formState, name: e.target.value })
//                   }
//                   className="w-full p-2 mt-1 border border-gray-300 rounded focus:ring focus:ring-blue-300 focus:outline-none"
//                   placeholder="Enter teacher name"
//                   required
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">
//                   Teacher Subject
//                 </label>
//                 <input
//                   type="text"
//                   value={formState.subject}
//                   onChange={(e) =>
//                     setFormState({ ...formState, subject: e.target.value })
//                   }
//                   className="w-full p-2 mt-1 border border-gray-300 rounded focus:ring focus:ring-blue-300 focus:outline-none"
//                   placeholder="Enter teacher subject"
//                   required
//                 />
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
//                   Add Teacher
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Teachers;







import React, { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";

const Teachers = () => {
  const { teachers, updateState } = useContext(AuthContext);
  const [formState, setFormState] = useState({ name: "", subject: "" });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filterText, setFilterText] = useState("");
  const [sortKey, setSortKey] = useState(null);
  const [sortOrder, setSortOrder] = useState("asc");

  // Load teachers from localStorage when the component mounts
  useEffect(() => {
    try {
      const storedTeachers = JSON.parse(localStorage.getItem("teachers")) || [];
      if (teachers.length === 0) {
        updateState("teachers", storedTeachers);
      }
    } catch (error) {
      console.error("Error reading teachers from localStorage:", error);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Add a new teacher
  const handleAddTeacher = (e) => {
    e.preventDefault();
    const newTeacher = {
      id: Date.now(),
      name: formState.name,
      subject: formState.subject,
    };

    const updatedTeachers = [...teachers, newTeacher];
    updateState("teachers", updatedTeachers);
    localStorage.setItem("teachers", JSON.stringify(updatedTeachers));

    setFormState({ name: "", subject: "" });
    setIsModalOpen(false); // Close modal after adding teacher
  };

  // Delete a teacher
  const handleDeleteTeacher = (id) => {
    const updatedTeachers = teachers.filter((teacher) => teacher.id !== id);
    updateState("teachers", updatedTeachers);
    localStorage.setItem("teachers", JSON.stringify(updatedTeachers));
  };

  // Filter and sort logic
  const filteredTeachers = teachers
    .filter((teacher) => {
      const search = filterText.toLowerCase();
      return (
        teacher.name.toLowerCase().includes(search) ||
        teacher.subject.toLowerCase().includes(search)
      );
    })
    .sort((a, b) => {
      if (!sortKey) return 0;
      const valueA = a[sortKey].toLowerCase();
      const valueB = b[sortKey].toLowerCase();
      return valueA.localeCompare(valueB) * (sortOrder === "asc" ? 1 : -1);
    });

  // Handle sorting
  const handleSort = (key) => {
    if (sortKey === key) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortKey(key);
      setSortOrder("asc");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Manage Teachers
        </h2>

        {/* Add Teacher Button */}
        <button
          onClick={() => setIsModalOpen(true)}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          Add Teacher
        </button>

        {/* Filter Input */}
        <input
          type="text"
          placeholder="Search by name or subject"
          value={filterText}
          onChange={(e) => setFilterText(e.target.value)}
          className="mt-4 w-full p-2 border rounded focus:ring focus:ring-blue-300 focus:outline-none"
        />

        {/* Teachers List */}
        <div className="overflow-x-auto mt-6">
          <table className="w-full border-collapse border border-gray-300">
            <thead className="bg-blue-100">
              <tr>
                <th className="border border-gray-300 px-4 py-2">ID</th>
                <th
                  className="border border-gray-300 px-4 py-2 cursor-pointer"
                  onClick={() => handleSort("name")}
                >
                  Name {sortKey === "name" && (sortOrder === "asc" ? "▲" : "▼")}
                </th>
                <th
                  className="border border-gray-300 px-4 py-2 cursor-pointer"
                  onClick={() => handleSort("subject")}
                >
                  Subject {sortKey === "subject" && (sortOrder === "asc" ? "▲" : "▼")}
                </th>
                <th className="border border-gray-300 px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredTeachers.map((teacher) => (
                <tr key={teacher.id} className="text-center">
                  <td className="border border-gray-300 px-4 py-2">
                    {teacher.id}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {teacher.name}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {teacher.subject}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    <button
                      onClick={() => handleDeleteTeacher(teacher.id)}
                      className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
              {filteredTeachers.length === 0 && (
                <tr>
                  <td
                    colSpan="4"
                    className="text-center p-4 text-gray-500 font-medium"
                  >
                    No teachers match your criteria.
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
            <h3 className="text-lg font-semibold text-gray-700 mb-4">
              Add Teacher
            </h3>
            <form onSubmit={handleAddTeacher} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Teacher Name
                </label>
                <input
                  type="text"
                  value={formState.name}
                  onChange={(e) =>
                    setFormState({ ...formState, name: e.target.value })
                  }
                  className="w-full p-2 mt-1 border border-gray-300 rounded focus:ring focus:ring-blue-300 focus:outline-none"
                  placeholder="Enter teacher name"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Teacher Subject
                </label>
                <input
                  type="text"
                  value={formState.subject}
                  onChange={(e) =>
                    setFormState({ ...formState, subject: e.target.value })
                  }
                  className="w-full p-2 mt-1 border border-gray-300 rounded focus:ring focus:ring-blue-300 focus:outline-none"
                  placeholder="Enter teacher subject"
                  required
                />
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
                  Add Teacher
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Teachers;
