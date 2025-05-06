import React, { useEffect, useState } from "react";
import {
  DocumentChartBarIcon,
  BookOpenIcon,
  ChartBarIcon,
  ChatBubbleLeftIcon,
  CalendarDaysIcon,
} from "@heroicons/react/24/outline";

const EvaluationReports = () => {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    // Simulated API fetch
    const fetchedReports = [
      {
        id: 1,
        student: "Alice Johnson",
        subject: "Mathematics",
        score: 85,
        remarks: "Excellent problem-solving skills",
        evaluationDate: "2024-03-15",
        status: "pass",
      },
      {
        id: 2,
        student: "Bob Smith",
        subject: "Computer Science",
        score: 92,
        remarks: "Outstanding algorithmic thinking",
        evaluationDate: "2024-03-14",
        status: "pass",
      },
      {
        id: 3,
        student: "Charlie Brown",
        subject: "Physics",
        score: 68,
        remarks: "Needs improvement in practicals",
        evaluationDate: "2024-03-13",
        status: "fail",
      },
    ];
    setReports(fetchedReports);
  }, []);

  return (
    <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-100">
      <div className="flex items-center gap-3 mb-6">
        <DocumentChartBarIcon className="w-8 h-8 text-indigo-600" />
        <h2 className="text-2xl font-semibold text-gray-800">
          Evaluation Reports
        </h2>
      </div>

      {reports.length === 0 ? (
        <div className="text-center py-8 bg-gray-50 rounded-lg">
          <p className="text-gray-500">No evaluation reports available</p>
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
                  Subject
                </th>
                <th className="py-4 px-6 text-left text-sm font-medium text-gray-600 uppercase tracking-wider">
                  Performance
                </th>
                <th className="py-4 px-6 text-left text-sm font-medium text-gray-600 uppercase tracking-wider">
                  Remarks
                </th>
                <th className="py-4 px-6 text-left text-sm font-medium text-gray-600 uppercase tracking-wider">
                  Date
                </th>
                <th className="py-4 px-6 text-left text-sm font-medium text-gray-600 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {reports.map((report) => (
                <tr
                  key={report.id}
                  className="hover:bg-gray-50 transition-colors duration-150"
                >
                  <td className="py-4 px-6 font-medium text-gray-800">
                    {report.student}
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-2">
                      <BookOpenIcon className="w-5 h-5 text-gray-400" />
                      <span className="text-gray-600">{report.subject}</span>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-2">
                      <ChartBarIcon className="w-5 h-5 text-gray-400" />
                      <span
                        className={`font-semibold ${
                          report.score >= 90
                            ? "text-green-700"
                            : report.score >= 70
                            ? "text-green-600"
                            : "text-red-600"
                        }`}
                      >
                        {report.score}%
                      </span>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-2">
                      <ChatBubbleLeftIcon className="w-5 h-5 text-gray-400" />
                      <span className="text-gray-600">{report.remarks}</span>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-2">
                      <CalendarDaysIcon className="w-5 h-5 text-gray-400" />
                      <span className="text-gray-600">
                        {new Date(report.evaluationDate).toLocaleDateString()}
                      </span>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <span
                      className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                        report.status === "pass"
                          ? "bg-green-100 text-green-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {report.status.charAt(0).toUpperCase() +
                        report.status.slice(1)}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default EvaluationReports;
