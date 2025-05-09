// src/components/Header.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMoon, FiSun, FiGlobe } from 'react-icons/fi';
import { IoIosArrowDown } from 'react-icons/io';
import logo from '../../assets/logoPraktikly.png';

const Header = () => {
  const [showProducts, setShowProducts] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    // You would typically add logic here to toggle dark mode on your site
  };

  return (
    <header className={` top-0 left-0 right-0 z-50 ${darkMode ? 'bg-gray-900 text-white' : 'bg-[#d5f3f9] text-[#0d5550]'} transition-colors duration-300 shadow-sm`}>
      <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center bg-[#0b7077] rounded-full p-2 shadow-md hover:shadow-lg transition-shadow duration-300">
  <Link to="/" className="flex items-center space-x-2">
    <img
      src={logo}
      alt="Praktikly Logo"
      className="h-10 w-auto"
    />
    
  </Link>
</div>


          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {/* Products Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setShowProducts(true)}
              onMouseLeave={() => setShowProducts(false)}
            >
              <button className={`flex items-center space-x-1 font-medium focus:outline-none ${darkMode ? 'hover:text-blue-300' : 'hover:text-[#0b7077]'}`}>
                <span>Products</span>
                <IoIosArrowDown size={16} className={`transition-transform ${showProducts ? 'transform rotate-180' : ''}`} />
              </button>

              {showProducts && (
                <div className={`absolute top-full left-0 mt-2 rounded-lg shadow-lg py-2 w-48 z-50 ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border'}`}>
                  <Link
                    to="/lms"
                    className={`block px-4 py-2 ${darkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-100'}`}
                  >
                    LMS
                  </Link>
                  <Link
                    to="/lia-platform"
                    className={`block px-4 py-2 ${darkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-100'}`}
                  >
                    Lia Platform
                  </Link>
                </div>
              )}
            </div>

            <Link 
              to="/about" 
              className={`font-medium ${darkMode ? 'hover:text-blue-300' : 'hover:text-[#0b7077]'}`}
            >
              About Us
            </Link>
            <Link 
              to="/contact" 
              className={`font-medium ${darkMode ? 'hover:text-blue-300' : 'hover:text-[#0b7077]'}`}
            >
              Contact
            </Link>
            <Link 
              to="/form" 
              className={`font-medium ${darkMode ? 'hover:text-blue-300' : 'hover:text-[#0b7077]'}`}
            >
              Get a Demo
            </Link>
          </nav>

          {/* Right Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button 
              onClick={toggleDarkMode}
              className={`p-2 rounded-full ${darkMode ? 'hover:bg-gray-700 text-yellow-300' : 'hover:bg-gray-100'}`}
              aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {darkMode ? <FiSun size={18} /> : <FiMoon size={18} />}
            </button>
            
            <div className="relative group">
              <button className={`flex items-center space-x-1 font-medium ${darkMode ? 'hover:text-blue-300' : 'hover:text-[#0b7077]'}`}>
                <FiGlobe size={18} />
                <span>EN</span>
                <IoIosArrowDown size={14} className="mt-0.5" />
              </button>
              <div className={`absolute right-0 mt-2 w-32 rounded-lg shadow-lg py-2 z-50 hidden group-hover:block ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                <button className={`block w-full text-left px-4 py-2 ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}>English</button>
                <button className={`block w-full text-left px-4 py-2 ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}>Español</button>
                <button className={`block w-full text-left px-4 py-2 ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}>Français</button>
              </div>
            </div>
            
            <Link
              to="/login"
              className={`px-4 py-2 rounded-md font-medium transition-colors ${darkMode ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-[#0b7077] hover:bg-[#0a5c65] text-white'}`}
            >
              Log In
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className={`md:hidden ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <div className="relative">
              <button 
                onClick={() => setShowProducts(!showProducts)}
                className={`w-full flex justify-between items-center px-3 py-2 rounded-md text-base font-medium ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}
              >
                <span>Products</span>
                <IoIosArrowDown size={16} className={`transition-transform ${showProducts ? 'transform rotate-180' : ''}`} />
              </button>
              
              {showProducts && (
                <div className="pl-4 mt-1 space-y-1">
                  <Link
                    to="/lms"
                    className={`block px-3 py-2 rounded-md text-base font-medium ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}
                  >
                    LMS
                  </Link>
                  <Link
                    to="/lia-platform"
                    className={`block px-3 py-2 rounded-md text-base font-medium ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}
                  >
                    Lia Platform
                  </Link>
                </div>
              )}
            </div>
            
            <Link
              to="/about"
              className={`block px-3 py-2 rounded-md text-base font-medium ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className={`block px-3 py-2 rounded-md text-base font-medium ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}
            >
              Contact
            </Link>
            <Link
              to="/demo"
              className={`block px-3 py-2 rounded-md text-base font-medium ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}
            >
              Get a Demo
            </Link>
            
            <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between px-3 py-2">
                <button 
                  onClick={toggleDarkMode}
                  className={`flex items-center ${darkMode ? 'text-yellow-300' : ''}`}
                >
                  {darkMode ? <FiSun size={18} className="mr-2" /> : <FiMoon size={18} className="mr-2" />}
                  {darkMode ? 'Light Mode' : 'Dark Mode'}
                </button>
                
                <Link
                  to="/login"
                  className={`px-4 py-2 rounded-md font-medium ${darkMode ? 'bg-blue-600 text-white' : 'bg-[#0b7077] text-white'}`}
                >
                  Log In
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;