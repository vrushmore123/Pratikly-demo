// src/components/Header.jsx
import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiMoon, FiSun, FiGlobe, FiMenu, FiX } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import logo from "../../assets/logoPraktikly.png";
import { useLanguage } from "../../Context/LanguageContext";
import { useTheme } from "../../Context/ThemeProvider";
import { motion, AnimatePresence } from "framer-motion"; // You'll need to install this package

const Header = () => {
  const [showProducts, setShowProducts] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, changeLanguage } = useLanguage();
  const { darkMode, toggleDarkMode } = useTheme();
  const mobileMenuRef = useRef(null);
  const logoRef = useRef(null);

  // Handle scrolling effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const translations = {
    en: {
      products: "Products", lms: "LMS", liaPlatform: "Lia Platform",
      about: "About Us", contact: "Contact", demo: "Get Demo",
      login: "Log In", lightMode: "Light Mode", darkMode: "Dark Mode", 
      language: "Language"
    },
    sv: {
      products: "Produkter", lms: "LMS", liaPlatform: "Lia Plattform",
      about: "Om oss", contact: "Kontakt", demo: "Få demo",
      login: "Logga in", lightMode: "Ljust läge", darkMode: "Mörkt läge",
      language: "Språk"
    }
  };

  const handleLanguageChange = (lang) => {
    changeLanguage(lang);
    setMobileMenuOpen(false);
  };

  // Animation variants for menu items
  const navItemVariants = {
    hidden: { opacity: 0, y: -5 },
    visible: { opacity: 1, y: 0 }
  };

  // Dropdown animation variants
  const dropdownVariants = {
    hidden: { opacity: 0, y: -10, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1 }
  };

  return (
    <motion.header 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={` w-full z-50 ${isScrolled ? 'backdrop-blur-md bg-opacity-90' : ''} ${darkMode 
        ? `bg-gray-900 text-gray-100 ${isScrolled ? 'bg-opacity-90' : ''}` 
        : `bg-white text-gray-900 ${isScrolled ? 'bg-opacity-90' : ''}`
      } shadow-sm transition-all duration-500 font-sans`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo with Full Background */}
          <Link to="/" className="flex items-center group" ref={logoRef}>
            <div className="relative flex items-center">
              {/* Logo background container with full coverage */}
              <div className="relative p-2 rounded-lg bg-gradient-to-r from-indigo-600 to-green-400  shadow-lg">
                {/* Animated light effects */}
                <div className="absolute inset-0 rounded-lg overflow-hidden">
                  {/* Light beam animation */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-20 rotate-45 transform -translate-x-full animate-[beam_3s_ease-in-out_infinite]"></div>
                  
                  {/* Radial gradient light effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white via-transparent to-transparent opacity-25 rounded-lg"></div>
                  
                  {/* Border highlight */}
                  <div className="absolute inset-0 rounded-lg border border-white opacity-20"></div>
                </div>
              
                {/* Logo with hover zoom effect */}
                <motion.img 
                  src={logo} 
                  alt="Praktikly Logo" 
                  className="h-10 md:h-12 w-auto relative z-10"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                />
              </div>
              
              {/* Text that appears on hover */}
              
            </div>
          </Link>

          {/* Desktop Navigation */}
          <motion.nav 
            className="hidden md:flex items-center space-x-8"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
          >
            <motion.div 
              className="relative" 
              onMouseEnter={() => setShowProducts(true)} 
              onMouseLeave={() => setShowProducts(false)}
              variants={navItemVariants}
              transition={{ duration: 0.3 }}
            >
              <motion.button 
                className={`flex items-center space-x-1 font-medium ${darkMode ? "hover:text-indigo-300" : "hover:text-indigo-600"} transition-colors`}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <span className="font-sans">{translations[language].products}</span>
                <motion.div
                  animate={{ rotate: showProducts ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <IoIosArrowDown size={16} />
                </motion.div>
              </motion.button>

              <AnimatePresence>
                {showProducts && (
                  <motion.div 
                    className={`absolute top-full left-0 mt-2 rounded-lg shadow-xl py-2 w-48 z-50 ${darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"}`}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={dropdownVariants}
                    transition={{ duration: 0.3 }}
                  >
                    <Link 
                      to="/lms" 
                      className={`block px-4 py-2 ${darkMode ? "text-gray-300 hover:bg-gray-700" : "text-gray-700 hover:bg-gray-100"} font-sans transition-colors`}
                    >
                      {translations[language].lms}
                    </Link>
                    <Link 
                      to="/liaHUb" 
                      className={`block px-4 py-2 ${darkMode ? "text-gray-300 hover:bg-gray-700" : "text-gray-700 hover:bg-gray-100"} font-sans transition-colors`}
                    >
                      {translations[language].liaPlatform}
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {['about', 'contact', 'demo'].map((item) => (
              <motion.div
                key={item}
                variants={navItemVariants}
                transition={{ duration: 0.3 }}
              >
                <Link 
                  to={`/${item === 'demo' ? 'form' : item}`} 
                  className={`font-medium ${darkMode ? "hover:text-indigo-300" : "hover:text-indigo-600"} transition-colors font-sans`}
                >
                  <motion.span
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    {translations[language][item]}
                  </motion.span>
                </Link>
              </motion.div>
            ))}
          </motion.nav>

          {/* Desktop Actions */}
          <motion.div 
            className="hidden md:flex items-center space-x-6"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.3
                }
              }
            }}
          >
       

            <motion.button
              onClick={() => handleLanguageChange(language === "en" ? "sv" : "en")}
              className={`flex items-center space-x-1 font-medium ${darkMode ? "hover:text-indigo-300" : "hover:text-indigo-600"} transition-colors font-sans`}
              variants={navItemVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <FiGlobe size={20} />
              <span>{language.toUpperCase()}</span>
            </motion.button>

            <motion.div variants={navItemVariants}>
              <Link
                to="/login"
                className={`px-5 py-2.5 rounded-lg font-medium relative overflow-hidden group`}
              >
                <span className={`absolute inset-0 w-full h-full transition-all duration-300 ease-out ${darkMode ? 
                  "bg-gradient-to-r from-indigo-600 to-indigo-700 group-hover:bg-gradient-to-r group-hover:from-indigo-500 group-hover:to-purple-600" : 
                  "bg-gradient-to-r from-indigo-600 to-green-700 group-hover:bg-gradient-to-r group-hover:from-indigo-500 group-hover:to-purple-600"}`}></span>
                
                {/* Animated button shine effect */}
                <span className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-30 transition-opacity duration-300">
                  <span className="absolute inset-0 w-1/12 h-full bg-white transform -skew-x-12 group-hover:animate-shine"></span>
                </span>
                
                <span className="relative text-white font-sans">
                  {translations[language].login}
                </span>
              </Link>
            </motion.div>
          </motion.div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <motion.button
              onClick={toggleDarkMode}
              className={`p-2 rounded-full ${darkMode ? "hover:bg-gray-700 text-amber-300" : "hover:bg-gray-100 text-indigo-600"} transition-colors`}
              aria-label={darkMode ? translations[language].lightMode : translations[language].darkMode}
              whileHover={{ scale: 1.1, rotate: 15 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
            </motion.button>
            
            <motion.button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-md ${darkMode ? "hover:bg-gray-700" : "hover:bg-gray-100"} transition-colors`}
              aria-expanded={mobileMenuOpen}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            ref={mobileMenuRef}
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", damping: 20 }}
            className={`fixed inset-y-0 left-0 w-72 z-50 ${darkMode ? "bg-gray-900" : "bg-white"} shadow-xl md:hidden overflow-y-auto`}
          >
            <div className={`px-5 py-5 border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'} flex justify-between items-center`}>
              <Link to="/" className="flex items-center" onClick={() => setMobileMenuOpen(false)}>
                <div className="relative">
                  {/* Mobile logo splash animation */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full opacity-70 blur-sm animate-pulse"></div>
                  <img src={logo} alt="Logo" className="h-8 w-auto relative z-10" />
                </div>
                <span className={`ml-3 text-xl font-bold font-serif ${darkMode ? 'text-indigo-200' : 'text-indigo-800'}`}>Praktikly</span>
              </Link>
              <motion.button 
                onClick={() => setMobileMenuOpen(false)} 
                className={`p-2 ${darkMode ? "hover:bg-gray-800" : "hover:bg-gray-100"} rounded-md`}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <FiX size={24} />
              </motion.button>
            </div>

            <motion.div 
              className="px-5 py-4 space-y-2"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.07
                  }
                }
              }}
            >
              <motion.div 
                className="relative"
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 }
                }}
              >
                <motion.button
                  onClick={() => setShowProducts(!showProducts)}
                  className={`w-full flex justify-between items-center px-4 py-3 rounded-lg ${darkMode ? "hover:bg-gray-800" : "hover:bg-gray-100"} transition-colors`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="font-sans">{translations[language].products}</span>
                  <motion.div
                    animate={{ rotate: showProducts ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <IoIosArrowDown size={18} />
                  </motion.div>
                </motion.button>

                <AnimatePresence>
                  {showProducts && (
                    <motion.div 
                      className={`mt-1 mb-2 rounded-lg ${darkMode ? "bg-gray-800" : "bg-gray-100"} overflow-hidden`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Link
                        to="/lms"
                        className={`block px-6 py-3 border-b ${darkMode ? "border-gray-700 hover:bg-gray-700" : "border-gray-100 hover:bg-gray-100"} font-sans`}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {translations[language].lms}
                      </Link>
                      <Link
                        to="/liaHUb"
                        className={`block px-6 py-3 ${darkMode ? "hover:bg-gray-700" : "hover:bg-gray-100"} font-sans`}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {translations[language].liaPlatform}
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              {['about', 'contact', 'demo'].map((item) => (
                <motion.div
                  key={item}
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    visible: { opacity: 1, y: 0 }
                  }}
                >
                  <Link
                    to={`/${item === 'demo' ? 'form' : item}`}
                    className={`block px-4 py-3 rounded-lg ${darkMode ? "hover:bg-gray-800" : "hover:bg-gray-100"} transition-colors font-sans`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <motion.div
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      {translations[language][item]}
                    </motion.div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>

            <motion.div 
              className={`absolute bottom-0 left-0 right-0 border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'} p-5`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <div className="mb-5">
                <p className={`text-sm mb-2 ${darkMode ? 'text-gray-400' : 'text-gray-500'} font-sans`}>
                  {translations[language].language}
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {['en', 'sv'].map((lang) => (
                    <motion.button
                      key={lang}
                      onClick={() => handleLanguageChange(lang)}
                      className={`px-4 py-2 rounded-lg ${language === lang ? 
                        (darkMode ? "bg-indigo-600 text-white" : "bg-indigo-100 text-indigo-700 font-medium") : 
                        (darkMode ? "text-gray-300 hover:bg-gray-700" : "text-gray-700 hover:bg-gray-100")} transition-colors font-sans`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {lang === 'en' ? 'English' : 'Svenska'}
                    </motion.button>
                  ))}
                </div>
              </div>

              <motion.button
                onClick={toggleDarkMode}
                className={`w-full flex items-center justify-center px-4 py-3 rounded-lg mb-4 ${darkMode ? "bg-gray-800 text-amber-300 hover:bg-gray-700" : "bg-gray-100 text-indigo-600 hover:bg-gray-200"} transition-colors font-sans`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {darkMode ? <FiSun size={18} className="mr-2" /> : <FiMoon size={18} className="mr-2" />}
                {darkMode ? translations[language].lightMode : translations[language].darkMode}
              </motion.button>

              <Link
                to="/login"
                className="block w-full overflow-hidden rounded-lg relative"
                onClick={() => setMobileMenuOpen(false)}
              >
                <motion.div
                  className={`w-full px-4 py-3 text-center font-medium bg-gradient-to-r ${darkMode ? "from-indigo-600 to-indigo-700" : "from-indigo-600 to-indigo-700"} text-white shadow-md font-sans relative z-10`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {translations[language].login}
                </motion.div>
                
                {/* Animated button glow effect */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 opacity-0 z-0"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 0.3 }}
                  transition={{ duration: 0.3 }}
                ></motion.div>
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Global styles for animations */}
      <style jsx global>{`
        @keyframes shine {
          from {transform: translateX(-100%) skewX(-12deg);}
          to {transform: translateX(200%) skewX(-12deg);}
        }
        .animate-shine {
          animation: shine 1.5s ease infinite;
        }
      `}</style>
    </motion.header>
  );
};

export default Header;