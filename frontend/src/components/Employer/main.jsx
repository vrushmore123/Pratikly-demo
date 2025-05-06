import { useState } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import {
  LayoutDashboard,
  Briefcase,
  GraduationCap,
  User,
  FileText,
  ClipboardList,
  CalendarDays,
  StickyNote,
  Settings,
  ChevronDown,
  ChevronRight,
} from "lucide-react";

const navItems = [
  { label: "Dashboard", icon: LayoutDashboard, path: "/employeedashboard" },
  {
    label: "Opportunities",
    icon: Briefcase,
    children: [
      { name: "Post Internship", path: "/opportunities/post-internship" },
      { name: "Post Job", path: "/opportunities/post-job" },
      { name: "Manage Listings", path: "/opportunities/manage-listings" },
    ],
  },
  { label: "Students", icon: GraduationCap, path: "/students" },
  { label: "Teachers", icon: User, path: "/teachers" },
  { label: "Contracts", icon: FileText, path: "/contracts" },
  { label: "Applications", icon: ClipboardList, path: "/applications" },
  {
    label: "Calendar",
    icon: CalendarDays,
    children: [
      { name: "Upcoming Events", path: "/calendar/upcoming-events" },
      { name: "Interview Slots", path: "/calendar/interview-slots" },
      { name: "Important Deadlines", path: "/calendar/deadlines" },
    ],
  },
  {
    label: "Notes",
    icon: StickyNote,
    children: [
      { name: "All Notes", path: "/notes/all" },
      { name: "Create New", path: "/notes/new" },
      { name: "Shared Notes", path: "/notes/shared" },
    ],
  },
  {
    label: "Settings",
    icon: Settings,
    children: [
      { name: "Profile Info", path: "/settings/profile" },
      { name: "Notification Preferences", path: "/settings/notifications" },
      { name: "Change Password", path: "/settings/password" },
    ],
  },
];

export default function Main() {
  const [openSections, setOpenSections] = useState({});
  const navigate = useNavigate();

  const toggleSection = (label) => {
    setOpenSections((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  const handleNavigation = (path) => {
    if (path) navigate(path);
  };

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-72 bg-gradient-to-b from-blue-900 to-indigo-800 text-white shadow-xl">
        <div className="p-6 text-2xl font-bold">My Academy</div>
        <nav className="space-y-4">
          {navItems.map((item) => (
            <div key={item.label} className="px-4">
              <div
                className="flex items-center justify-between py-2 hover:bg-indigo-700 rounded-md cursor-pointer"
                onClick={() =>
                  item.children
                    ? toggleSection(item.label)
                    : handleNavigation(item.path)
                }
              >
                <div className="flex items-center gap-3">
                  <item.icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </div>
                {item.children &&
                  (openSections[item.label] ? (
                    <ChevronDown className="w-4 h-4" />
                  ) : (
                    <ChevronRight className="w-4 h-4" />
                  ))}
              </div>
              {item.children && openSections[item.label] && (
                <ul className="ml-8 mt-2 space-y-1 text-sm text-indigo-100 transition-all">
                  {item.children.map((child) => (
                    <li
                      key={child.name}
                      className="hover:text-white cursor-pointer transition"
                      onClick={() => handleNavigation(child.path)}
                    >
                      {child.name}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 bg-gray-100 p-8 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
}
