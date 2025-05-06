import React from "react";


const DashboardHome = () => {
  // You can fetch actual data and replace the numbers below
  const summary = [
    { title: "Total Students", count: 120, bg: "bg-blue-100", color: "text-blue-800" },
    { title: "Total Teachers", count: 12, bg: "bg-green-100", color: "text-green-800" },
    { title: "Internships Posted", count: 5, bg: "bg-yellow-100", color: "text-yellow-800" },
    { title: "Jobs Posted", count: 3, bg: "bg-purple-100", color: "text-purple-800" },
    { title: "Applications Received", count: 76, bg: "bg-red-100", color: "text-red-800" },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Welcome to Employer Dashboard</h1>
      <p className="mb-6 text-gray-600">Here's a quick overview of your activity:</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {summary.map((item) => (
          <div
            key={item.title}
            className={`p-4 rounded-xl shadow-sm ${item.bg} ${item.color}`}
          >
            <h2 className="text-lg font-semibold">{item.title}</h2>
            <p className="text-2xl font-bold">{item.count}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardHome;
