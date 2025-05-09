// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, Form } from "react-router-dom";

// Landing Page Components


// Pages
import Home from "./pages/Home";
import Main from "./components/Employer/main";
import StudentList from "./components/Employer/Students";
import TeacherList from "./components/Employer/TeacherList";
import Contracts1 from "./components/Employer/Contracts";
import Applications from "./components/Employer/Applications";

// Student Components
import StudentDashboard from "./components/Student/main";
import Dashboard from "./components/Student/Dashboard";
import Courses from "./components/Student/Courses/Courses";
import Groups from "./components/Student/Groups";
import Internship from "./components/Student/LIA/Internship";
import Notes from "./components/Student/Notes";
import Assignments from "./components/Student/Courses/Assignment";
import Grades from "./components/Student/Courses/grades";

// Teacher Components
import TeacherSidebar from "./components/Teacher/TeacherSidebar";
import AssignedStudents from "./components/Teacher/Lia/AssignedStudents";
import EvaluationReports from "./components/Teacher/Lia/EvaluationReports";
import CreateTeams from "./components/Teacher/groups/CreateTeams";
import AssignTasks from "./components/Teacher/groups/AssignTasks";
import Messages from "./components/Teacher/Communication/Messages";
import Notifications from "./components/Teacher/Communication/Notifications";
import Announcements from "./components/Teacher/Communication/Announcements";
import CreateNote from "./components/Teacher/Notes/CreateNote";
import AllNotes from "./components/Teacher/Notes/AllNotes";
import SharedNotes from "./components/Teacher/Notes/SharedNotes";
import PersonalInfo from "./components/Teacher/Settings/personalinfo";
import ChangePassword from "./components/Teacher/Settings/ChangePassword";
import TeacherDashboard from "./components/Teacher/TeacherDashboard";
import TeacherCalender from "./components/Teacher/Calender";
import StudentCourses from "./components/Teacher/Student";
import NotificationPreferences from "./components/Teacher/Communication/Notifications";
import DashboardHome from "./components/Employer/employeedashboard";
import ManageGroups from "./components/Teacher/groups/ManageGroups";

import Header from "./pages/Maindash/Header";
import Hero from "./pages/Maindash/Hero";
import Experience from "./pages/Maindash/Experience";
import UseCases from "./pages/Maindash/UseCases";


import Forms from "./pages/Maindash/Form/DemoBookingForm";
import CTA from "./pages/Maindash/CTA";
import Footer from "./pages/Maindash/Footer";

// Landing Page Wrapper
const LandingPage = () => (
  <div className="font-poppins text-black">
    <Header />
    <main>
      <Hero />
      <Experience />
      <UseCases />
      <CTA />
    </main>
    <Footer />
  </div>
);

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Landing Page Route */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/form" element={<Forms />} />
       

        {/* Employer Routes */}
        <Route path="/employer" element={<Main />}>
          <Route path="employeedashboard" element={<DashboardHome />} />
          <Route path="opportunities/manage-listings" element={<div>Manage Listings</div>} />
          <Route path="students" element={<StudentList />} />
          <Route path="teachers" element={<TeacherList />} />
          <Route path="contracts" element={<Contracts1 />} />
          <Route path="applications" element={<Applications />} />
          <Route path="calendar" element={<div>Calendar Page</div>} />
          <Route path="notes" element={<div>Notes Page</div>} />
        </Route>

        {/* Student Routes */}
        <Route path="/student" element={<StudentDashboard />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="assignments" element={<Assignments />} />
          <Route path="grades" element={<Grades />} />
          <Route path="internship-overview" element={<Internship />} />
          <Route path="my-courses" element={<Courses />} />
          <Route path="groups" element={<Groups />} />
          <Route path="calendar" element={<TeacherCalender />} />
          <Route path="notes" element={<Notes />} />
        </Route>

        {/* Teacher Routes */}
        <Route path="/teacher" element={<TeacherSidebar />}>
          <Route path="dashboard" element={<TeacherDashboard />} />
          <Route path="assigned-students" element={<AssignedStudents />} />
          <Route path="evaluation-reports" element={<EvaluationReports />} />
          <Route path="manage-groups" element={<ManageGroups />} />
          <Route path="create-teams" element={<CreateTeams />} />
          <Route path="assign-tasks" element={<AssignTasks />} />
          <Route path="messages" element={<Messages />} />
          <Route path="notifications" element={<Notifications />} />
          <Route path="announcements" element={<Announcements />} />
          <Route path="all-notes" element={<AllNotes />} />
          <Route path="create-note" element={<CreateNote />} />
          <Route path="shared-notes" element={<SharedNotes />} />
          <Route path="calendar" element={<TeacherCalender />} />
          <Route path="students" element={<StudentCourses />} />
          <Route path="personal-info" element={<PersonalInfo />} />
          <Route path="change-password" element={<ChangePassword />} />
          <Route path="notification-preferences" element={<NotificationPreferences />} />
        </Route>
      </Routes>
    </Router>
  );
}
