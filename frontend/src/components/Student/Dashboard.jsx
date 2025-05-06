import React from "react";

const Dashboard = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-semibold text-gray-800 mb-4">
        Welcome to Your Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Quick Stats */}
        <div className="bg-blue-100 p-4 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold text-blue-800">
            Courses Enrolled
          </h2>
          <p className="text-3xl text-blue-900 mt-2">5</p>
        </div>

        <div className="bg-green-100 p-4 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold text-green-800">
            Pending Assignments
          </h2>
          <p className="text-3xl text-green-900 mt-2">3</p>
        </div>

        <div className="bg-yellow-100 p-4 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold text-yellow-800">
            Upcoming Events
          </h2>
          <p className="text-3xl text-yellow-900 mt-2">2</p>
        </div>
      </div>

      {/* Announcements */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">
          Recent Announcements
        </h2>
        <ul className="space-y-2">
          <li className="bg-gray-100 p-3 rounded shadow-sm">
            📢 Midterm exams will begin from next Monday. Please check the
            schedule.
          </li>
          <li className="bg-gray-100 p-3 rounded shadow-sm">
            📝 New assignments have been posted in the Data Structures course.
          </li>
          <li className="bg-gray-100 p-3 rounded shadow-sm">
            🎉 Hackathon registration is now open! Don’t miss out!
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
