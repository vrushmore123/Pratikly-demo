// src/student/Student.jsx
import React from "react";

const enrolledCourses = [
  {
    id: 1,
    course: "Mathematics",
    teacher: "Mr. Smith",
    assignmentStatus: "Submitted",
    grade: "A",
  },
  {
    id: 2,
    course: "Science",
    teacher: "Ms. Johnson",
    assignmentStatus: "Pending",
    grade: "N/A",
  },
  {
    id: 3,
    course: "English",
    teacher: "Mrs. Brown",
    assignmentStatus: "Submitted Late",
    grade: "B",
  },
];

const StudentCourses = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">My Enrolled Courses & Assignments</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 border">#</th>
              <th className="px-4 py-2 border">Course</th>
              <th className="px-4 py-2 border">Teacher</th>
              <th className="px-4 py-2 border">Assignment</th>
              <th className="px-4 py-2 border">Grade</th>
            </tr>
          </thead>
          <tbody>
            {enrolledCourses.map((course, index) => (
              <tr key={course.id} className="hover:bg-gray-50">
                <td className="px-4 py-2 border">{index + 1}</td>
                <td className="px-4 py-2 border">{course.course}</td>
                <td className="px-4 py-2 border">{course.teacher}</td>
                <td className="px-4 py-2 border">{course.assignmentStatus}</td>
                <td className="px-4 py-2 border">{course.grade}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentCourses;
