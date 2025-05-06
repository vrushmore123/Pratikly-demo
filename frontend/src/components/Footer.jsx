import React from "react";
import {
  Book,
  Users,
  UserCheck,
  Briefcase,
  ChevronRight,
  Calendar,
  ArrowRight,
  Phone,
  Code,
  HelpCircle,
  Twitter,
  Linkedin,
  Facebook,
  Instagram,
} from "lucide-react";

const Footer = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-16">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-3 mb-6">
            {/* Footer Logo */}
            <svg
              className="w-10 h-10"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M20 5L30 10V30L20 35L10 30V10L20 5Z" fill="#6366F1" />
              <path d="M20 5L30 10L20 15L10 10L20 5Z" fill="#818CF8" />
              <path d="M20 15L30 10V30L20 35V15Z" fill="#4F46E5" />
              <path d="M20 15L10 10V30L20 35V15Z" fill="#6366F1" />
            </svg>
            <div>
              <h1 className="text-xl font-bold tracking-wide text-white">
                NovaSuite
              </h1>
              <p className="text-xs text-gray-400">
                Education Management Platform
              </p>
            </div>
          </div>
          <p className="text-sm text-gray-400 mb-6 max-w-sm">
            Empowering educational institutions with modern tools for seamless
            teaching, learning, and administration.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-gray-400 hover:text-white transition">
              <Twitter size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition">
              <Linkedin size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition">
              <Facebook size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition">
              <Instagram size={20} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-white font-bold mb-4">Explore</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-white transition">
                Try It Now
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                How It Helps
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Success Paths
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                User Base
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-4">For Whom</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-white transition">
                Private Teachers
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Institutes
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Corporate Trainers
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                E-Schools
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-4">Resources</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-white transition">
                Android Tool
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                iOS Version
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Developer Hub
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Support
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-gray-500 text-sm">
          © 2025 NovaSuite. All rights reserved.
        </p>
        <div className="flex gap-6 text-sm">
          <a href="#" className="text-gray-400 hover:text-white transition">
            Privacy Policy
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition">
            Terms of Service
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition">
            Cookie Policy
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
