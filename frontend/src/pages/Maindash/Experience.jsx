import React, { useState } from 'react';
import {
  Notebook,
  CalendarClock,
  GraduationCap,
  Briefcase,
  FileText,
  Users,
  Building2,
  Settings,
  CloudCog,
  ShieldCheck,
  LayoutDashboard,
  ChevronRight,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
const Experience = () => {
  const [activeTab, setActiveTab] = useState('lms');
  const [hoveredTab, setHoveredTab] = useState(null);

  const tabs = [
    {
      id: 'lms',
      title: 'Learning Management System',
      icon: <Notebook size={24} />,
      features: [
        'Digital course administration',
        'Scheduling and calendars',
        'Assignment tracking and submissions',
        'Grading and feedback',
        'Communication between teachers and students'
      ],
      stats: 'Used by 85% of institutions',
      cta: 'Explore LMS features'
    },
    {
      id: 'internships',
      title: 'Internship Services',
      icon: <Building2 size={24} />,
      features: [
        'Matching students with companies',
        'Automated internship workflows',
        'Employer profiles and verification',
        'Follow-up and evaluation'
      ],
      stats: '500+ partner companies',
      cta: 'Learn about internships'
    },
    {
      id: 'jobs',
      title: 'Job Placement',
      icon: <Briefcase size={24} />,
      features: [
        'Job postings directly in the system',
        'Career coaching and CV support',
        'Integration with labor market platforms',
        'Track student employment status'
      ],
      stats: '92% placement rate',
      cta: 'See job success stories'
    },
    {
      id: 'ms365',
      title: 'Microsoft 365 Integration',
      icon: <CloudCog size={24} />,
      features: [
        'Connection with Microsoft Teams',
        'Sync with Outlook & Calendar',
        'Document sharing via SharePoint',
        'Improved communication & productivity'
      ],
      stats: 'Seamless integration',
      cta: 'View integration guide'
    }
  ];

  return (
    <section className="px-4 py-16 bg-white mt-15">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-12">
          <div className="text-center max-w-4xl mx-auto">
            <span className="inline-block px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-sm font-medium mb-4">
              Comprehensive Solutions
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-green-900 mb-6">
              Empowering Education with <span className="text-orange-600">Smart Solutions</span>
            </h2>
            <p className="text-lg text-gray-600">
              From classrooms to careers, we streamline education, internships, and job readiness into one powerful platform.
            </p>
          </div>

          <div className="flex flex-col gap-8">
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  onMouseEnter={() => setHoveredTab(tab.id)}
                  onMouseLeave={() => setHoveredTab(null)}
                  className={`flex items-center gap-3 font-medium rounded-full px-6 py-3 transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-orange-600 text-white shadow-lg'
                      : hoveredTab === tab.id
                      ? 'bg-orange-100 text-orange-600'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <span className={`transition-colors ${
                    activeTab === tab.id ? 'text-white' : 'text-orange-500'
                  }`}>
                    {tab.icon}
                  </span>
                  <span>{tab.title}</span>
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {tabs.find((tab) => tab.id === activeTab) && (
                <>
                  <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`p-3 rounded-lg ${
                        activeTab === 'lms' ? 'bg-orange-100' : 
                        activeTab === 'internships' ? 'bg-blue-100' :
                        activeTab === 'jobs' ? 'bg-green-100' : 'bg-purple-100'
                      }`}>
                        {tabs.find(tab => tab.id === activeTab).icon}
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">
                        {tabs.find(tab => tab.id === activeTab).title}
                      </h3>
                    </div>
                    
                    <ul className="space-y-4 mb-8">
                      {tabs.find(tab => tab.id === activeTab).features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <span className="mt-1">
                            <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                          </span>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="flex items-center justify-between mt-8">
                      <span className="text-sm font-medium px-3 py-1 bg-gray-100 rounded-full text-gray-700">
                        {tabs.find(tab => tab.id === activeTab).stats}
                      </span>
                      <Link to="/form">
                      <button className="flex items-center gap-2 text-orange-600 hover:text-orange-700 font-medium">
                        {tabs.find(tab => tab.id === activeTab).cta}
                        <ArrowRight size={18} />
                      </button></Link>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-8 text-white">
                    <h3 className="text-2xl font-bold mb-4">Enhanced Experience</h3>
                    <p className="mb-6 opacity-90">
                      Our {tabs.find(tab => tab.id === activeTab).title.toLowerCase()} solution is designed to provide the best experience for both educators and students.
                    </p>
                    
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-6">
                      <h4 className="font-medium mb-3">Key Benefits</h4>
                      <ul className="space-y-3">
                        <li className="flex items-center gap-3">
                          <span className="bg-white/20 p-1 rounded-full">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                          </span>
                          <span>Increased efficiency</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <span className="bg-white/20 p-1 rounded-full">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                          </span>
                          <span>Better engagement</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <span className="bg-white/20 p-1 rounded-full">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                          </span>
                          <span>Comprehensive analytics</span>
                        </li>
                      </ul>
                    </div>
                    <Link to="/form">
                    <button className="w-full bg-white text-orange-600 font-medium py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors flex items-center justify-center gap-2">
                      Request a Demo
                      <ChevronRight size={18} />
                    </button></Link>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;