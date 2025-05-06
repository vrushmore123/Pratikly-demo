import React from "react";
import {
  AcademicCapIcon,
  UserCircleIcon,
  ClipboardDocumentIcon,
  StarIcon,
  CalendarDaysIcon,
} from "@heroicons/react/24/outline";

const enrolledCourses = [
  {
    id: 1,
    course: "Mathematics",
    teacher: "Mr. Smith",
    assignmentStatus: "Submitted",
    grade: "A",
    dueDate: "2024-03-20",
    progress: 90,
  },
  {
    id: 2,
    course: "Science",
    teacher: "Ms. Johnson",
    assignmentStatus: "Pending",
    grade: "N/A",
    dueDate: "2024-03-25",
    progress: 35,
  },
  {
    id: 3,
    course: "English Literature",
    teacher: "Mrs. Brown",
    assignmentStatus: "Submitted Late",
    grade: "B+",
    dueDate: "2024-03-18",
    progress: 78,
  },
];

const StudentCourses = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-100">
      <div className="flex items-center gap-3 mb-6">
        <AcademicCapIcon className="w-8 h-8 text-indigo-600" />
        <h2 className="text-2xl font-semibold text-gray-800">
          Enrolled Courses & Assignments
        </h2>
      </div>

      <div className="overflow-x-auto rounded-lg border border-gray-200">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="py-4 px-6 text-left text-sm font-medium text-gray-600 uppercase tracking-wider">
                Course
              </th>
              <th className="py-4 px-6 text-left text-sm font-medium text-gray-600 uppercase tracking-wider">
                Instructor
              </th>
              <th className="py-4 px-6 text-left text-sm font-medium text-gray-600 uppercase tracking-wider">
                Progress
              </th>
              <th className="py-4 px-6 text-left text-sm font-medium text-gray-600 uppercase tracking-wider">
                Assignments
              </th>
              <th className="py-4 px-6 text-left text-sm font-medium text-gray-600 uppercase tracking-wider">
                Grade
              </th>
              <th className="py-4 px-6 text-left text-sm font-medium text-gray-600 uppercase tracking-wider">
                Due Date
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {enrolledCourses.map((course) => (
              <tr
                key={course.id}
                className="hover:bg-gray-50 transition-colors duration-150"
              >
                <td className="py-4 px-6 font-medium text-gray-800">
                  <div className="flex items-center gap-2">
                    <AcademicCapIcon className="w-5 h-5 text-gray-400" />
                    {course.course}
                  </div>
                </td>
                <td className="py-4 px-6">
                  <div className="flex items-center gap-2">
                    <UserCircleIcon className="w-5 h-5 text-gray-400" />
                    <span className="text-gray-600">{course.teacher}</span>
                  </div>
                </td>
                <td className="py-4 px-6">
                  <div className="flex items-center gap-3">
                    <div className="w-20 h-2 bg-gray-200 rounded-full">
                      <div
                        className="h-full rounded-full bg-indigo-600 transition-all duration-500"
                        style={{ width: `${course.progress}%` }}
                      ></div>
                    </div>
                    <span className="text-gray-600">{course.progress}%</span>
                  </div>
                </td>
                <td className="py-4 px-6">
                  <span
                    className={`inline-flex items-center px-3 py-1 rounded-full text-sm ${
                      course.assignmentStatus === "Submitted"
                        ? "bg-green-100 text-green-800"
                        : course.assignmentStatus === "Submitted Late"
                        ? "bg-orange-100 text-orange-800"
                        : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    <ClipboardDocumentIcon className="w-4 h-4 mr-2" />
                    {course.assignmentStatus}
                  </span>
                </td>
                <td className="py-4 px-6">
                  <div className="flex items-center gap-2">
                    <StarIcon className="w-5 h-5 text-gray-400" />
                    <span
                      className={`font-semibold ${
                        course.grade === "A"
                          ? "text-green-600"
                          : course.grade === "B+"
                          ? "text-blue-600"
                          : course.grade === "N/A"
                          ? "text-gray-500"
                          : "text-indigo-600"
                      }`}
                    >
                      {course.grade}
                    </span>
                  </div>
                </td>
                <td className="py-4 px-6">
                  <div className="flex items-center gap-2">
                    <CalendarDaysIcon className="w-5 h-5 text-gray-400" />
                    <span className="text-gray-600">
                      {new Date(course.dueDate).toLocaleDateString()}
                    </span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentCourses;
