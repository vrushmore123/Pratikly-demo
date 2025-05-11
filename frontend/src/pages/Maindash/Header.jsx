// src/components/Header.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMoon, FiSun, FiGlobe } from 'react-icons/fi';
import { IoIosArrowDown } from 'react-icons/io';
import logo from '../../assets/logoPraktikly.png';
import { useLanguage } from '../../Context/LanguageContext';

const Header = () => {
  const [showProducts, setShowProducts] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, changeLanguage, toggleLanguage } = useLanguage();

  // Translations
  const translations = {
    en: {
      products: 'Products',
      lms: 'LMS',
      liaPlatform: 'Lia Platform',
      about: 'About Us',
      contact: 'Contact',
      demo: 'Get a Demo',
      login: 'Log In',
      lightMode: 'Light Mode',
      darkMode: 'Dark Mode'
    },
    sv: {
      products: 'Produkter',
      lms: 'LMS',
      liaPlatform: 'Lia Plattform',
      about: 'Om oss',
      contact: 'Kontakt',
      demo: 'Få en demo',
      login: 'Logga in',
      lightMode: 'Ljust läge',
      darkMode: 'Mörkt läge'
    }
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <header className={`top-0 left-0 right-0 z-50 ${darkMode ? 'bg-gray-900 text-white' : 'bg-[#ffffff] text-[#0d5550]'} transition-colors duration-300 shadow-sm`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <div className="bg-[#0b750b] rounded-lg p-2 shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center">
                <img
                  src={logo}
                  alt="Praktikly Logo"
                  className="h-10 w-auto"
                />
              </div>
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
                <span>{translations[language].products}</span>
                <IoIosArrowDown size={16} className={`transition-transform ${showProducts ? 'transform rotate-180' : ''}`} />
              </button>

              {showProducts && (
                <div className={`absolute top-full left-0 mt-2 rounded-lg shadow-lg py-2 w-48 z-50 ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border'}`}>
                  <Link
                    to="/lms"
                    className={`block px-4 py-2 ${darkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-100'}`}
                  >
                    {translations[language].lms}
                  </Link>
                  <Link
                    to="/liaHUb"
                    className={`block px-4 py-2 ${darkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-100'}`}
                  >
                    {translations[language].liaPlatform}
                  </Link>
                </div>
              )}
            </div>

            <Link 
              to="/about" 
              className={`font-medium ${darkMode ? 'hover:text-blue-300' : 'hover:text-[#0b7077]'}`}
            >
              {translations[language].about}
            </Link>
            <Link 
              to="/" 
              className={`font-medium ${darkMode ? 'hover:text-blue-300' : 'hover:text-[#0b7077]'}`}
            >
              {translations[language].contact}
            </Link>
            <Link 
              to="/form" 
              className={`font-medium ${darkMode ? 'hover:text-blue-300' : 'hover:text-[#0b7077]'}`}
            >
              {translations[language].demo}
            </Link>
          </nav>

          {/* Right Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button 
              onClick={toggleDarkMode}
              className={`p-2 rounded-full ${darkMode ? 'hover:bg-gray-700 text-yellow-300' : 'hover:bg-gray-100'}`}
              aria-label={darkMode ? translations[language].lightMode : translations[language].darkMode}
            >
              {darkMode ? <FiSun size={18} /> : <FiMoon size={18} />}
            </button>
            
            <div className="relative group">
              <button 
                onClick={toggleLanguage}
                className={`flex items-center space-x-1 font-medium ${darkMode ? 'hover:text-blue-300' : 'hover:text-[#0b7077]'}`}
              >
                <FiGlobe size={18} />
                <span>{language.toUpperCase()}</span>
                <IoIosArrowDown size={14} className="mt-0.5" />
              </button>
              <div className={`absolute right-0 mt-2 w-32 rounded-lg shadow-lg py-2 z-50 hidden group-hover:block ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                <button 
                  onClick={() => changeLanguage('en')}
                  className={`block w-full text-left px-4 py-2 ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'} ${language === 'en' ? (darkMode ? 'bg-gray-700' : 'bg-gray-100') : ''}`}
                >
                  English
                </button>
                <button 
                  onClick={() => changeLanguage('sv')}
                  className={`block w-full text-left px-4 py-2 ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'} ${language === 'sv' ? (darkMode ? 'bg-gray-700' : 'bg-gray-100') : ''}`}
                >
                  Svenska
                </button>
              </div>
            </div>
            
            <Link
              to="/login"
              className={`px-4 py-2 rounded-md font-medium transition-colors ${darkMode ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-[#0d5550] hover:bg-[#0b7077] text-white'}`}
            >
              {translations[language].login}
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md focus:outline-none ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}
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

      {/* Mobile menu - Side drawer that slides from the left */}
      <div 
  className={`fixed inset-0  backdrop-blur-md z-40 md:hidden transition-opacity duration-300 ${
    mobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
  }`}
  onClick={() => setMobileMenuOpen(false)}
></div>

      
      <div 
        className={`fixed top-0 left-0 bottom-0 w-64 md:hidden z-50 transform transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } ${darkMode ? 'bg-gray-900' : 'bg-white'} shadow-xl overflow-y-auto`}
      >
        {/* Logo in mobile menu */}
        <div className="px-4 py-4 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
          <Link to="/" className="flex items-center" onClick={() => setMobileMenuOpen(false)}>
            <div className="bg-[#0b750b] rounded-lg p-1 shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center">
              <img
                src={logo}
                alt="Praktikly Logo"
                className="h-8 w-auto"
              />
            </div>
            <span className="ml-2 font-semibold text-lg">Praktikly</span>
          </Link>
          <button
            onClick={() => setMobileMenuOpen(false)}
            className={`p-2 rounded-md ${darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'}`}
          >
            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div className="px-4 py-3 space-y-1">
          {/* Mobile Products Dropdown */}
          <div className="relative">
            <button 
              onClick={() => setShowProducts(!showProducts)}
              className={`w-full flex justify-between items-center px-3 py-3 rounded-md text-base font-medium ${darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-50'}`}
            >
              <span>{translations[language].products}</span>
              <IoIosArrowDown 
                size={18} 
                className={`transition-transform duration-200 ${showProducts ? 'transform rotate-180' : ''}`} 
              />
            </button>
            
            {showProducts && (
              <div className={`mt-1 mb-2 rounded-md overflow-hidden ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
                <Link
                  to="/lms"
                  className={`block px-6 py-3 text-base font-medium border-b ${darkMode ? 'border-gray-700 hover:bg-gray-700' : 'border-gray-100 hover:bg-gray-100'}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {translations[language].lms}
                </Link>
                <Link
                  to="/liaHUb"
                  className={`block px-6 py-3 text-base font-medium ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {translations[language].liaPlatform}
                </Link>
              </div>
            )}
          </div>
          
          <Link
            to="/about"
            className={`block px-3 py-3 rounded-md text-base font-medium ${darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-50'}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            {translations[language].about}
          </Link>
          <Link
            to="/"
            className={`block px-3 py-3 rounded-md text-base font-medium ${darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-50'}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            {translations[language].contact}
          </Link>
          <Link
            to="/form"
            className={`block px-3 py-3 rounded-md text-base font-medium ${darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-50'}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            {translations[language].demo}
          </Link>
        </div>
        
        {/* Mobile bottom actions */}
        <div className="absolute bottom-0 left-0 right-0 border-t border-gray-200 dark:border-gray-700">
          {/* Language selector in mobile */}
          <div className="px-4 py-3">
            <p className="px-2 text-sm text-gray-500 dark:text-gray-400">
              {language === 'en' ? 'Language' : 'Språk'}
            </p>
            <div className="mt-2 grid grid-cols-2 gap-2">
              <button 
                onClick={() => changeLanguage('en')}
                className={`px-3 py-2 rounded-md text-center ${
                  language === 'en' 
                    ? (darkMode ? 'bg-gray-700 text-white' : 'bg-gray-100 text-[#0d5550] font-medium') 
                    : (darkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-50')
                }`}
              >
                English
              </button>
              <button 
                onClick={() => changeLanguage('sv')}
                className={`px-3 py-2 rounded-md text-center ${
                  language === 'sv' 
                    ? (darkMode ? 'bg-gray-700 text-white' : 'bg-gray-100 text-[#0d5550] font-medium') 
                    : (darkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-50')
                }`}
              >
                Svenska
              </button>
            </div>
          </div>
          
          {/* Theme toggle and login */}
          <div className="px-4 py-4 space-y-3">
            <button 
              onClick={toggleDarkMode}
              className={`flex items-center w-full px-3 py-2 rounded-md ${
                darkMode 
                  ? 'bg-gray-800 text-yellow-300' 
                  : 'bg-gray-50 text-gray-700'
              }`}
            >
              {darkMode ? <FiSun size={18} className="mr-2" /> : <FiMoon size={18} className="mr-2" />}
              {darkMode ? translations[language].lightMode : translations[language].darkMode}
            </button>
            
            <Link
              to="/login"
              className={`block w-full px-3 py-2 rounded-md font-medium text-white text-center ${
                darkMode 
                  ? 'bg-blue-600 hover:bg-blue-700' 
                  : 'bg-[#0d5550] hover:bg-[#0b7077]'
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {translations[language].login}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;