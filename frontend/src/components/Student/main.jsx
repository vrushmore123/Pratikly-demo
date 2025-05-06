import React, { useState, useEffect } from "react";
import {
  FaTachometerAlt,
  FaBook,
  FaUsers,
  FaBriefcase,
  FaCalendarAlt,
  FaStickyNote,
  FaCog,
  FaChevronDown,
  FaChevronRight,
  FaBars,
  FaTimes,
  FaUser,
  FaBell,
  FaSearch,
} from "react-icons/fa";
import { Outlet, useNavigate, useLocation } from "react-router-dom";

// Define menu items
const menuItems = [
  {
    title: "Dashboard",
    icon: <FaTachometerAlt />,
    route: "dashboard",
  },
  {
    title: "Courses",
    icon: <FaBook />,
    submenu: [
      { title: "My Courses", route: "my-courses" },
      { title: "Assignments", route: "assignments" },
      { title: "Grades", route: "grades" },
    ],
  },
  {
    title: "Groups",
    icon: <FaUsers />,
    route: "groups",
  },
  {
    title: "LIA (Internships)",
    icon: <FaBriefcase />,
    submenu: [
      { title: "Overview", route: "internship-overview" },
      { title: "Contracts", route: "internship-contracts" },
    ],
  },
  {
    title: "Calendar",
    icon: <FaCalendarAlt />,
    submenu: [
      { title: "Class Schedule", route: "class-schedule" },
      { title: "Assignment Deadlines", route: "assignment-deadlines" },
      { title: "Events & Meetings", route: "events-meetings" },
    ],
  },
  {
    title: "Notes",
    icon: <FaStickyNote />,
    submenu: [
      { title: "All Notes", route: "all-notes" },
      { title: "Create New", route: "create-note" },
      { title: "Shared Notes", route: "shared-notes" },
    ],
  },
  {
    title: "Settings",
    icon: <FaCog />,
    submenu: [
      { title: "Profile Info", route: "profile-info" },
      { title: "Notification Preferences", route: "notification-preferences" },
      { title: "Change Password", route: "change-password" },
    ],
  },
];

const Main = () => {
  const [activeMenus, setActiveMenus] = useState({});
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [unreadNotifications, setUnreadNotifications] = useState(3); // Example notification count
  const navigate = useNavigate();
  const location = useLocation();

  // Check if current route matches the menu item or its submenu
  const isActiveRoute = (item) => {
    const currentPath = location.pathname.substring(1); // Remove leading slash

    if (item.route && currentPath === item.route) {
      return true;
    }

    if (item.submenu) {
      return item.submenu.some((subItem) => currentPath === subItem.route);
    }

    return false;
  };

  // Handle window resize to detect mobile view
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth < 768) {
        setSidebarOpen(false);
      } else {
        setSidebarOpen(true);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initialize on component mount

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = (title) => {
    setActiveMenus((prev) => ({ ...prev, [title]: !prev[title] }));
  };

  const handleNavigation = (route) => {
    navigate(route);
    if (isMobile) {
      setSidebarOpen(false);
    }
  };

  // Filter menu items based on search
  const filteredMenuItems = searchTerm
    ? menuItems.filter(
        (item) =>
          item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          (item.submenu &&
            item.submenu.some((sub) =>
              sub.title.toLowerCase().includes(searchTerm.toLowerCase())
            ))
      )
    : menuItems;

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gray-50">
      {/* Mobile Header */}
      <div className="lg:hidden bg-white border-b border-gray-200 p-4 flex items-center justify-between">
        <button
          className="text-gray-600 hover:text-blue-600 focus:outline-none"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          {sidebarOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
        <div className="text-xl font-bold text-blue-600">Student Portal</div>
        <div className="flex items-center space-x-4">
          <button className="relative text-gray-600 hover:text-blue-600">
            <FaBell size={20} />
            {unreadNotifications > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
                {unreadNotifications}
              </span>
            )}
          </button>
          <button className="text-gray-600 hover:text-blue-600">
            <FaUser size={20} />
          </button>
        </div>
      </div>

      {/* Sidebar */}
      <aside
        className={`${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 fixed lg:sticky top-0 lg:top-0 left-0 h-full w-64 bg-white shadow-lg transition-transform duration-300 ease-in-out z-30`}
      >
        <div className="flex flex-col h-full">
          {/* Sidebar Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <h1 className="text-xl font-bold text-blue-600">Student Portal</h1>
            <button
              className="lg:hidden text-gray-600 hover:text-blue-600 focus:outline-none"
              onClick={() => setSidebarOpen(false)}
            >
              <FaTimes size={18} />
            </button>
          </div>

          {/* Search Bar */}
          <div className="p-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <FaSearch className="absolute left-3 top-3 text-gray-400" />
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto py-4 px-3">
            <ul className="space-y-1">
              {filteredMenuItems.map((item) => {
                const isActive = isActiveRoute(item);
                return (
                  <li key={item.title}>
                    {item.submenu ? (
                      <div>
                        <button
                          className={`flex items-center justify-between w-full px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                            isActive || activeMenus[item.title]
                              ? "bg-blue-100 text-blue-700"
                              : "text-gray-700 hover:bg-gray-100"
                          }`}
                          onClick={() => toggleMenu(item.title)}
                        >
                          <span className="flex items-center space-x-3">
                            <span
                              className={
                                isActive ? "text-blue-600" : "text-gray-500"
                              }
                            >
                              {item.icon}
                            </span>
                            <span>{item.title}</span>
                          </span>
                          <span
                            className="transition-transform duration-200"
                            style={{
                              transform: activeMenus[item.title]
                                ? "rotate(90deg)"
                                : "rotate(0)",
                            }}
                          >
                            <FaChevronRight size={12} />
                          </span>
                        </button>
                        <div
                          className={`overflow-hidden transition-all duration-300 ease-in-out ${
                            activeMenus[item.title] ? "max-h-60" : "max-h-0"
                          }`}
                        >
                          <ul className="mt-1 ml-6 space-y-1">
                            {item.submenu.map((sub, index) => (
                              <li key={index}>
                                <button
                                  className={`w-full text-left pl-6 pr-3 py-2 rounded-lg text-sm transition-colors duration-200 ${
                                    location.pathname.substring(1) === sub.route
                                      ? "bg-blue-50 text-blue-700 font-medium"
                                      : "text-gray-600 hover:bg-gray-100"
                                  }`}
                                  onClick={() => handleNavigation(sub.route)}
                                >
                                  {sub.title}
                                </button>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ) : (
                      <button
                        className={`flex items-center w-full px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                          isActive
                            ? "bg-blue-100 text-blue-700"
                            : "text-gray-700 hover:bg-gray-100"
                        }`}
                        onClick={() => handleNavigation(item.route)}
                      >
                        <span className="flex items-center space-x-3">
                          <span
                            className={
                              isActive ? "text-blue-600" : "text-gray-500"
                            }
                          >
                            {item.icon}
                          </span>
                          <span>{item.title}</span>
                        </span>
                      </button>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* User Profile Section */}
          <div className="mt-auto p-4 border-t border-gray-200">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white">
                <FaUser />
              </div>
              <div>
                <div className="font-medium text-gray-800">John Doe</div>
                <div className="text-xs text-gray-500">Computer Science</div>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Desktop Header */}
        <header className="hidden lg:flex items-center justify-between bg-white border-b border-gray-200 p-4 shadow-sm">
          <div className="flex items-center space-x-4">
            <button
              className="text-gray-600 hover:text-blue-600 focus:outline-none"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              <FaBars size={20} />
            </button>
            <h2 className="text-lg font-semibold text-gray-800">
              Welcome, John!
            </h2>
          </div>
          <div className="flex items-center space-x-6">
            <button className="relative text-gray-600 hover:text-blue-600">
              <FaBell size={20} />
              {unreadNotifications > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
                  {unreadNotifications}
                </span>
              )}
            </button>
            <div className="flex items-center space-x-3">
              <span className="text-sm font-medium text-gray-700">
                John Doe
              </span>
              <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white">
                <FaUser size={16} />
              </div>
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 p-6">
          {/* Overlay for mobile sidebar */}
          {sidebarOpen && isMobile && (
            <div
              className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
              onClick={() => setSidebarOpen(false)}
            />
          )}

          {/* Content */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <Outlet />
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-white border-t border-gray-200 p-4 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Student Portal • All rights reserved
        </footer>
      </div>
    </div>
  );
};

export default Main;
