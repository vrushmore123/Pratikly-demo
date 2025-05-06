import React from "react";

const gradesData = [
  {
    course: "React Development",
    assignment: "Component Design",
    grade: "A",
    feedback: "Excellent use of props and state",
  },
  {
    course: "Database Systems",
    assignment: "ER Diagram",
    grade: "B+",
    feedback: "Good structure, but missing relationships",
  },
  {
    course: "Operating Systems",
    assignment: "Process Scheduling",
    grade: "A-",
    feedback: "Well explained concepts",
  },
];

const Grades = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">My Grades</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow rounded-lg overflow-hidden">
          <thead className="bg-gray-200 text-gray-700">
            <tr>
              <th className="py-3 px-4 text-left">Course</th>
              <th className="py-3 px-4 text-left">Assignment</th>
              <th className="py-3 px-4 text-left">Grade</th>
              <th className="py-3 px-4 text-left">Feedback</th>
            </tr>
          </thead>
          <tbody>
            {gradesData.map((grade, index) => (
              <tr key={index} className="border-b hover:bg-gray-50">
                <td className="py-3 px-4">{grade.course}</td>
                <td className="py-3 px-4">{grade.assignment}</td>
                <td className="py-3 px-4 font-semibold">{grade.grade}</td>
                <td className="py-3 px-4 text-sm text-gray-600">{grade.feedback}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Grades;
