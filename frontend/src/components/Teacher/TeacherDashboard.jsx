import React from "react";
import Sidebar from "./TeacherSidebar";

const TeacherDashboard = () => {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div style={{ flex: 1, padding: "20px" }}>
        <h1>Teacher Dashboard</h1>
        <div style={{ marginBottom: "20px" }}>
          <h3>Welcome, Teacher</h3>
          <p>Manage your classes, students, assignments, and settings here.</p>
        </div>
        <div>
          <h3>Class Overview</h3>
          {/* You can add dynamic class information here */}
        </div>
      </div>
    </div>
  );
};

export default TeacherDashboard;
