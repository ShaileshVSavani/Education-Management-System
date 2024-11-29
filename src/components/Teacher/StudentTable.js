const StudentTable = ({ students, courses }) => (
    <div className="mb-6">
      <h2 className="text-xl font-semibold mb-2 text-gray-700">Student Progress</h2>
      <table className="table-auto w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-blue-100">
            <th className="border border-gray-300 px-6 py-3">Student Name</th>
            <th className="border border-gray-300 px-6 py-3">Course</th>
            <th className="border border-gray-300 px-6 py-3">Progress</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td className="border border-gray-300 px-6 py-3 text-center">{student.name}</td>
              <td className="border border-gray-300 px-6 py-3 text-center">
                {courses.find((course) => course.id === student.courseId)?.title}
              </td>
              <td className="border border-gray-300 px-6 py-3 text-center">{student.progress}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
  
  export default StudentTable;
  