
import React, { useContext, useState } from 'react';
import AuthContext from '../../context/AuthContext';

const Courses = () => {
  const { user, courses, setCourses } = useContext(AuthContext); 
  const [formState, setFormState] = useState({ id: '', title: '', description: '' });

  // Handle adding or updating a course
  const handleAddOrUpdateCourse = (e) => {
    e.preventDefault();

    if (!formState.title || !formState.description) {
      return;
    }

    let updatedCourses = [...courses];
    if (formState.id) {
      // Update existing course
      updatedCourses = updatedCourses.map((course) =>
        course.id === formState.id
          ? { ...course, title: formState.title, description: formState.description }
          : course
      );
    } else {
      // Add new course
      const newCourse = {
        id: Date.now(),
        title: formState.title,
        description: formState.description,
      };
      updatedCourses.push(newCourse);
    }

    setCourses(updatedCourses);
    // Save the updated courses in localStorage
    const userData = JSON.parse(localStorage.getItem('user_data'));
    userData.courses = updatedCourses;
    localStorage.setItem('user_data', JSON.stringify(userData));

    // Reset form
    setFormState({ id: '', title: '', description: '' });
  };

  const handleDeleteCourse = (id) => {
    const updatedCourses = courses.filter(course => course.id !== id);
    setCourses(updatedCourses); 
    // Update localStorage
    const userData = JSON.parse(localStorage.getItem('user_data'));
    userData.courses = updatedCourses;
    localStorage.setItem('user_data', JSON.stringify(userData));
  };

  // Set course to be edited
  const handleEditCourse = (course) => {
    setFormState({
      id: course.id,
      title: course.title,
      description: course.description,
    });
  };

  if (!user || user.role !== 'admin') {
    return <div>Access Denied</div>;
  }

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Manage Courses</h2>
      <form onSubmit={handleAddOrUpdateCourse} className="space-y-4 mb-4">
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
          {formState.id ? 'Update Course' : 'Add Course'}
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
              <td className="border border-gray-300 px-4 py-2 text-center">{course.id}</td>
              <td className="border border-gray-300 px-4 py-2 text-center">{course.title}</td>
              <td className="border border-gray-300 px-4 py-2 text-center">{course.description}</td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                <button
                  onClick={() => handleEditCourse(course)}
                  className="px-4 py-2 text-white bg-yellow-500 rounded mr-2"
                >
                  Edit
                </button>
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
