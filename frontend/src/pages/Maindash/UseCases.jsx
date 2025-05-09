import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Using placeholder images since external URLs aren't supported
const useCases = [
  {
    id: 1,
    title: "Streamlined Learning Management",
    titleHighlight: "Learning",
    description: "Manage courses, track assignments, grade submissions, and communicate seamlessly between students and teachers.",
    colorClass: "from-emerald-400 to-emerald-600",
    bgClass: "bg-emerald-50",
    iconBgClass: "bg-emerald-100",
    borderColorClass: "border-emerald-300"
  },
  {
    id: 2,
    title: "Internship Placement System",
    titleHighlight: "Internship",
    description: "Automated workflows that connect students to verified companies with follow-ups and evaluations.",
    colorClass: "from-blue-500 to-blue-700",
    bgClass: "bg-blue-50",
    iconBgClass: "bg-blue-100",
    borderColorClass: "border-blue-300"
  },
  {
    id: 3,
    title: "Job Preparation & Placement",
    titleHighlight: "Job",
    description: "In-built job board, CV support, and tracking of student employment with integration into market platforms.",
    colorClass: "from-purple-500 to-purple-700",
    bgClass: "bg-purple-50",
    iconBgClass: "bg-purple-100",
    borderColorClass: "border-purple-300"
  },
  {
    id: 4,
    title: "Microsoft 365 Integration",
    titleHighlight: "Microsoft",
    description: "Connect Teams, Outlook, SharePoint to streamline online learning, planning, and collaboration.",
    colorClass: "from-orange-500 to-orange-700",
    bgClass: "bg-orange-50",
    iconBgClass: "bg-orange-100",
    borderColorClass: "border-orange-300",
    fullWidth: true
  }
];

// SVG Icons for each card
const CardIcons = {
  Learning: () => (
    <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none">
      <path d="M12 4.5L2 9.5L12 14.5L22 9.5L12 4.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M19 12V17.5L12 21L5 17.5V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M22 14V9.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  Internship: () => (
    <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none">
      <path d="M16 4H18C19.1046 4 20 4.89543 20 6V20C20 21.1046 19.1046 22 18 22H6C4.89543 22 4 21.1046 4 20V6C4 4.89543 4.89543 4 6 4H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 15V11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9 11H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M15 2H9C8.44772 2 8 2.44772 8 3V5C8 5.55228 8.44772 6 9 6H15C15.5523 6 16 5.55228 16 5V3C16 2.44772 15.5523 2 15 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  Job: () => (
    <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none">
      <path d="M20 7H4C2.89543 7 2 7.89543 2 9V19C2 20.1046 2.89543 21 4 21H20C21.1046 21 22 20.1046 22 19V9C22 7.89543 21.1046 7 20 7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16 21V5C16 3.89543 15.1046 3 14 3H10C8.89543 3 8 3.89543 8 5V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  Microsoft: () => (
    <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none">
      <path d="M4 4H11V11H4V4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M13 4H20V11H13V4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M4 13H11V20H4V13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M13 13H20V20H13V13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
};

const UseCases = () => {
  const [activeCard, setActiveCard] = useState(null);

  // Helper function to get icon by title highlight
  const getIconComponent = (titleHighlight) => {
    switch(titleHighlight) {
      case "Learning": return <CardIcons.Learning />;
      case "Internship": return <CardIcons.Internship />;
      case "Job": return <CardIcons.Job />;
      case "Microsoft": return <CardIcons.Microsoft />;
      default: return null;
    }
  };

  return (
    <section className="px-4 py-16 sm:px-8 lg:px-12 xl:px-16 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative">
        <div className="flex flex-col">
          {/* Section Header */}
          <div className="text-center pb-12 sm:pb-16 lg:pb-20 relative">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 relative inline-block">
              <span className="text-gray-900">One Platform. </span>
              <span className="text-emerald-600 relative">
                Multiple Solutions.
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-amber-300 to-emerald-500"></span>
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Empower your institution with <span className="font-medium text-emerald-600">powerful tools</span> for learning, internships, and job success.
            </p>
          </div>

          {/* Use Cases Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {useCases.map((useCase) => (
              <div 
                key={useCase.id}
                className={`relative group transition-all duration-500 ease-out transform hover:-translate-y-2 ${useCase.fullWidth ? 'md:col-span-2' : ''}`}
                onMouseEnter={() => setActiveCard(useCase.id)}
                onMouseLeave={() => setActiveCard(null)}
              >
                {/* Card Glow Border Effect */}
                <div className={`absolute -inset-0.5 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl opacity-0 group-hover:opacity-100 blur transition-all duration-500 group-hover:blur-md`} />
                
                {/* Main Card */}
                <div
                  className={`relative bg-white rounded-2xl overflow-hidden h-full border border-gray-200/80 shadow-md group-hover:shadow-2xl transition-all duration-500 z-10`}
                >
                  <div className={`flex ${useCase.fullWidth ? 'flex-col lg:flex-row' : 'flex-col'} h-full`}>
                    {/* Text Content */}
                    <div className={`p-8 lg:p-10 ${useCase.fullWidth ? 'lg:w-1/2' : ''} relative overflow-hidden`}>
                      <div className="flex items-center mb-8 relative">
                        {/* Icon Container */}
                        <div className={`w-16 h-16 mr-5 rounded-2xl flex items-center justify-center ${useCase.iconBgClass} transition-all duration-500 group-hover:shadow-lg relative overflow-hidden`}>
                          <div className="text-gray-800 transition-transform duration-500 group-hover:scale-110 relative z-10">
                            {getIconComponent(useCase.titleHighlight)}
                          </div>
                        </div>
                        
                        {/* Number indicator */}
                        <div className={`relative rounded-full w-12 h-12 flex justify-center items-center text-xl font-bold ${useCase.bgClass} text-gray-800`}>
                          <div className={`absolute inset-0 rounded-full border-2 ${useCase.borderColorClass} opacity-50 group-hover:opacity-100 transition-opacity duration-500`}></div>
                          <span className="relative z-10">{useCase.id}</span>
                        </div>
                      </div>
                      
                      <div className="max-w-[500px] relative">
                        {/* Title with highlight */}
                        <h3 className="text-2xl lg:text-3xl font-bold leading-snug mb-4 text-gray-900">
                          {useCase.title.split(useCase.titleHighlight)[0]}
                          <span className={`relative text-transparent bg-clip-text bg-gradient-to-r ${useCase.colorClass}`}>
                            {useCase.titleHighlight}
                            <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r ${useCase.colorClass} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out`}></span>
                          </span>
                          {useCase.title.split(useCase.titleHighlight)[1]}
                        </h3>
                        
                        {/* Description */}
                        <p className="text-base lg:text-lg text-gray-600 transform opacity-90 group-hover:opacity-100 transition-all duration-500">
                          {useCase.description}
                        </p>
                        
                        {/* Feature list */}
                        <ul className="mt-6 space-y-2">
                          <li className="flex items-center text-sm text-gray-600">
                            <span className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mr-2">
                              <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                              </svg>
                            </span>
                            Cloud-based solution
                          </li>
                          <li className="flex items-center text-sm text-gray-600">
                            <span className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mr-2">
                              <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                              </svg>
                            </span>
                            24/7 customer support
                          </li>
                        </ul>
                      </div>
                    </div>

                    {/* Image Content */}
                    <div className={`flex-1 min-h-[300px] ${useCase.fullWidth ? 'lg:min-h-[450px]' : ''} ${useCase.bgClass} relative overflow-hidden group`}>
                      <div className="absolute inset-0 transform group-hover:scale-105 transition-transform duration-700 ease-out">
                        <img 
                          src={`/api/placeholder/800/500?text=${useCase.title.replace(/ /g, '+')}`}
                          alt={`Illustration for ${useCase.title}`}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500"></div>
                      </div>
                      
                      {/* Demo button */}
                      <div className="absolute bottom-6 right-6">
                        <Link to="/form">
                          <div className="relative overflow-hidden">
                            <div className={`absolute inset-0 bg-gradient-to-r ${useCase.colorClass} transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500`}></div>
                            <div className="px-5 py-2.5 bg-white rounded-lg shadow-lg flex items-center space-x-2 relative z-10 group-hover:text-white transition-colors duration-500">
                              <span className="font-medium">View Demo</span>
                              <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                              </svg>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Bottom CTA section */}
          <div className="mt-16 text-center">
            <div className="inline-block relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 to-emerald-500 rounded-full blur opacity-60 group-hover:opacity-100 transition duration-300"></div>
              <Link to="/contact">
                <button className="relative bg-white text-gray-800 px-8 py-4 rounded-full font-medium text-lg shadow-lg group-hover:shadow-xl transition-all duration-300">
                  Schedule a Demo Today
                  <span className="ml-2 inline-block transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCases;