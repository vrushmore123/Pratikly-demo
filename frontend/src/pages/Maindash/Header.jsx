import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiMoon, FiSun, FiGlobe } from 'react-icons/fi';
import { IoIosArrowDown } from 'react-icons/io';
import { RiLoginCircleLine } from 'react-icons/ri';
import { MdOutlineSpaceDashboard } from 'react-icons/md';
import logo from '../../assets/logoheader.png';
import { useLanguage } from '../../Context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../Context/ThemeContext';
import Contact from '../Contact';

const Header = () => {
  const [showProducts, setShowProducts] = useState(false);
  
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, changeLanguage, toggleLanguage } = useLanguage();
  const { darkMode, toggleDarkMode } = useTheme();

  // Add scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Translations
  const translations = {
    en: {
      products: 'Products',
      lms: 'Learning Platform',
      liaPlatform: 'Internship Hub',
      about: 'About Us',
      contact: 'Contact',
      demo: 'Get a Demo',
      login: 'Login',
      lightMode: 'Light Mode',
      darkMode: 'Dark Mode'
    },
    sv: {
      products: 'Produkter',
      lms: 'Lärplattform',
      liaPlatform: 'Praktikplats',
      about: 'Om oss',
      contact: 'Kontakt',
      demo: 'Få en demo',
      login: 'inloggning',
      lightMode: 'Ljust läge',
      darkMode: 'Mörkt läge'
    }
  };


  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        darkMode ? 'bg-black/90 text-white' : 'bg-white/90 text-[#0d5550]'
      } ${
        scrolled ? 'backdrop-blur-md shadow-lg' : 'backdrop-blur-sm'
      }`}
      style={{ fontFamily: '"Helvetica Neue", sans-serif' }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[1, 2, 3].map((i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full filter blur-xl opacity-10 ${
              darkMode ? 'bg-purple-400' : 'bg-[#0b750b]'
            }`}
            style={{
              width: `${100 + i * 50}px`,
              height: `${100 + i * 50}px`,
              top: `${-20 + i * 10}%`,
              left: `${i * 30}%`,
            }}
            animate={{
              y: [0, 15, 0],
              x: [0, 5, 0],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 5 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Glowing border effect - now circular on edges */}
      <div className={`absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent rounded-full ${
        scrolled ? 'opacity-100' : 'opacity-0'
      } transition-opacity duration-300`}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          
      
         {/* Logo with animation - now circular */}
<motion.div 
  className="flex-shrink-0"
  initial={{ opacity: 0, x: -20 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.5 }}
>
  <Link to="/" className="flex items-center">
    <motion.div 
      className={`rounded-full p-3 shadow-lg flex items-center justify-center bg-white`}
      style={{ 
        boxShadow: darkMode 
          ? '0 4px 12px rgba(255, 255, 255, 0.1)' 
          : '0 4px 12px rgba(0, 0, 0, 0.1)'
      }}
      whileHover={{ 
        scale: 1.05,
        
        boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.2)'
      }}
      transition={{ type: 'spring', stiffness: 400, damping: 10 }}
    >
      <img
        src={logo}
        alt="Praktikly Logo"
        className="h-9 w-auto" // Increased from h-8 to h-10
      />
    </motion.div>
    <motion.span 
      className={`ml-3 text-xl ${darkMode ? 'text-white' : 'text-[#0d5550]'}`}
      style={{ fontWeight: 700 }}
    >
      
    </motion.span>
  </Link>
</motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8" style={{ fontWeight: 500 }}>
            {/* Products Dropdown */}
            <motion.div
              className="relative"
              onMouseEnter={() => setShowProducts(true)}
              onMouseLeave={() => setShowProducts(false)}
              whileHover={{ scale: 1.05 }}
            >
              <button className={`flex items-center space-x-1 font-medium focus:outline-none ${
                darkMode ? 'hover:text-purple-300' : 'hover:text-[#0b7077]'
              }`} style={{ fontWeight: 500 }}>
                <span>{translations[language].products}</span>
                <motion.div
                  animate={{ rotate: showProducts ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <IoIosArrowDown size={16} />
                </motion.div>
              </button>

              <AnimatePresence>
                {showProducts && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className={`absolute top-full left-0 mt-2 rounded-xl shadow-xl py-2 w-56 z-50 ${
                      darkMode ? 'bg-black border-gray-800' : 'bg-white border border-gray-100'
                    }`}
                  >
                    <Link
                      to="/lms"
                      className={`block px-4 py-3 transition-colors ${
                        darkMode 
                          ? 'text-gray-300 hover:bg-gray-900 hover:text-white' 
                          : 'text-gray-700 hover:bg-gray-50 hover:text-[#0b7077]'
                      }`}
                    >
                      <div className="flex items-center">
                        <MdOutlineSpaceDashboard className="mr-2" />
                        {translations[language].lms}
                      </div>
                    </Link>
                    <Link
                      to="/liaHUb"
                      className={`block px-4 py-3 transition-colors ${
                        darkMode 
                          ? 'text-gray-300 hover:bg-gray-900 hover:text-white' 
                          : 'text-gray-700 hover:bg-gray-50 hover:text-[#0b7077]'
                      }`}
                    >
                      <div className="flex items-center">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                        {translations[language].liaPlatform}
                      </div>
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                to="/about" 
                className={`font-medium ${
                  darkMode ? 'hover:text-purple-300' : 'hover:text-[#0b7077]'
                }`}
              >
                {translations[language].about}
              </Link>
            </motion.div>
            
            <motion.div 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                to="/contact" 
                className={`font-medium ${
                  darkMode ? 'hover:text-purple-300' : 'hover:text-[#0b7077]'
                }`}
              >
                {translations[language].contact}
              </Link>
            </motion.div>
            
            <motion.div 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                to="/form" 
                className={`font-medium ${
                  darkMode ? 'hover:text-purple-300' : 'hover:text-[#0b7077]'
                }`}
              >
                {translations[language].demo}
              </Link>
            </motion.div>
          </nav>

          {/* Right Actions */}
          <div className="hidden md:flex items-center space-x-6">
            <motion.button 
              onClick={toggleDarkMode}
              className={`p-2 rounded-full ${
                darkMode ? 'hover:bg-gray-900 text-yellow-300' : 'hover:bg-gray-100'
              }`}
              whileHover={{ scale: 1.1, rotate: 15 }}
              whileTap={{ scale: 0.9, rotate: -15 }}
              aria-label={darkMode ? translations[language].lightMode : translations[language].darkMode}
            >
              {darkMode ? <FiSun size={18} /> : <FiMoon size={18} />}
            </motion.button>
            
            <motion.div 
              className="relative group"
              whileHover={{ scale: 1.05 }}
            >
              <button 
                onClick={toggleLanguage}
                className={`flex items-center space-x-1 font-medium ${
                  darkMode ? 'hover:text-purple-300' : 'hover:text-[#0b7077]'
                }`}
              >
                <FiGlobe size={18} />
                <span>{language.toUpperCase()}</span>
                <IoIosArrowDown size={14} className="mt-0.5" />
              </button>
              <div className={`absolute right-0 mt-2 w-32 rounded-xl shadow-xl py-2 z-50 hidden group-hover:block ${
                darkMode ? 'bg-black border border-gray-800' : 'bg-white border border-gray-100'
              }`}>
                <button 
                  onClick={() => changeLanguage('en')}
                  className={`block w-full text-left px-4 py-2 transition-colors ${
                    darkMode 
                      ? 'hover:bg-gray-900' 
                      : 'hover:bg-gray-50'
                  } ${
                    language === 'en' 
                      ? (darkMode ? 'bg-gray-900' : 'bg-gray-50 font-medium text-[#0b7077]') 
                      : ''
                  }`}
                >
                  English
                </button>
                <button 
                  onClick={() => changeLanguage('sv')}
                  className={`block w-full text-left px-4 py-2 transition-colors ${
                    darkMode 
                      ? 'hover:bg-gray-900' 
                      : 'hover:bg-gray-50'
                  } ${
                    language === 'sv' 
                      ? (darkMode ? 'bg-gray-900' : 'bg-gray-50 font-medium text-[#0b7077]') 
                      : ''
                  }`}
                >
                  Svenska
                </button>
              </div>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/login"
                className={`px-5 py-2.5 rounded-full transition-all flex items-center text-white ${
                  darkMode 
                    ? 'bg-gradient-to-r from-purple-600 to-blue-700' 
                    : 'bg-gradient-to-r from-[#0d5550] to-[#0b7077]'
                }`}
                style={{ 
                  fontFamily: '"Helvetica Neue", sans-serif',
                  fontWeight: 600 
                }}
              >
                <RiLoginCircleLine className="mr-2 text-white" size={18} />
                {translations[language].login}
              </Link>
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <motion.button 
              onClick={toggleDarkMode}
              className={`p-2 rounded-full ${
                darkMode ? 'hover:bg-gray-900 text-yellow-300' : 'hover:bg-gray-100'
              }`}
              whileHover={{ scale: 1.1, rotate: 15 }}
              whileTap={{ scale: 0.9 }}
            >
              {darkMode ? <FiSun size={18} /> : <FiMoon size={18} />}
            </motion.button>
            
            <motion.button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-full focus:outline-none ${
                darkMode ? 'hover:bg-gray-900' : 'hover:bg-gray-100'
              }`}
              whileTap={{ scale: 0.9, rotate: mobileMenuOpen ? -90 : 0 }}
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
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/70 backdrop-blur-md z-40"
              onClick={() => setMobileMenuOpen(false)}
            />
            
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className={`fixed top-0 left-0 bottom-0 w-80 max-w-full z-50 ${
                darkMode ? 'bg-black' : 'bg-white'
              } shadow-2xl overflow-y-auto rounded-r-3xl`}
            >
              <div className="px-6 py-5 border-b flex items-center justify-between">
                <Link 
                  to="/" 
                  className="flex items-center" 
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <motion.div 
                    className={`rounded-full p-2 ${
                      darkMode ? 'bg-[#0b750b]' : 'bg-gradient-to-br from-[#0b750b] to-[#0d5550]'
                    }`}
                    style={{ background: `linear-gradient(135deg, #0b750b 20%, ${darkMode ? '#000000' : '#ffffff'} 20%)` }}
                    whileHover={{ rotate: 10 }}
                  >
                    <img
                      src={logo}
                      alt="Praktikly Logo"
                      className="h-8 w-auto"
                    />
                  </motion.div>
                  <span className={`ml-3 font-bold text-lg ${
                    darkMode ? 'text-white' : 'text-[#0d5550]'
                  }`} style={{ fontWeight: 700 }}>
                   
                  </span>
                </Link>
                <motion.button
                  onClick={() => setMobileMenuOpen(false)}
                  className={`p-2 rounded-full ${
                    darkMode ? 'hover:bg-gray-900' : 'hover:bg-gray-100'
                  }`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9, rotate: -90 }}
                >
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </motion.button>
              </div>
              
              <div className="px-4 py-6 space-y-2" style={{ fontWeight: 400 }}>
                {/* Mobile Products Dropdown */}
                <div className="relative">
                  <button 
                    onClick={() => setShowProducts(!showProducts)}
                    className={`w-full flex justify-between items-center px-4 py-3 rounded-full text-base ${
                      darkMode ? 'hover:bg-gray-900' : 'hover:bg-gray-50'
                    }`}
                    style={{ fontWeight: 500 }}
                  >
                    <span>{translations[language].products}</span>
                    <motion.div
                      animate={{ rotate: showProducts ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <IoIosArrowDown size={18} />
                    </motion.div>
                  </button>
                  
                  <AnimatePresence>
                    {showProducts && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className={`mt-1 mb-3 rounded-xl overflow-hidden ${
                          darkMode ? 'bg-gray-900' : 'bg-gray-50'
                        }`}
                      >
                        <Link
                          to="/lms"
                          className={`block px-6 py-3 text-base font-medium border-b ${
                            darkMode ? 'border-gray-800 hover:bg-gray-800' : 'border-gray-100 hover:bg-gray-100'
                          }`}
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          <div className="flex items-center">
                            <MdOutlineSpaceDashboard className="mr-3" />
                            {translations[language].lms}
                          </div>
                        </Link>
                        <Link
                          to="/liaHUb"
                          className={`block px-6 py-3 text-base font-medium ${
                            darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'
                          }`}
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          <div className="flex items-center">
                            <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                            </svg>
                            {translations[language].liaPlatform}
                          </div>
                        </Link>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                
                <motion.div whileHover={{ x: 5 }}>
                  <Link
                    to="/about"
                    className={`block px-4 py-3 rounded-full text-base font-medium ${
                      darkMode ? 'hover:bg-gray-900' : 'hover:bg-gray-50'
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {translations[language].about}
                  </Link>
                </motion.div>
                
                <motion.div whileHover={{ x: 5 }}>
                  <Link
                    to="/contact"
                    className={`block px-4 py-3 rounded-full text-base font-medium ${
                      darkMode ? 'hover:bg-gray-900' : 'hover:bg-gray-50'
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {translations[language].contact}
                  </Link>
                </motion.div>
                
                <motion.div whileHover={{ x: 5 }}>
                  <Link
                    to="/form"
                    className={`block px-4 py-3 rounded-full text-base font-medium ${
                      darkMode ? 'hover:bg-gray-900' : 'hover:bg-gray-50'
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {translations[language].demo}
                  </Link>
                </motion.div>
              </div>
              
              {/* Mobile bottom actions */}
              <div className="absolute bottom-0 left-0 right-0 border-t p-6">
                <div className="mb-6">
                  <p className={`px-2 text-sm mb-3 ${
                    darkMode ? 'text-gray-400' : 'text-gray-500'
                  }`} style={{ fontWeight: 500 }}>
                    {language === 'en' ? 'Language' : 'Språk'}
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    <motion.button
                      whileTap={{ scale: 0.95 }}
                      onClick={() => changeLanguage('en')}
                      className={`px-4 py-2.5 rounded-full text-center ${
                        language === 'en' 
                          ? (darkMode 
                              ? 'bg-purple-600 text-white' 
                              : 'bg-[#0d5550] text-white font-medium') 
                          : (darkMode 
                              ? 'text-gray-300 hover:bg-gray-900' 
                              : 'text-gray-700 hover:bg-gray-100')
                      }`}
                    >
                      English
                    </motion.button>
                    <motion.button
                      whileTap={{ scale: 0.95 }}
                      onClick={() => changeLanguage('sv')}
                      className={`px-4 py-2.5 rounded-full text-center ${
                        language === 'sv' 
                          ? (darkMode 
                              ? 'bg-purple-600 text-white' 
                              : 'bg-[#0d5550] text-white font-medium') 
                          : (darkMode 
                              ? 'text-gray-300 hover:bg-gray-900' 
                              : 'text-gray-700 hover:bg-gray-100')
                      }`}
                    >
                      Svenska
                    </motion.button>
                  </div>
                </div>
                
                <motion.div
                  whileTap={{ scale: 0.98 }}
                  whileHover={{ y: -2 }}
                >
                  <Link
                    to="/login"
                    className={`block w-full px-4 py-3 rounded-full font-medium text-white text-center ${
                      darkMode 
                        ? 'bg-gradient-to-r from-purple-600 to-blue-700 hover:from-purple-700 hover:to-blue-800' 
                        : 'bg-gradient-to-r from-[#0d5550] to-[#0b7077] hover:from-[#0b7077] hover:to-[#0a5a6e]'
                    } flex items-center justify-center`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <RiLoginCircleLine className="mr-2" size={18} />
                    {translations[language].login}
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;