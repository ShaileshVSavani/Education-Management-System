import React, { useState } from "react";

const Courses = () => {
  const [courses, setCourses] = useState([
    { id: 1, title: "Mathematics", description: "Basic Algebra and Geometry" },
    { id: 2, title: "Science", description: "Physics and Chemistry Basics" },
  ]);

  const [formState, setFormState] = useState({ title: "", description: "" });

  const handleAddCourse = (e) => {
    e.preventDefault();
    const newCourse = {
      id: Date.now(),
      title: formState.title,
      description: formState.description,
    };
    setCourses([...courses, newCourse]);
    setFormState({ title: "", description: "" });
  };

  const handleDeleteCourse = (id) => {
    setCourses(courses.filter((course) => course.id !== id));
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Manage Courses</h2>
      <form onSubmit={handleAddCourse} className="space-y-4 mb-4">
        <div>
          <label className="block font-medium">Course Title</label>
          <input
            type="text"
            value={formState.title}
            onChange={(e) => setFormState({ ...formState, title: e.target.value })}
            className="w-full p-2 border rounded"
            placeholder="Enter course title"
            required
          />
        </div>
        <div>
          <label className="block font-medium">Course Description</label>
          <textarea
            value={formState.description}
            onChange={(e) => setFormState({ ...formState, description: e.target.value })}
            className="w-full p-2 border rounded"
            placeholder="Enter course description"
            required
          ></textarea>
        </div>
        <button type="submit" className="px-4 py-2 text-white bg-blue-500 rounded">
          Add Course
        </button>
      </form>

      <table className="table-auto w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2">ID</th>
            <th className="border border-gray-300 px-4 py-2">Title</th>
            <th className="border border-gray-300 px-4 py-2">Description</th>
            <th className="border border-gray-300 px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course) => (
            <tr key={course.id}>
              <td className="border border-gray-300 px-4 py-2">{course.id}</td>
              <td className="border border-gray-300 px-4 py-2">{course.title}</td>
              <td className="border border-gray-300 px-4 py-2">{course.description}</td>
              <td className="border border-gray-300 px-4 py-2">
                <button
                  onClick={() => handleDeleteCourse(course.id)}
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

export default Courses;
