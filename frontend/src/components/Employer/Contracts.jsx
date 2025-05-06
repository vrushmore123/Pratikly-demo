import React from "react";

const contracts = [
  {
    id: 1,
    title: "Internship Agreement - Infosys",
    employer: "Infosys Ltd",
    student: "Ravi Sharma",
    startDate: "2024-06-01",
    endDate: "2024-09-01",
    status: "Active",
  },
  {
    id: 2,
    title: "Job Offer - TCS",
    employer: "TCS",
    student: "Megha Jain",
    startDate: "2024-07-15",
    endDate: "2025-07-15",
    status: "Signed",
  },
  {
    id: 3,
    title: "Internship Contract - Wipro",
    employer: "Wipro",
    student: "Anil Yadav",
    startDate: "2024-08-01",
    endDate: "2024-11-01",
    status: "Pending",
  },
];

export default function Contracts1() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">All Contracts</h1>
      <div className="bg-white rounded-xl shadow-lg overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-indigo-600 text-white">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium">Title</th>
              <th className="px-6 py-3 text-left text-sm font-medium">Employer</th>
              <th className="px-6 py-3 text-left text-sm font-medium">Student</th>
              <th className="px-6 py-3 text-left text-sm font-medium">Start Date</th>
              <th className="px-6 py-3 text-left text-sm font-medium">End Date</th>
              <th className="px-6 py-3 text-left text-sm font-medium">Status</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200 text-sm">
            {contracts.map((contract) => (
              <tr key={contract.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 font-medium text-gray-900">{contract.title}</td>
                <td className="px-6 py-4 text-gray-700">{contract.employer}</td>
                <td className="px-6 py-4 text-gray-700">{contract.student}</td>
                <td className="px-6 py-4 text-gray-700">{contract.startDate}</td>
                <td className="px-6 py-4 text-gray-700">{contract.endDate}</td>
                <td className="px-6 py-4">
                  <span
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      contract.status === "Active"
                        ? "bg-green-100 text-green-800"
                        : contract.status === "Signed"
                        ? "bg-blue-100 text-blue-800"
                        : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {contract.status}
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
