// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route,  useNavigate } from "react-router-dom";
import { LanguageProvider } from "./Context/LanguageContext";

// Landing Page Components
import Header from "./pages/Maindash/Header";
import Hero from "./pages/Maindash/Hero";
import Experience from "./pages/Maindash/Experience";
import UseCases from "./pages/Maindash/UseCases";
import ForStudents from "./pages/Maindash/ForStudents";
import ForAudiences from "./pages/Maindash/ForAudiences";
import InternshipTypes from "./pages/Maindash/InternshipTypes";

import Matters from "./pages/Maindash/Matters";
import Footer from "./pages/Maindash/Footer";
import Forms from "./pages/Maindash/Form/DemoBookingForm";
import LiaHub from "./pages/Maindash/Products/LiaHub";
import LMS from "./pages/Maindash/Products/LMS";

// Pages
import Home from "./pages/Home";

// Employer Components
import Main from "./components/Employer/main";
import StudentList from "./components/Employer/Students";
import TeacherList from "./components/Employer/TeacherList";
import Contracts1 from "./components/Employer/Contracts";
import Applications from "./components/Employer/Applications";
import DashboardHome from "./components/Employer/employeedashboard";

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
import ManageGroups from "./components/Teacher/groups/ManageGroups";
import ContactPage from "./pages/Contact";
import { ThemeProvider } from "./Context/ThemeContext";

// Layout components
const Layout = ({ children }) => (
  <div className="font-poppins text-black dark:text-white bg-white dark:bg-gray-900 min-h-screen">
    {children}
  </div>
);

function FloatingButton() {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate('/demo')}
      className="fixed bottom-8 right-8 flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 z-50 group hover:px-6"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 group-hover:animate-pulse"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
      <span className="overflow-hidden max-w-0 group-hover:max-w-[200px] transition-all duration-300 whitespace-nowrap font-semibold">
        Book a Demo
      </span>
    </button>
  );
}

// Landing Page Wrapper
const LandingPage = () => (
  <Layout>
    <Header />
    <main>
      <Hero />
      <Experience />
      <UseCases />
      <ForStudents />
      <ForAudiences/>
     <Matters />
     <InternshipTypes />
     
    </main>
    <Footer />
     <FloatingButton />
  </Layout>
);

// Employer Layout
const EmployerLayout = ({ children }) => (
  <Layout>
    <Main>
      {children}
    </Main>
  </Layout>
);

// Student Layout
const StudentLayout = ({ children }) => (
  <Layout>
    <StudentDashboard>
      {children}
    </StudentDashboard>
  </Layout>
);

// Teacher Layout
const TeacherLayout = ({ children }) => (
  <Layout>
    <TeacherSidebar>
      {children}
    </TeacherSidebar>
  </Layout>
);

const ContactPageWrapper = () => (
  <Layout>
    <Header />
    <main>
      <ContactPage />
    </main>
    <Footer />
    <FloatingButton />
  </Layout>
);

export default function App() {
  return (
    <ThemeProvider>
    <LanguageProvider>
      <Router>
        <Routes>
          {/* Landing Page Route */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/form" element={<Forms />} />
          <Route path="/Liahub" element={<LiaHub />} />
          <Route path="/Lms" element={<LMS />} />
           <Route path="/contact" element={<ContactPageWrapper />} />

          {/* Employer Routes */}
          <Route path="/employer" element={<EmployerLayout />}>
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
          <Route path="/student" element={<StudentLayout />}>
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
          <Route path="/teacher" element={<TeacherLayout />}>
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
    </LanguageProvider>
    </ThemeProvider>
  );
}