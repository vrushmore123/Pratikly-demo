import React, { useEffect, useState } from 'react';

const EvaluationReports = () => {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    // Simulated API fetch
    const fetchedReports = [
      { id: 1, student: 'Alice Johnson', subject: 'Math', score: 85, remarks: 'Good work!' },
      { id: 2, student: 'Bob Smith', subject: 'Science', score: 92, remarks: 'Excellent!' },
    ];
    setReports(fetchedReports);
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Evaluation Reports</h2>
      {reports.length === 0 ? (
        <p>No evaluation reports available.</p>
      ) : (
        <table className="min-w-full bg-white border rounded">
          <thead>
            <tr className="bg-gray-200 text-left">
              <th className="py-2 px-4">Student</th>
              <th className="py-2 px-4">Subject</th>
              <th className="py-2 px-4">Score</th>
              <th className="py-2 px-4">Remarks</th>
            </tr>
          </thead>
          <tbody>
            {reports.map((report) => (
              <tr key={report.id} className="border-t">
                <td className="py-2 px-4">{report.student}</td>
                <td className="py-2 px-4">{report.subject}</td>
                <td className="py-2 px-4">{report.score}</td>
                <td className="py-2 px-4">{report.remarks}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default EvaluationReports;
