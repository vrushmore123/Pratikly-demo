import React from 'react';
import { FaCheckSquare, FaPhoneAlt, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { FiArrowUpRight } from 'react-icons/fi';
import logo from '../../assets/logoPraktikly.png';
import { useLanguage } from '../../Context/LanguageContext';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 pt-20 pb-12 px-6 sm:px-8 lg:px-10">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-16 border-b border-gray-800">
          {/* Logo and Description */}
          <div className="md:col-span-4 lg:col-span-3">
            <div className="mb-6">
              <img 
                src={logo} 
                alt="Company Logo" 
                className="h-10 w-auto" 
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://via.placeholder.com/150x40?text=LOGO';
                }}
              />
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              {t.description}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaLinkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaTwitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaInstagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaYoutube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Links Columns */}
          <div className="md:col-span-8 lg:col-span-9 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {/* Product */}
            <div>
              <h3 className="text-white font-semibold text-lg mb-4">{t.product}</h3>
              <ul className="space-y-3">
                <li><a href="#" className="flex items-center text-gray-400 hover:text-white transition-colors group">{t.features} <FiArrowUpRight className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity" /></a></li>
                <li><a href="#" className="flex items-center text-gray-400 hover:text-white transition-colors group">{t.pricing} <FiArrowUpRight className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity" /></a></li>
                <li><a href="#" className="flex items-center text-gray-400 hover:text-white transition-colors group">{t.integrations} <FiArrowUpRight className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity" /></a></li>
                <li><a href="#" className="flex items-center text-gray-400 hover:text-white transition-colors group">{t.updates} <FiArrowUpRight className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity" /></a></li>
              </ul>
            </div>

            {/* Solutions */}
            <div>
              <h3 className="text-white font-semibold text-lg mb-4">{t.solutions}</h3>
              <ul className="space-y-3">
                <li><a href="#" className="flex items-center text-gray-400 hover:text-white transition-colors group">{t.forSchools} <FiArrowUpRight className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity" /></a></li>
                <li><a href="#" className="flex items-center text-gray-400 hover:text-white transition-colors group">{t.forUniversities} <FiArrowUpRight className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity" /></a></li>
                <li><a href="#" className="flex items-center text-gray-400 hover:text-white transition-colors group">{t.forTeachers} <FiArrowUpRight className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity" /></a></li>
                <li><a href="#" className="flex items-center text-gray-400 hover:text-white transition-colors group">{t.forStudents} <FiArrowUpRight className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity" /></a></li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-white font-semibold text-lg mb-4">{t.resources}</h3>
              <ul className="space-y-3">
                <li><a href="#" className="flex items-center text-gray-400 hover:text-white transition-colors group">{t.blog} <FiArrowUpRight className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity" /></a></li>
                <li><a href="#" className="flex items-center text-gray-400 hover:text-white transition-colors group">{t.guides} <FiArrowUpRight className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity" /></a></li>
                <li><a href="#" className="flex items-center text-gray-400 hover:text-white transition-colors group">{t.webinars} <FiArrowUpRight className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity" /></a></li>
                <li><a href="#" className="flex items-center text-gray-400 hover:text-white transition-colors group">{t.helpCenter} <FiArrowUpRight className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity" /></a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-white font-semibold text-lg mb-4">{t.contact}</h3>
              <ul className="space-y-3">
                <li><a href="#" className="flex items-center text-gray-400 hover:text-white transition-colors group">{t.getDemo} <FiArrowUpRight className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity" /></a></li>
                <li><a href="#" className="flex items-center text-gray-400 hover:text-white transition-colors group">{t.contactSales} <FiArrowUpRight className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity" /></a></li>
                <li className="flex items-start">
                  <HiOutlineMail className="mt-1 mr-2 flex-shrink-0" />
                  <a href="mailto:info@company.com" className="text-gray-400 hover:text-white transition-colors">info@company.com</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-10 flex flex-col md:flex-row justify-between items-center">
          {/* Copyright and Legal */}
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-gray-500 mb-6 md:mb-0">
            <span>{t.copyright}</span>
            <div className="hidden sm:block w-px h-4 bg-gray-700"></div>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white transition-colors">{t.privacy}</a>
              <a href="#" className="hover:text-white transition-colors">{t.terms}</a>
              <a href="#" className="hover:text-white transition-colors">{t.cookies}</a>
            </div>
          </div>

          {/* Language Selector */}
          <div className="flex items-center space-x-4">
            <div className="relative">
              <select 
                value={language}
                onChange={(e) => changeLanguage(e.target.value)}
                className="appearance-none bg-gray-800 border border-gray-700 rounded-md py-2 pl-3 pr-8 text-sm focus:outline-none focus:ring-1 focus:ring-emerald-500"
              >
                <option value="en">English</option>
                <option value="sv">Svenska</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
          <button className="text-sm px-3 py-2 bg-white border border-gray-300 rounded">
            🌙 / 🌞 Toggle Theme
          </button>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="max-w-7xl mx-auto mt-6 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-500 py-6">
        <div className="flex space-x-4 mb-2 sm:mb-0">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>
          <a href="#">Cookie Policy</a>
        </div>
        <p>© {currentYear} Company Name. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
