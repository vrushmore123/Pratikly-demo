import React, { useState, useEffect } from "react";
import {
  FaUsers,
  FaGift,
  FaCommentDots,
  FaStickyNote,
  FaCog,
  FaTachometerAlt,
  FaSearch,
  FaBars,
  FaTimes,
  FaChevronRight,
  FaChevronDown,
  FaUserCircle,
  FaBell,
  FaSignOutAlt,
  FaCalendarAlt,
  FaGraduationCap,
} from "react-icons/fa";
import { NavLink, Outlet, useLocation } from "react-router-dom";

// Updated menu items with Dashboard added
const menuItems = [
  {
    title: "Dashboard",
    icon: <FaTachometerAlt />,
    path: "dashboard",
  },
  {
    title: "Groups",
    icon: <FaUsers />,
    submenu: [
      { label: "Manage Groups", path: "manage-groups" },
      { label: "Create Teams", path: "create-teams" },
      { label: "Assign Tasks", path: "assign-tasks" },
    ],
  },
  {
    title: "LIA",
    icon: <FaGift />,
    submenu: [
      { label: "Assigned Students", path: "assigned-students" },
      { label: "Evaluation Reports", path: "evaluation-reports" },
      { label: "Contracts", path: "contracts" },
    ],
  },
  {
    title: "Communication",
    icon: <FaCommentDots />,
    submenu: [
      { label: "Messages", path: "messages" },
      { label: "Notifications", path: "notifications" },
      { label: "Announcements", path: "announcements" },
    ],
  },
  {
    title: "Calendar",
    icon: <FaCalendarAlt />,
    path: "calendar",
  },
  {
    title: "Students",
    icon: <FaGraduationCap />,
    path: "students",
  },
  {
    title: "Notes",
    icon: <FaStickyNote />,
    submenu: [
      { label: "All Notes", path: "all-notes" },
      { label: "Create New", path: "create-note" },
      { label: "Shared Notes", path: "shared-notes" },
    ],
  },
  {
    title: "Settings",
    icon: <FaCog />,
    submenu: [
      { label: "Personal Info", path: "personal-info" },
      { label: "Notification Preferences", path: "notification-preferences" },
      { label: "Change Password", path: "change-password" },
    ],
  },
];

// Mock data for dashboard widgets
const upcomingClasses = [
  { id: 1, subject: "Web Development", time: "10:00 AM", room: "Room 301" },
  { id: 2, subject: "Database Design", time: "1:30 PM", room: "Lab 204" },
];

const pendingTasks = [
  { id: 1, title: "Grade Project Submissions", due: "Today" },
  { id: 2, title: "Review Course Material", due: "Tomorrow" },
  { id: 3, title: "Update Student Progress", due: "May 8" },
];

export default function TeacherSidebar() {
  const [openMenus, setOpenMenus] = useState({});
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [unreadNotifications, setUnreadNotifications] = useState(3);
  const location = useLocation();

  // Check if current path is active
  const isActive = (path) => {
    return (
      location.pathname === `/teacher/${path}` ||
      location.pathname.startsWith(`/teacher/${path}/`)
    );
  };

  // Handle window resize to detect mobile view
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth < 768) {
        setIsSidebarOpen(false);
      } else {
        setIsSidebarOpen(true);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initialize on component mount

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = (title) => {
    setOpenMenus((prev) => ({ ...prev, [title]: !prev[title] }));
  };

  // Filter menu items based on search
  const filteredMenuItems = searchQuery
    ? menuItems.filter(
        (item) =>
          item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          (item.submenu &&
            item.submenu.some((sub) =>
              sub.label.toLowerCase().includes(searchQuery.toLowerCase())
            ))
      )
    : menuItems;

  // Dashboard component
  const Dashboard = () => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Welcome Card */}
        <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl p-6 text-white shadow-lg md:col-span-2 lg:col-span-3">
          <h2 className="text-2xl font-bold mb-2">
            Welcome back, Professor Anderson!
          </h2>
          <p className="opacity-90">Monday, May 05, 2025</p>
          <div className="mt-4 flex flex-wrap gap-4">
            <div className="bg-white bg-opacity-20 rounded-lg px-4 py-2 backdrop-blur-sm">
              <p className="text-sm">Active Students</p>
              <p className="text-2xl font-bold">127</p>
            </div>
            <div className="bg-white bg-opacity-20 rounded-lg px-4 py-2 backdrop-blur-sm">
              <p className="text-sm">Classes Today</p>
              <p className="text-2xl font-bold">3</p>
            </div>
            <div className="bg-white bg-opacity-20 rounded-lg px-4 py-2 backdrop-blur-sm">
              <p className="text-sm">Pending Tasks</p>
              <p className="text-2xl font-bold">{pendingTasks.length}</p>
            </div>
          </div>
        </div>

        {/* Today's Classes */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-800">
              Today's Classes
            </h3>
            <FaCalendarAlt className="text-blue-500" />
          </div>
          <div className="space-y-4">
            {upcomingClasses.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
              >
                <div>
                  <p className="font-medium text-gray-800">{item.subject}</p>
                  <p className="text-sm text-gray-500">{item.room}</p>
                </div>
                <div className="text-blue-600 font-medium">{item.time}</div>
              </div>
            ))}
          </div>
          <button className="mt-4 w-full text-blue-500 text-sm font-medium hover:text-blue-700">
            View Full Schedule
          </button>
        </div>

        {/* Pending Tasks */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-800">
              Pending Tasks
            </h3>
            <FaStickyNote className="text-amber-500" />
          </div>
          <div className="space-y-3">
            {pendingTasks.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
              >
                <p className="font-medium text-gray-800">{item.title}</p>
                <span
                  className={`text-sm font-medium ${
                    item.due === "Today" ? "text-red-500" : "text-gray-500"
                  }`}
                >
                  {item.due}
                </span>
              </div>
            ))}
          </div>
          <button className="mt-4 w-full text-blue-500 text-sm font-medium hover:text-blue-700">
            View All Tasks
          </button>
        </div>

        {/* Recent Messages */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-800">
              Recent Messages
            </h3>
            <FaCommentDots className="text-green-500" />
          </div>
          <div className="space-y-3">
            <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-500">
                  <FaUserCircle size={20} />
                </div>
              </div>
              <div>
                <p className="font-medium text-gray-800">Sarah Johnson</p>
                <p className="text-sm text-gray-600 line-clamp-2">
                  I've submitted my assignment for review. Please let me know if
                  you need any changes.
                </p>
                <p className="text-xs text-gray-400 mt-1">10:30 AM</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-500">
                  <FaUserCircle size={20} />
                </div>
              </div>
              <div>
                <p className="font-medium text-gray-800">Michael Lee</p>
                <p className="text-sm text-gray-600 line-clamp-2">
                  Could we schedule a meeting to discuss the project
                  requirements?
                </p>
                <p className="text-xs text-gray-400 mt-1">Yesterday</p>
              </div>
            </div>
          </div>
          <button className="mt-4 w-full text-blue-500 text-sm font-medium hover:text-blue-700">
            Open Inbox
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      {/* Header for mobile */}
      <header className="bg-white border-b border-gray-200 py-3 px-4 flex items-center justify-between md:hidden">
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="text-gray-600 hover:text-blue-600 focus:outline-none"
        >
          {isSidebarOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
        <h1 className="text-xl font-bold text-blue-600">Teacher Portal</h1>
        <div className="relative">
          <FaBell className="text-gray-600" />
          {unreadNotifications > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
              {unreadNotifications}
            </span>
          )}
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar Overlay for Mobile */}
        {isMobile && isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-20"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}

        {/* Sidebar */}
        <aside
          className={`${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } transform bg-white border-r border-gray-200 w-64 flex-shrink-0 fixed md:relative z-30 h-full transition-transform duration-300 ease-in-out overflow-y-auto`}
        >
          <div className="p-4 flex flex-col h-full">
            {/* Logo and Title */}
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-xl font-bold text-blue-600">
                Teacher Portal
              </h1>
              <button
                onClick={() => setIsSidebarOpen(false)}
                className="text-gray-600 hover:text-blue-600 focus:outline-none md:hidden"
              >
                <FaTimes size={18} />
              </button>
            </div>

            {/* Search */}
            <div className="relative mb-6">
              <input
                type="text"
                placeholder="Search menu..."
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <FaSearch className="absolute left-3 top-3 text-gray-400" />
            </div>

            {/* Menu */}
            <nav className="flex-1 overflow-y-auto">
              <ul className="space-y-1">
                {filteredMenuItems.map((item) => (
                  <li key={item.title}>
                    {item.submenu ? (
                      <div>
                        <button
                          onClick={() => toggleMenu(item.title)}
                          className={`flex items-center justify-between w-full p-3 rounded-lg text-left transition-colors duration-200 ${
                            openMenus[item.title]
                              ? "bg-blue-50 text-blue-600"
                              : "text-gray-700 hover:bg-gray-100"
                          }`}
                        >
                          <span className="flex items-center space-x-3">
                            <span
                              className={`${
                                openMenus[item.title]
                                  ? "text-blue-600"
                                  : "text-gray-500"
                              }`}
                            >
                              {item.icon}
                            </span>
                            <span className="font-medium">{item.title}</span>
                          </span>
                          <span>
                            {openMenus[item.title] ? (
                              <FaChevronDown size={14} />
                            ) : (
                              <FaChevronRight size={14} />
                            )}
                          </span>
                        </button>
                        <div
                          className={`overflow-hidden transition-all duration-300 ease-in-out ${
                            openMenus[item.title] ? "max-h-60" : "max-h-0"
                          }`}
                        >
                          <ul className="pl-10 pr-3 py-2 space-y-1">
                            {item.submenu.map((sub) => (
                              <li key={sub.path}>
                                <NavLink
                                  to={`/teacher/${sub.path}`}
                                  className={({ isActive }) =>
                                    `block py-2 px-3 rounded-lg text-sm transition-colors duration-200 ${
                                      isActive
                                        ? "bg-blue-100 text-blue-700 font-medium"
                                        : "text-gray-700 hover:bg-gray-100"
                                    }`
                                  }
                                  onClick={() =>
                                    isMobile && setIsSidebarOpen(false)
                                  }
                                >
                                  {sub.label}
                                </NavLink>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ) : (
                      <NavLink
                        to={`/teacher/${item.path}`}
                        className={({ isActive }) =>
                          `flex items-center space-x-3 p-3 rounded-lg transition-colors duration-200 ${
                            isActive
                              ? "bg-blue-100 text-blue-700 font-medium"
                              : "text-gray-700 hover:bg-gray-100"
                          }`
                        }
                        onClick={() => isMobile && setIsSidebarOpen(false)}
                      >
                        <span
                          className={
                            isActive ? "text-blue-600" : "text-gray-500"
                          }
                        >
                          {item.icon}
                        </span>
                        <span>{item.title}</span>
                      </NavLink>
                    )}
                  </li>
                ))}
              </ul>
            </nav>

            {/* User Profile */}
            <div className="mt-auto pt-4 border-t border-gray-200">
              <div className="flex items-center space-x-3 p-2">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white">
                    <FaUserCircle size={24} />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">
                    Prof. Anderson
                  </p>
                  <p className="text-xs text-gray-500 truncate">
                    Computer Science
                  </p>
                </div>
                <button className="text-gray-500 hover:text-red-500">
                  <FaSignOutAlt size={16} />
                </button>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50 p-6">
          {location.pathname === "/teacher/dashboard" ||
          location.pathname === "/teacher" ? (
            <Dashboard />
          ) : (
            <div className="bg-white rounded-xl shadow-md p-6">
              <Outlet />
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
