import React from "react";

const dummyAssignments = [
  {
    id: 1,
    title: "React Basics Assignment",
    dueDate: "2025-05-10",
    status: "Pending",
  },
  {
    id: 2,
    title: "Database Design",
    dueDate: "2025-05-12",
    status: "Submitted",
  },
  {
    id: 3,
    title: "Team Project Report",
    dueDate: "2025-05-15",
    status: "Pending",
  },
];

const Assignments = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">My Assignments</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow rounded-lg overflow-hidden">
          <thead className="bg-gray-200 text-gray-700">
            <tr>
              <th className="py-3 px-4 text-left">Title</th>
              <th className="py-3 px-4 text-left">Due Date</th>
              <th className="py-3 px-4 text-left">Status</th>
              <th className="py-3 px-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {dummyAssignments.map((assignment) => (
              <tr key={assignment.id} className="border-b hover:bg-gray-50">
                <td className="py-3 px-4">{assignment.title}</td>
                <td className="py-3 px-4">{assignment.dueDate}</td>
                <td className="py-3 px-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      assignment.status === "Submitted"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {assignment.status}
                  </span>
                </td>
                <td className="py-3 px-4">
                  {assignment.status === "Pending" ? (
                    <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 text-sm">
                      Submit
                    </button>
                  ) : (
                    <button className="bg-gray-500 text-white px-3 py-1 rounded text-sm cursor-not-allowed" disabled>
                      Submitted
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Assignments;
