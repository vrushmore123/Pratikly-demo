import React from "react";

const teachers = [
  {
    id: 1,
    name: "Dr. Kavita Desai",
    email: "kavita.desai@example.com",
    department: "Computer Science",
    experience: "8 years",
    status: "Active",
  },
  {
    id: 2,
    name: "Prof. Raj Malhotra",
    email: "raj.malhotra@example.com",
    department: "Business Administration",
    experience: "5 years",
    status: "On Leave",
  },
  {
    id: 3,
    name: "Dr. Nisha Patil",
    email: "nisha.patil@example.com",
    department: "Mechanical Engineering",
    experience: "10 years",
    status: "Active",
  },
  // Add more teachers as needed
];

export default function TeacherList() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">All Teachers</h1>
      <div className="bg-white rounded-xl shadow-lg overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-indigo-600 text-white">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium">Name</th>
              <th className="px-6 py-3 text-left text-sm font-medium">Email</th>
              <th className="px-6 py-3 text-left text-sm font-medium">Department</th>
              <th className="px-6 py-3 text-left text-sm font-medium">Experience</th>
              <th className="px-6 py-3 text-left text-sm font-medium">Status</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200 text-sm">
            {teachers.map((teacher) => (
              <tr key={teacher.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 font-medium text-gray-900">{teacher.name}</td>
                <td className="px-6 py-4 text-gray-700">{teacher.email}</td>
                <td className="px-6 py-4 text-gray-700">{teacher.department}</td>
                <td className="px-6 py-4 text-gray-700">{teacher.experience}</td>
                <td className="px-6 py-4">
                  <span
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      teacher.status === "Active"
                        ? "bg-green-100 text-green-800"
                        : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {teacher.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
