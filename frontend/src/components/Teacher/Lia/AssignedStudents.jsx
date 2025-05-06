import React, { useEffect, useState } from "react";
import {
  UserGroupIcon,
  UserCircleIcon,
  EnvelopeIcon,
  CalendarDaysIcon,
} from "@heroicons/react/24/outline";

const AssignedStudents = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    // Simulate API call
    const fetchedStudents = [
      {
        id: 1,
        name: "Alice Johnson",
        email: "alice@example.com",
        enrollmentDate: "2023-09-15",
        status: "active",
        course: "Computer Science",
      },
      {
        id: 2,
        name: "Bob Smith",
        email: "bob@example.com",
        enrollmentDate: "2023-08-20",
        status: "inactive",
        course: "Data Analytics",
      },
    ];
    setStudents(fetchedStudents);
  }, []);

  return (
    <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-100">
      <div className="flex items-center gap-3 mb-6">
        <UserGroupIcon className="w-8 h-8 text-indigo-600" />
        <h2 className="text-2xl font-semibold text-gray-800">
          Assigned Students
        </h2>
      </div>

      {students.length === 0 ? (
        <div className="text-center py-8 bg-gray-50 rounded-lg">
          <p className="text-gray-500">No students currently assigned</p>
        </div>
      ) : (
        <div className="overflow-x-auto rounded-lg border border-gray-200">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="py-4 px-6 text-left text-sm font-medium text-gray-600 uppercase tracking-wider">
                  Student
                </th>
                <th className="py-4 px-6 text-left text-sm font-medium text-gray-600 uppercase tracking-wider">
                  Contact
                </th>
                <th className="py-4 px-6 text-left text-sm font-medium text-gray-600 uppercase tracking-wider">
                  Enrollment Date
                </th>
                <th className="py-4 px-6 text-left text-sm font-medium text-gray-600 uppercase tracking-wider">
                  Status
                </th>
                <th className="py-4 px-6 text-left text-sm font-medium text-gray-600 uppercase tracking-wider">
                  Course
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {students.map((student) => (
                <tr
                  key={student.id}
                  className="hover:bg-gray-50 transition-colors duration-150"
                >
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                      <UserCircleIcon className="w-8 h-8 text-gray-400" />
                      <span className="font-medium text-gray-800">
                        {student.name}
                      </span>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-2">
                      <EnvelopeIcon className="w-5 h-5 text-gray-400" />
                      <a
                        href={`mailto:${student.email}`}
                        className="text-indigo-600 hover:underline"
                      >
                        {student.email}
                      </a>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-2">
                      <CalendarDaysIcon className="w-5 h-5 text-gray-400" />
                      <span className="text-gray-600">
                        {new Date(student.enrollmentDate).toLocaleDateString()}
                      </span>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <span
                      className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                        student.status === "active"
                          ? "bg-green-100 text-green-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {student.status.charAt(0).toUpperCase() +
                        student.status.slice(1)}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-gray-600">{student.course}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AssignedStudents;
