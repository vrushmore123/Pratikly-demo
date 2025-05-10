import React, { useState } from 'react';
import {
  Notebook,
  Building2,
  Briefcase,
  CloudCog,
  ArrowRight,
  ChevronRight,
  BarChart3,
  Users,
  LineChart,
  Calendar,
  FileText,
  MessageSquare,
  GraduationCap,
  Handshake,
  UserCheck,
  FileCode,
  Award,
  Clock,
  BookOpen,
  Zap,
  Database,
  Mail,
  Bookmark,
  Search,
  LayoutGrid
} from 'lucide-react';

const Experience = () => {
  const [activeTab, setActiveTab] = useState('lms');
  const [hoveredTab, setHoveredTab] = useState(null);

  const tabs = [
    {
      id: 'lms',
      title: 'Learning Management System',
      icon: <Notebook size={24} />,
      features: [
        { text: 'Digital course administration', icon: <FileText size={16} /> },
        { text: 'Scheduling and calendars', icon: <Calendar size={16} /> },
        { text: 'Assignment tracking and submissions', icon: <BookOpen size={16} /> },
        { text: 'Grading and feedback', icon: <GraduationCap size={16} /> },
        { text: 'Communication between teachers and students', icon: <MessageSquare size={16} /> }
      ],
      stats: 'Used by 85% of institutions',
      cta: 'Explore LMS features'
    },
    {
      id: 'internships',
      title: 'Internship Services',
      icon: <Building2 size={24} />,
      features: [
        { text: 'Matching students with companies', icon: <Handshake size={16} /> },
        { text: 'Automated internship workflows', icon: <Zap size={16} /> },
        { text: 'Employer profiles and verification', icon: <UserCheck size={16} /> },
        { text: 'Follow-up and evaluation', icon: <Award size={16} /> }
      ],
      stats: '500+ partner companies',
      cta: 'Learn about internships'
    },
    {
      id: 'jobs',
      title: 'Job Placement',
      icon: <Briefcase size={24} />,
      features: [
        { text: 'Job postings directly in the system', icon: <Search size={16} /> },
        { text: 'Career coaching and CV support', icon: <FileCode size={16} /> },
        { text: 'Integration with labor market platforms', icon: <Database size={16} /> },
        { text: 'Track student employment status', icon: <LayoutGrid size={16} /> }
      ],
      stats: '92% placement rate',
      cta: 'See job success stories'
    },
    {
      id: 'ms365',
      title: 'Microsoft 365 Integration',
      icon: <CloudCog size={24} />,
      features: [
        { text: 'Connection with Microsoft Teams', icon: <Users size={16} /> },
        { text: 'Sync with Outlook & Calendar', icon: <Mail size={16} /> },
        { text: 'Document sharing via SharePoint', icon: <Bookmark size={16} /> },
        { text: 'Improved communication & productivity', icon: <Clock size={16} /> }
      ],
      stats: 'Seamless integration',
      cta: 'View integration guide'
    }
  ];

  const benefits = [
    { text: 'Increased efficiency', icon: <BarChart3 size={16} /> },
    { text: 'Better engagement', icon: <Users size={16} /> },
    { text: 'Comprehensive analytics', icon: <LineChart size={16} /> }
  ];

  const activeTabData = tabs.find((tab) => tab.id === activeTab);

  // Using a single color (green) across all tabs
  const tabColors = {
    active: 'bg-green-700 text-white',
    hover: 'bg-green-50 text-green-700',
    icon: 'text-green-700',
    activeIcon: 'text-white',
    cardBg: 'bg-green-50',
    cardIcon: 'text-green-700',
    cardHighlight: 'bg-green-50 text-green-700',
    cardLink: 'text-green-700 hover:text-green-800',
    rightCard: 'bg-green-700'
  };

  return (
    <section className="px-4 py-16 bg-gray-50 mt-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col gap-12">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-4">
              Comprehensive Solutions
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Empowering Education with <span className="text-green-700">Smart Solutions</span>
            </h2>
            <p className="text-lg text-gray-600">
              From classrooms to careers, we streamline education, internships, and job readiness into one powerful platform.
            </p>
          </div>

          <div className="flex flex-col gap-8">
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  onMouseEnter={() => setHoveredTab(tab.id)}
                  onMouseLeave={() => setHoveredTab(null)}
                  className={`flex items-center gap-3 font-medium rounded-lg px-5 py-3 transition-all duration-200 ${
                    activeTab === tab.id
                      ? tabColors.active + ' shadow-md'
                      : hoveredTab === tab.id
                      ? tabColors.hover
                      : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  <span className={`transition-colors ${activeTab === tab.id ? tabColors.activeIcon : tabColors.icon}`}>
                    {tab.icon}
                  </span>
                  <span>{tab.title}</span>
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 rounded-lg ${tabColors.cardBg} ${tabColors.cardIcon}`}>
                    {activeTabData.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {activeTabData.title}
                  </h3>
                </div>

                <ul className="space-y-4 mb-8">
                  {activeTabData.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className={`mt-1 ${tabColors.cardIcon}`}>
                        {feature.icon}
                      </span>
                      <span className="text-gray-700">{feature.text}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-100">
                  <span className={`text-sm font-medium px-3 py-1 rounded-full ${tabColors.cardHighlight}`}>
                    {activeTabData.stats}
                  </span>
                  <a href="#" className={`flex items-center gap-2 ${tabColors.cardLink} font-medium`}>
                    {activeTabData.cta}
                    <ArrowRight size={16} />
                  </a>
                </div>
              </div>

              <div className={`${tabColors.rightCard} rounded-lg p-6 text-white`}>
                <h3 className="text-xl font-bold mb-4">Enhanced Experience</h3>
                <p className="mb-6 opacity-90">
                  Our {activeTabData.title.toLowerCase()} solution is designed to provide the best experience for both educators and students.
                </p>

                <div className="bg-green-600 rounded-lg p-5 mb-6">
                  <h4 className="font-medium mb-3">Key Benefits</h4>
                  <ul className="space-y-3">
                    {benefits.map((benefit, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <span className="bg-white/20 p-1 rounded-full">
                          {benefit.icon}
                        </span>
                        <span>{benefit.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a href="/form" className="block">
                  <button className="w-full bg-white text-green-700 font-medium py-3 px-6 rounded-md hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
                    Request a Demo
                    <ChevronRight size={16} />
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;