import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  BookOpen,
  Users,
  UserCheck,
  Briefcase,
  ArrowRight,
  Check,
  ChevronDown,
  Moon,
  Sun,
} from "lucide-react";
import logo from '../assets/logoPraktikly.png';
import Hero from "../assets/Hero.png";
import hero2 from "../assets/hero2.png";

export default function Dashboard() {
  const navigate = useNavigate();
  const [activeUser, setActiveUser] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  // Initialize dark mode based on user preference or system preference
  useEffect(() => {
    // Check if user has a saved preference
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode !== null) {
      setDarkMode(savedMode === 'true');
    } else {
      // Check system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setDarkMode(prefersDark);
    }
  }, []);

  // Update document classes and localStorage when dark mode changes
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

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
    <div className={`min-h-screen font-sans ${darkMode ? 'dark bg-gray-900 text-gray-100' : 'bg-white text-gray-900'}`}>
      {/* Header - Updated with a better color scheme for the logo */}
      <header className={`sticky top-0 z-20 backdrop-blur-md shadow-md
        ${darkMode 
          ? 'bg-gray-800/95 border-b border-gray-700' 
          : 'bg-indigo-900/95 border-b border-indigo-800'}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo Area with Animation */}
            <div className="flex items-center space-x-2 group">
              <div className="flex items-center space-x-2">
                <Link to="/">
                  <img src={logo} alt="Praktikly Logo" className="h-8" />
                </Link>
              </div>
            </div>
            
            {/* Main Navigation with Indicators */}
            <nav className="hidden md:flex items-center">
              <div className={`flex p-1 rounded-xl shadow-inner ${darkMode ? 'bg-gray-700' : 'bg-indigo-800/30'}`}>
                {["Product", "Why us?", "Cases", "About us", "Blog"].map((item) => (
                  <a 
                    key={item} 
                    href="#" 
                    className={`relative px-4 py-2 font-medium rounded-lg transition-all duration-300
                      ${darkMode 
                        ? 'text-gray-300 hover:text-yellow-400' 
                        : 'text-gray-100 hover:text-yellow-300'} group`}
                  >
                    {item}
                    <span className="absolute bottom-1 left-1/2 w-0 h-0.5 bg-yellow-400 group-hover:w-3/4 transition-all duration-300 -translate-x-1/2 group-hover:translate-x-[-36%] opacity-0 group-hover:opacity-100"></span>
                  </a>
                ))}
              </div>
            </nav>
            
            {/* Action Buttons */}
            <div className="flex items-center space-x-4">
              {/* Dark Mode Toggle */}
              <button 
                onClick={toggleDarkMode}
                className={`p-2 rounded-lg transition-colors duration-300 ${
                  darkMode 
                    ? 'bg-gray-700 text-yellow-400 hover:bg-gray-600' 
                    : 'bg-indigo-800/30 text-yellow-300 hover:bg-indigo-700/50'
                }`}
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              
              {/* Login Button */}
              <button className={`px-4 py-2 border rounded-lg font-medium text-sm transition-all duration-300 hover:scale-105 hidden md:flex
                ${darkMode 
                  ? 'border-yellow-500 text-yellow-400 hover:bg-gray-800' 
                  : 'border-yellow-400 text-yellow-300 hover:bg-indigo-800/50'}`}>
                Log in
              </button>
              
              {/* CTA Button with Animation */}
              <button className={`px-5 py-2.5 rounded-lg font-medium text-sm transition-all duration-300 shadow-md hover:shadow-lg relative overflow-hidden group
                ${darkMode 
                  ? 'bg-gradient-to-r from-yellow-500 to-yellow-600 text-gray-900 hover:shadow-yellow-500/30' 
                  : 'bg-gradient-to-r from-yellow-400 to-yellow-500 text-white hover:shadow-yellow-200/50'}`}>
                <span className="relative z-10">Book a demo</span>
                <span className={`absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 
                  ${darkMode 
                    ? 'bg-gradient-to-r from-yellow-400 to-yellow-500' 
                    : 'bg-gradient-to-r from-yellow-300 to-yellow-400'}`}></span>
              </button>
              
              {/* Language Selector */}
              <div className="relative group">
                <div className={`flex items-center cursor-pointer transition-colors duration-300 py-2 px-3 rounded-lg
                  ${darkMode 
                    ? 'text-gray-300 hover:text-yellow-400 hover:bg-gray-800' 
                    : 'text-gray-100 hover:text-yellow-300 hover:bg-indigo-800/50'}`}>
                  <span>English</span>
                  <ChevronDown className="w-4 h-4 ml-1 group-hover:rotate-180 transition-transform duration-300" />
                </div>
                
                {/* Dropdown */}
                <div className={`absolute right-0 mt-2 w-32 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-right scale-95 group-hover:scale-100
                  ${darkMode 
                    ? 'bg-gray-800 border border-gray-700' 
                    : 'bg-white border border-gray-100'}`}>
                  <div className="py-1">
                    {["English", "Spanish", "French", "German"].map((lang) => (
                      <a 
                        key={lang} 
                        href="#" 
                        className={`block px-4 py-2 text-sm
                          ${darkMode 
                            ? 'text-gray-300 hover:bg-gray-700 hover:text-yellow-400' 
                            : 'text-gray-700 hover:bg-yellow-50 hover:text-yellow-500'}`}
                      >
                        {lang}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Mobile Menu Button (visible on mobile only) */}
              <button className={`md:hidden rounded-lg p-2 focus:outline-none
                ${darkMode 
                  ? 'text-gray-300 hover:bg-gray-800' 
                  : 'text-gray-100 hover:bg-indigo-800/50'}`}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className={`py-12 lg:py-24 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-16">
              {/* Left side: Image with text overlay at bottom-left */}
              <div className="relative w-full lg:w-3/5 rounded-xl overflow-hidden shadow-xl">
                {/* Background image */}
                <img
                  src={Hero}
                  alt="Educational workspace"
                  className="w-full h-full object-cover rounded-xl"
                  style={{ minHeight: "500px" }}
                />

                {/* Bottom-left overlay card - positioned exactly as in your image */}
                <div className={`absolute left-0 bottom-0 p-6 md:p-10 rounded-xl rounded-bl-none rounded-tr-none max-w-md shadow-lg
                  ${darkMode 
                    ? 'bg-gray-800/95 backdrop-blur-sm' 
                    : 'bg-white/95 backdrop-blur-sm'}`}>
                  <h1 className="text-2xl md:text-3xl font-bold mb-3">
                    Choose your role
                    <br />
                    <span className={darkMode ? 'text-yellow-400' : 'text-yellow-500'}>and get started</span>
                  </h1>

                  <p className={`text-base mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Our mission is to put people first. We want to make
                    educational communities that are fun, fast and effective
                    for all participants in the learning journey.
                  </p>

                  <button className={`px-5 py-3 rounded-lg font-medium inline-flex items-center transition-all duration-300 shadow-md hover:shadow-lg
                    ${darkMode 
                      ? 'bg-yellow-500 hover:bg-yellow-600 text-gray-900' 
                      : 'bg-yellow-400 hover:bg-yellow-500 text-white'}`}>
                    Get Started
                    <ArrowRight size={16} className="ml-2" />
                  </button>
                </div>
              </div>

              {/* Right side: Role selection cards */}
              <div className="w-full lg:w-2/5 mt-6 lg:mt-0">
                <div className={`border rounded-xl shadow-lg p-8 max-w-md mx-auto lg:mx-0
                  ${darkMode 
                    ? 'bg-gray-800 border-gray-700' 
                    : 'bg-white border-gray-200'}`}>
                  <h3 className={`text-lg font-semibold mb-6 ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>
                    Select Your Role
                  </h3>
                  <div className="space-y-4">
                    {userTypes.map((type) => (
                      <div
                        key={type.key}
                        className={`flex items-center justify-between p-4 rounded-lg border cursor-pointer transition-all duration-300 group ${
                          activeUser === type.key
                            ? darkMode 
                              ? 'border-yellow-500 bg-yellow-500/10 shadow-md' 
                              : 'border-yellow-400 bg-yellow-50 shadow-md'
                            : darkMode 
                              ? 'border-gray-700 hover:border-yellow-500/50 hover:shadow-md hover:bg-yellow-500/5' 
                              : 'border-gray-200 hover:border-yellow-300 hover:shadow-md hover:bg-yellow-50/30'
                        }`}
                        onClick={() => setActiveUser(type.key)}
                      >
                        <div className="flex items-center space-x-4">
                          <div className={`p-3 rounded-full ${
                            activeUser === type.key 
                              ? darkMode 
                                ? 'bg-yellow-500/20 text-yellow-400' 
                                : 'bg-yellow-100 text-yellow-600'
                              : darkMode 
                                ? 'bg-gray-700 text-gray-300 group-hover:bg-yellow-500/20 group-hover:text-yellow-400 transition-colors duration-300' 
                                : 'bg-gray-100 text-gray-600 group-hover:bg-yellow-100 group-hover:text-yellow-600 transition-colors duration-300'
                          }`}>
                            {type.icon}
                          </div>
                          <div>
                            <h4 className="text-sm font-medium">
                              {type.label}
                            </h4>
                            <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                              {type.description}
                            </p>
                          </div>
                        </div>
                        {activeUser === type.key ? (
                          <Check size={18} className={darkMode ? 'text-yellow-400' : 'text-yellow-500'} />
                        ) : (
                          <div className={`w-5 h-5 rounded-full border-2 transition-colors duration-300 ${
                            darkMode 
                              ? 'border-gray-600 group-hover:border-yellow-500/50' 
                              : 'border-gray-200 group-hover:border-yellow-300'
                          }`}></div>
                        )}
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => enterAs(activeUser)}
                    disabled={!activeUser}
                    className={`mt-8 w-full py-3 rounded-lg font-medium flex items-center justify-center space-x-2 transition-all duration-300 ${
                      activeUser
                        ? darkMode 
                          ? 'bg-yellow-500 text-gray-900 hover:bg-yellow-600 shadow-md hover:shadow-lg' 
                          : 'bg-yellow-400 text-white hover:bg-yellow-500 shadow-md hover:shadow-lg'
                        : darkMode 
                          ? 'bg-gray-700 text-gray-500 cursor-not-allowed' 
                          : 'bg-gray-100 text-gray-400 cursor-not-allowed'
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
        <section className={`py-24 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
              <div className="lg:w-1/2">
                <div className="relative">
                  {/* Main image with better styling */}
                  <div className="relative w-full h-96 md:h-[500px] rounded-2xl shadow-xl overflow-hidden transform transition-all duration-500 hover:scale-[1.02]">
                    <img
                      src={hero2}
                      alt="Educational collaboration platform"
                      className="w-full h-full object-cover"
                    />

                    {/* Improved overlay elements */}
                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-transparent"></div>

                    {/* Floating UI elements on top of the image */}
                    <div className={`absolute top-8 left-8 w-3/4 h-12 backdrop-blur-sm rounded-lg shadow-md ${
                      darkMode ? 'bg-gray-800/80' : 'bg-white/80'
                    }`}></div>
                    <div className={`absolute bottom-8 right-8 w-24 h-24 rounded-xl flex items-center justify-center shadow-md ${
                      darkMode ? 'bg-yellow-500/20' : 'bg-yellow-100'
                    }`}>
                      <div className={`w-12 h-12 rounded-md ${
                        darkMode ? 'bg-yellow-500' : 'bg-yellow-400'
                      }`}></div>
                    </div>
                  </div>

                  {/* Decorative elements */}
                  <div className={`absolute -z-10 -bottom-8 -left-8 w-64 h-64 rounded-full ${
                    darkMode ? 'bg-yellow-500/10' : 'bg-yellow-50'
                  }`}></div>
                  <div className={`absolute -z-10 top-1/4 right-0 w-12 h-12 rounded-md transform translate-x-6 ${
                    darkMode ? 'bg-gray-700' : 'bg-gray-200'
                  }`}></div>
                </div>
              </div>

              <div className="lg:w-1/2 space-y-8">
                <h2 className="text-4xl font-bold leading-tight">
                  Designed for{" "}
                  <span className={darkMode ? 'text-yellow-400' : 'text-yellow-500'}>productivity</span> and{" "}
                  <span className={darkMode ? 'text-yellow-400' : 'text-yellow-500'}>collaboration</span>
                </h2>
                <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  NovaSuite provides intuitive tools that make educational
                  management simple and effective for administrators, teachers, students, 
                  and employers alike.
                </p>

                <div className="space-y-6">
                  {[
                    {
                      title: "Seamless Integration",
                      description: "Connect all your educational tools and workflows in one centralized platform with easy-to-use APIs and plugins."
                    },
                    {
                      title: "Real-time Analytics",
                      description: "Make data-driven decisions with comprehensive insights, customizable dashboards, and automated reports."
                    },
                    {
                      title: "Personalized Experience",
                      description: "Tailored workflows for each role in your educational ecosystem with custom permissions and views."
                    }
                  ].map((feature, index) => (
                    <div key={index} className="flex items-start space-x-4 group">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-colors duration-300 ${
                        darkMode 
                          ? 'bg-yellow-500/20 group-hover:bg-yellow-500/30' 
                          : 'bg-yellow-100 group-hover:bg-yellow-200'
                      }`}>
                        <Check className={darkMode ? 'text-yellow-400' : 'text-yellow-600'} size={20} />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-1">
                          {feature.title}
                        </h3>
                        <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-4">
                  <button className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 shadow-md hover:shadow-lg ${
                    darkMode 
                      ? 'bg-yellow-500 hover:bg-yellow-600 text-gray-900 hover:shadow-yellow-500/30' 
                      : 'bg-yellow-400 hover:bg-yellow-500 text-white hover:shadow-yellow-200/50'
                  }`}>
                    Learn more about our features
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Additional section: Testimonials */}
        <section className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">What Our Users Say</h2>
              <p className={`text-xl max-w-3xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                See how NovaSuite is transforming educational experiences across institutions worldwide.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  quote: "NovaSuite has completely transformed how we manage our educational programs. The interface is intuitive and our team loves using it.",
                  author: "Sarah Johnson",
                  position: "Academic Director, Oxford College"
                },
                {
                  quote: "As a teacher, I've found NovaSuite incredibly helpful for tracking student progress and creating engaging course content.",
                  author: "Michael Chen",
                  position: "Science Teacher, Lincoln High School"
                },
                {
                  quote: "The analytics provided by NovaSuite have been invaluable for our budget planning and resource allocation decisions.",
                  author: "Elizabeth Taylor",
                  position: "CFO, Global Learning Institute"
                }
              ].map((testimonial, index) => (
                <div 
                  key={index} 
                  className={`p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border group ${
                    darkMode 
                      ? 'bg-gray-800 border-gray-700 hover:border-yellow-500/50' 
                      : 'bg-gray-50 border-gray-100 hover:border-yellow-200'
                  }`}
                >
                  <div className={darkMode ? 'mb-4 text-yellow-400' : 'mb-4 text-yellow-500'}>
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.5 7C9.5 5.89543 8.60457 5 7.5 5H6.5C4.84315 5 3.5 6.34315 3.5 8V10C3.5 11.6569 4.84315 13 6.5 13H7.5C7.5 15.5 5.5 16.5 3.5 16.5V18.5C7.5 18.5 9.5 15.5 9.5 12V7Z" fill="currentColor"/>
                      <path d="M20.5 7C20.5 5.89543 19.6046 5 18.5 5H17.5C15.8431 5 14.5 6.34315 14.5 8V10C14.5 11.6569 15.8431 13 17.5 13H18.5C18.5 15.5 16.5 16.5 14.5 16.5V18.5C18.5 18.5 20.5 15.5 20.5 12V7Z" fill="currentColor"/>
                    </svg>
                  </div>
                  <p className={`mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{testimonial.quote}</p>
                  <div>
                    <p className={`font-semibold ${
                      darkMode 
                        ? 'group-hover:text-yellow-400' 
                        : 'group-hover:text-yellow-500'
                    } transition-colors duration-300`}>{testimonial.author}</p>
                    <p className={darkMode ? 'text-gray-400 text-sm' : 'text-gray-500 text-sm'}>{testimonial.position}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer with yellow accents */}
      <footer className={`border-t py-16 ${
        darkMode 
          ? 'bg-gray-800 border-gray-700' 
          : 'bg-gray-50 border-gray-100'
      }`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between mb-12">
            <div className="mb-8 md:mb-0 md:w-1/3">
              <h1 className={`text-2xl font-bold ${darkMode ? 'text-yellow-400' : 'text-yellow-500'}`}>NovaSuite</h1>
              <p className={`mt-3 mb-6 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                Making education better, together. Our platform empowers educational institutions with tools designed for the modern learning environment.
              </p>
              <div className="flex space-x-4">
                {["Twitter", "LinkedIn", "Facebook", "Instagram"].map((social) => (
                  <a 
                    key={social}
                    href="#" 
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                      darkMode 
                        ? 'bg-gray-700 text-gray-400 hover:bg-yellow-500/20 hover:text-yellow-400' 
                        : 'bg-gray-100 text-gray-500 hover:bg-yellow-100 hover:text-yellow-500'
                    }`}
                  >
                    <span className="sr-only">{social}</span>
                    {social === "Twitter" && (
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                      </svg>
                    )}
                    {social === "LinkedIn" && (
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                      </svg>
                    )}
                    {social === "Facebook" && (
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M22 12c0-5.523-4.477-10-10-10s-10 4.477-10 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54v-2.891h2.54v-2.203c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562v1.875h2.773l-.443 2.891h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path>
                      </svg>
                    )}
                    {social === "Instagram" && (
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
                      </svg>
                    )}
                  </a>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:w-2/3">
              <div>
                <h3 className="font-semibold mb-4">Product</h3>
                <ul className="space-y-2">
                  {["Features", "Pricing", "Use Cases", "Updates", "Security"].map((item) => (
                    <li key={item}>
                      <a 
                        href="#" 
                        className={`text-sm transition-colors duration-300 ${
                          darkMode 
                            ? 'text-gray-400 hover:text-yellow-400' 
                            : 'text-gray-500 hover:text-yellow-500'
                        }`}
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-4">Resources</h3>
                <ul className="space-y-2">
                  {["Documentation", "Guides", "API", "Community", "Blog"].map((item) => (
                    <li key={item}>
                      <a 
                        href="#" 
                        className={`text-sm transition-colors duration-300 ${
                          darkMode 
                            ? 'text-gray-400 hover:text-yellow-400' 
                            : 'text-gray-500 hover:text-yellow-500'
                        }`}
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-4">Company</h3>
                <ul className="space-y-2">
                  {["About Us", "Careers", "Contact", "Press", "Partners"].map((item) => (
                    <li key={item}>
                      <a 
                        href="#" 
                        className={`text-sm transition-colors duration-300 ${
                          darkMode 
                            ? 'text-gray-400 hover:text-yellow-400' 
                            : 'text-gray-500 hover:text-yellow-500'
                        }`}
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          
          {/* Bottom footer with copyright */}
          <div className={`pt-8 mt-8 border-t flex flex-col md:flex-row justify-between items-center ${
            darkMode ? 'border-gray-700' : 'border-gray-200'
          }`}>
            <p className={darkMode ? 'text-gray-400 text-sm' : 'text-gray-500 text-sm'}>
              &copy; {new Date().getFullYear()} NovaSuite Learning Systems. All rights reserved.
            </p>
            
            <div className="flex mt-4 md:mt-0">
              {["Privacy Policy", "Terms of Service", "Cookie Settings", "Accessibility"].map((item, index) => (
                <React.Fragment key={item}>
                  <a 
                    href="#" 
                    className={`text-sm transition-colors duration-300 ${
                      darkMode 
                        ? 'text-gray-400 hover:text-yellow-400' 
                        : 'text-gray-500 hover:text-yellow-500'
                    }`}
                  >
                    {item}
                  </a>
                  {index < 3 && (
                    <span className={`mx-2 ${darkMode ? 'text-gray-600' : 'text-gray-300'}`}>•</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}