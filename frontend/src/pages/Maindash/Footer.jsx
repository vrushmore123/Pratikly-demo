import React from 'react';
import { FaCheckSquare, FaPhoneAlt, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { useLanguage } from '../../Context/LanguageContext';

const Footer = () => {
  const { language, changeLanguage } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 text-gray-800 pt-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 border-b pb-10">
        {/* Company Info */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Company Name</h3>
          <p className="text-sm leading-relaxed mb-2">
            Your go-to platform for modern digital solutions.<br />
            Empowering businesses with innovative technology.<br />
            Trusted by clients across multiple industries.
          </p>
          <p className="text-sm mt-2">Org.nr: 123456-7890</p>
          <div className="flex items-center mt-2 text-green-600">
            <FaCheckSquare className="mr-1" /> GDPR Compliant
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Navigation</h3>
          <ul className="text-sm space-y-2">
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Products</a></li>
            <li><a href="#">Careers</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Contact</h3>
          <button className="bg-black text-white text-sm px-4 py-2 rounded mb-3">Get a Demo</button>
          <ul className="text-sm space-y-2">
            <li className="flex items-center">
              <HiOutlineMail className="mr-2" /> info@company.com
            </li>
            <li className="flex items-center">
              <FaPhoneAlt className="mr-2" /> +46 70 123 4567
            </li>
            <li className="flex items-center">
              <FaLinkedin className="mr-2" /> LinkedIn
            </li>
          </ul>
        </div>

        {/* Preferences */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Preferences</h3>
          <div className="mb-3">
            <label className="text-sm block mb-1">🌐 Language</label>
            <select
              value={language}
              onChange={(e) => changeLanguage(e.target.value)}
              className="w-full border border-gray-300 rounded px-2 py-1 text-sm"
            >
              <option value="en">English</option>
              <option value="sv">Svenska</option>
            </select>
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
