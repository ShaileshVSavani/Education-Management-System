// import React, { useState } from "react";

// const Teachers = () => {
//   const [teachers, setTeachers] = useState([
//     { id: 1, name: "Mr. Smith", subject: "Math" },
//     { id: 2, name: "Ms. Johnson", subject: "Science" },
//   ]);

//   const [formState, setFormState] = useState({ name: "", subject: "" });

//   const handleAddTeacher = (e) => {
//     e.preventDefault();
//     const newTeacher = {
//       id: Date.now(),
//       name: formState.name,
//       subject: formState.subject,
//     };
//     setTeachers([...teachers, newTeacher]);
//     setFormState({ name: "", subject: "" });
//   };

//   const handleDeleteTeacher = (id) => {
//     setTeachers(teachers.filter((teacher) => teacher.id !== id));
//   };

//   return (
//     <div>
//       <h2 className="text-xl font-semibold mb-4">Manage Teachers</h2>
//       <form onSubmit={handleAddTeacher} className="space-y-4 mb-4">
//         <div>
//           <label className="block font-medium">Teacher Name</label>
//           <input
//             type="text"
//             value={formState.name}
//             onChange={(e) => setFormState({ ...formState, name: e.target.value })}
//             className="w-full p-2 border rounded"
//             placeholder="Enter teacher name"
//             required
//           />
//         </div>
//         <div>
//           <label className="block font-medium">Teacher Subject</label>
//           <input
//             type="text"
//             value={formState.subject}
//             onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
//             className="w-full p-2 border rounded"
//             placeholder="Enter teacher subject"
//             required
//           />
//         </div>
//         <button type="submit" className="px-4 py-2 text-white bg-blue-500 rounded">
//           Add Teacher
//         </button>
//       </form>

//       <table className="table-auto w-full border-collapse border border-gray-300">
//         <thead>
//           <tr className="bg-gray-100">
//             <th className="border border-gray-300 px-4 py-2">ID</th>
//             <th className="border border-gray-300 px-4 py-2">Name</th>
//             <th className="border border-gray-300 px-4 py-2">Subject</th>
//             <th className="border border-gray-300 px-4 py-2">Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {teachers.map((teacher) => (
//             <tr key={teacher.id}>
//               <td className="border border-gray-300 px-4 py-2">{teacher.id}</td>
//               <td className="border border-gray-300 px-4 py-2">{teacher.name}</td>
//               <td className="border border-gray-300 px-4 py-2">{teacher.subject}</td>
//               <td className="border border-gray-300 px-4 py-2">
//                 <button
//                   onClick={() => handleDeleteTeacher(teacher.id)}
//                   className="px-4 py-2 text-white bg-red-500 rounded"
//                 >
//                   Delete
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Teachers;




import React, { useState, useEffect } from "react";

const Teachers = () => {
  const [teachers, setTeachers] = useState([]);
  const [formState, setFormState] = useState({ name: "", subject: "" });

  // Load teachers from localStorage when the component mounts
  useEffect(() => {
    const storedTeachers = JSON.parse(localStorage.getItem("teachers")) || [];
    setTeachers(storedTeachers);
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
    setTeachers(updatedTeachers);
    localStorage.setItem("teachers", JSON.stringify(updatedTeachers));

    setFormState({ name: "", subject: "" });
  };

  // Delete a teacher
  const handleDeleteTeacher = (id) => {
    const updatedTeachers = teachers.filter((teacher) => teacher.id !== id);
    setTeachers(updatedTeachers);
    localStorage.setItem("teachers", JSON.stringify(updatedTeachers));
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Manage Teachers</h2>
      <form onSubmit={handleAddTeacher} className="space-y-4 mb-4">
        <div>
          <label className="block font-medium">Teacher Name</label>
          <input
            type="text"
            value={formState.name}
            onChange={(e) => setFormState({ ...formState, name: e.target.value })}
            className="w-full p-2 border rounded"
            placeholder="Enter teacher name"
            required
          />
        </div>
        <div>
          <label className="block font-medium">Teacher Subject</label>
          <input
            type="text"
            value={formState.subject}
            onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
            className="w-full p-2 border rounded"
            placeholder="Enter teacher subject"
            required
          />
        </div>
        <button type="submit" className="px-4 py-2 text-white bg-blue-500 rounded">
          Add Teacher
        </button>
      </form>

      <table className="table-auto w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2">ID</th>
            <th className="border border-gray-300 px-4 py-2">Name</th>
            <th className="border border-gray-300 px-4 py-2">Subject</th>
            <th className="border border-gray-300 px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {teachers.map((teacher) => (
            <tr key={teacher.id}>
              <td className="border border-gray-300 px-4 py-2 text-center">{teacher.id}</td>
              <td className="border border-gray-300 px-4 py-2 text-center">{teacher.name}</td>
              <td className="border border-gray-300 px-4 py-2 text-center">{teacher.subject}</td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                <button
                  onClick={() => handleDeleteTeacher(teacher.id)}
                  className="px-4 py-2 text-white bg-red-500 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Teachers;
