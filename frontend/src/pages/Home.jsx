import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  BookOpen,
  Users,
  UserCheck,
  Briefcase,
  ArrowRight,
  Check,
} from "lucide-react";

export default function Dashboard() {
  const navigate = useNavigate();
  const [activeUser, setActiveUser] = useState(null);

  const userTypes = [
    {
      key: "admin",
      label: "Admin",
      icon: <Briefcase size={24} />,
      description: "System management and oversight",
      features: ["User management", "Analytics", "Curriculum oversight"],
    },
    {
      key: "tutor",
      label: "Teacher",
      icon: <BookOpen size={24} />,
      description: "Course creation and student assessment",
      features: ["Course management", "Assessment tools", "Resource library"],
    },
    {
      key: "student",
      label: "Student",
      icon: <Users size={24} />,
      description: "Access learning materials and track progress",
      features: ["Course access", "Assignment tracking", "Learning materials"],
    },
    {
      key: "employee",
      label: "Employer",
      icon: <UserCheck size={24} />,
      description: "Team training and development",
      features: ["Team monitoring", "Training management", "Budget tools"],
    },
  ];

  const enterAs = (userType) => {
    switch (userType) {
      case "admin":
        navigate("/admin");
        break;
      case "tutor":
        navigate("/teacher");
        break;
      case "student":
        navigate("/student/dashboard");
        break;
      case "employee":
        navigate("/employeedashboard");
        break;
    }
  };

  return (
    <div className="min-h-screen font-sans bg-white text-gray-900">
      {/* Header */}
      <header className="sticky top-0 z-20 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-bold">NovaSuite</h1>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-600 hover:text-black">
                Product
              </a>
              <a href="#" className="text-gray-600 hover:text-black">
                Why us?
              </a>
              <a href="#" className="text-gray-600 hover:text-black">
                Cases
              </a>
              <a href="#" className="text-gray-600 hover:text-black">
                About us
              </a>
              <a href="#" className="text-gray-600 hover:text-black">
                Blog
              </a>
            </nav>
            <div className="flex items-center space-x-4">
              <button className="px-5 py-2.5 bg-green-400 hover:bg-green-500 text-black rounded-full font-medium text-sm">
                Book a demo
              </button>
              <div className="flex items-center text-gray-600">
                <span>English</span>
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="py-12 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-16">
              {/* Left side: Image with text overlay at bottom-left */}
              <div className="relative w-full lg:w-3/5 rounded-xl overflow-hidden">
                {/* Background image */}
                <img
                  src="./public/hero.jpg"
                  alt="Educational workspace"
                  className="w-full rounded-xl"
                />

                {/* Bottom-left overlay card - positioned exactly as in your image */}
                <div className="absolute left-0 bottom-0 p-6  md:p-10 bg-white rounded-xl rounded-bl-none rounded-tr-none max-w-md">
                  <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                    Choose your role
                    <br />
                    and get started
                  </h1>

                  <p className="text-gray-700 text-base mb-6">
                    Our mission is to put people first. We want to make
                    educational communities that are fun, fast and effective.
                  </p>

                  <button className="bg-black hover:bg-gray-800 text-white px-5 py-2 rounded-lg font-medium inline-flex items-center transition-colors">
                    Get Started
                    <ArrowRight size={16} className="ml-2" />
                  </button>
                </div>
              </div>

              {/* Right side: Role selection cards */}
              <div className="w-full lg:w-2/5 mt-6 lg:mt-0">
                <div className="bg-white border border-gray-200 rounded-xl shadow-md p-6 max-w-md mx-auto lg:mx-0">
                  <h3 className="text-lg font-semibold mb-4">
                    Select Your Role
                  </h3>
                  <div className="space-y-3">
                    {userTypes.map((type) => (
                      <div
                        key={type.key}
                        className={`flex items-center justify-between p-3 rounded-lg border cursor-pointer transition-all ${
                          activeUser === type.key
                            ? "border-green-400 bg-green-50"
                            : "border-gray-200 hover:border-green-300"
                        }`}
                        onClick={() => setActiveUser(type.key)}
                      >
                        <div className="flex items-center space-x-3">
                          <div className="p-2 rounded-full bg-gray-100 text-gray-600">
                            {type.icon}
                          </div>
                          <div>
                            <h4 className="text-sm font-medium">
                              {type.label}
                            </h4>
                            <p className="text-xs text-gray-500">
                              {type.description}
                            </p>
                          </div>
                        </div>
                        {activeUser === type.key && (
                          <Check size={18} className="text-green-500" />
                        )}
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => enterAs(activeUser)}
                    disabled={!activeUser}
                    className={`mt-6 w-full py-2 rounded-lg font-medium flex items-center justify-center space-x-2 ${
                      activeUser
                        ? "bg-black text-white"
                        : "bg-gray-100 text-gray-400 cursor-not-allowed"
                    }`}
                  >
                    <span>Continue</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Feature highlight section with illustration */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
              <div className="lg:w-1/2">
                <div className="relative">
                  {/* Real image instead of placeholder */}
                  <div className="relative w-full h-96 rounded-2xl shadow-lg overflow-hidden">
                    <img
                      src="/public/hero.jpg"
                      alt="Educational collaboration platform"
                      className="w-full h-full object-cover"
                    />

                    {/* Overlay elements to enhance the image */}
                    <div className="absolute inset-0 bg-gradient-to-br from-black/10 to-transparent"></div>

                    {/* Floating UI elements on top of the image */}
                    <div className="absolute top-8 left-8 w-3/4 h-12 bg-white/80 backdrop-blur-sm rounded-lg shadow-md"></div>
                    <div className="absolute bottom-8 right-8 w-24 h-24 bg-green-100 rounded-xl flex items-center justify-center shadow-md">
                      <div className="w-12 h-12 bg-green-400 rounded-md"></div>
                    </div>
                  </div>

                  {/* Decorative elements */}
                  <div className="absolute -z-10 -bottom-8 -left-8 w-64 h-64 bg-green-50 rounded-full"></div>
                  <div className="absolute -z-10 top-1/4 right-0 w-12 h-12 bg-gray-200 rounded-md transform translate-x-6"></div>
                </div>
              </div>

              <div className="lg:w-1/2 space-y-8">
                <h2 className="text-4xl font-bold leading-tight">
                  Designed for{" "}
                  <span className="text-green-500">productivity</span> and{" "}
                  <span className="text-green-500">collaboration</span>
                </h2>
                <p className="text-xl text-gray-600">
                  NovaSuite provides intuitive tools that make educational
                  management simple and effective.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                      <Check className="text-green-600" size={20} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">
                        Seamless Integration
                      </h3>
                      <p className="text-gray-600">
                        Connect all your educational tools and workflows in one
                        place.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                      <Check className="text-green-600" size={20} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">
                        Real-time Analytics
                      </h3>
                      <p className="text-gray-600">
                        Make data-driven decisions with comprehensive insights
                        and reports.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                      <Check className="text-green-600" size={20} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">
                        Personalized Experience
                      </h3>
                      <p className="text-gray-600">
                        Tailored workflows for each role in your educational
                        ecosystem.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <button className="px-6 py-3 bg-green-400 hover:bg-green-500 text-black rounded-lg font-medium">
                    Learn more about our features
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Simple Footer */}
      <footer className="bg-gray-50 border-t border-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h1 className="text-xl font-bold">NovaSuite</h1>
              <p className="text-gray-500 mt-2">
                Making education better, together.
              </p>
            </div>

            <div className="flex flex-wrap gap-8">
              <div>
                <h4 className="font-semibold mb-3">Product</h4>
                <ul className="space-y-2 text-gray-500">
                  <li>
                    <a href="#" className="hover:text-black">
                      Features
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-black">
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-black">
                      Updates
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-3">Company</h4>
                <ul className="space-y-2 text-gray-500">
                  <li>
                    <a href="#" className="hover:text-black">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-black">
                      Careers
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-black">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-3">Resources</h4>
                <ul className="space-y-2 text-gray-500">
                  <li>
                    <a href="#" className="hover:text-black">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-black">
                      Help Center
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-black">
                      Community
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              © 2025 NovaSuite. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-gray-700">
                <span className="sr-only">Twitter</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-700">
                <span className="sr-only">LinkedIn</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
