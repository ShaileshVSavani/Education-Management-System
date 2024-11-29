const GradeManagement = ({ courses, students, grades, handleGradeChange }) => (
    <div>
      <h2 className="text-xl font-semibold mb-2 text-gray-700">Manage Grades</h2>
      {courses.map((course) => (
        <div key={course.id} className="mb-6">
          <h3 className="text-lg font-medium mb-2">{course.title}</h3>
          <table className="table-auto w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-blue-100">
                <th className="border border-gray-300 px-6 py-3">Student Name</th>
                <th className="border border-gray-300 px-6 py-3">Current Grade</th>
                <th className="border border-gray-300 px-6 py-3">Update Grade</th>
              </tr>
            </thead>
            <tbody>
              {students
                .filter((student) => student.courseId === course.id)
                .map((student) => (
                  <tr key={student.id}>
                    <td className="border border-gray-300 px-6 py-3 text-center">{student.name}</td>
                    <td className="border border-gray-300 px-6 py-3 text-center">
                      {grades[course.id]?.[student.id] || "Not Graded"}
                    </td>
                    <td className="border border-gray-300 px-6 py-3 text-center">
                      <input
                        type="text"
                        placeholder="Enter Grade"
                        className="p-2 border rounded-md"
                        onBlur={(e) =>
                          handleGradeChange(student.id, course.id, e.target.value)
                        }
                      />
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
  
  export default GradeManagement;
  