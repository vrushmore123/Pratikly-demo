import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const useCases = [
  {
    id: 1,
    title: "Streamlined Learning Management",
    titleHighlight: "Learning",
    description: "Manage courses, track assignments, grade submissions, and communicate seamlessly between students and teachers.",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
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
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
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
    image: "https://images.unsplash.com/photo-1575505586569-646b2ca898fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
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
    image: "https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    colorClass: "from-orange-500 to-orange-700",
    bgClass: "bg-orange-50",
    iconBgClass: "bg-orange-100",
    borderColorClass: "border-orange-300"
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
    <section className="px-4 py-16 sm:px-8 lg:px-16 xl:px-20 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
      {/* Subtle animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-20 -left-20 w-80 h-80 rounded-full bg-emerald-100/20 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 -right-20 w-96 h-96 rounded-full bg-amber-100/20 blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
          <div className="absolute top-0 left-1/4 w-2 h-2 bg-emerald-400/60 rounded-full animate-ping" style={{animationDuration: '3s'}}></div>
          <div className="absolute top-1/4 right-1/3 w-3 h-3 bg-amber-400/60 rounded-full animate-ping" style={{animationDuration: '4s', animationDelay: '1s'}}></div>
          <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-blue-400/60 rounded-full animate-ping" style={{animationDuration: '2.5s', animationDelay: '0.5s'}}></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="flex flex-col">
          {/* Section Header with improved spacing */}
          <div className="text-center pb-12 sm:pb-16 lg:pb-20 relative">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 relative inline-block">
              <span className="text-gray-900">One Platform. </span>
              <span className="text-emerald-600 relative">
                Multiple Solutions.
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-amber-300 to-emerald-500 transform origin-left animate-pulse"></span>
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Empower your institution with <span className="font-medium text-emerald-600">powerful tools</span> for learning, internships, and job success.
            </p>
          </div>

          {/* Use Cases Grid - 2 columns per row layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {useCases.map((useCase) => (
              <div 
                key={useCase.id}
                className="relative group transition-all duration-500 ease-out transform hover:-translate-y-2"
                onMouseEnter={() => setActiveCard(useCase.id)}
                onMouseLeave={() => setActiveCard(null)}
              >
                {/* Card Glow Effect - Using card's own color */}
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${useCase.colorClass} rounded-2xl opacity-0 group-hover:opacity-100 blur transition-all duration-500 group-hover:blur-md ${activeCard === useCase.id ? 'animate-pulse' : ''}`} />
                
                {/* Main Card */}
                <div
                  className="relative bg-white rounded-2xl overflow-hidden h-full border border-gray-100 shadow-lg group-hover:shadow-2xl transition-all duration-500 z-10"
                >
                  <div className="flex flex-col h-full">
                    {/* Content side */}
                    <div className="p-8 lg:p-10 flex flex-col justify-between relative">
                      {/* Top section with icon and number */}
                      <div>
                        <div className="flex items-center gap-6 mb-6">
                          {/* Icon Container */}
                          <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${useCase.iconBgClass} transition-all duration-500 group-hover:shadow-lg relative overflow-hidden`}>
                            <div className={`absolute inset-0 bg-gradient-to-br ${useCase.colorClass} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                            <div className="text-gray-800 transition-transform duration-500 group-hover:scale-110">
                              {getIconComponent(useCase.titleHighlight)}
                            </div>
                          </div>
                          
                          {/* Number indicator */}
                          <div className={`relative rounded-full w-12 h-12 flex justify-center items-center text-xl font-bold ${useCase.bgClass} text-gray-800`}>
                            <div className={`absolute inset-0 rounded-full border-2 ${useCase.borderColorClass} opacity-70 group-hover:opacity-100 transition-opacity duration-500`}></div>
                            <span>{useCase.id}</span>
                          </div>
                        </div>
                        
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
                        <p className="text-base lg:text-lg text-gray-600 mb-6">
                          {useCase.description}
                        </p>
                        
                        {/* Feature list - Consistent styling */}
                        <ul className="space-y-3">
                          <li className="flex items-center text-sm text-gray-600">
                            <span className={`w-5 h-5 rounded-full flex items-center justify-center mr-3 ${useCase.bgClass}`}>
                              <svg className={`w-3 h-3 text-${useCase.colorClass.split('-')[1]}-600`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                              </svg>
                            </span>
                            Cloud-based solution
                          </li>
                          <li className="flex items-center text-sm text-gray-600">
                            <span className={`w-5 h-5 rounded-full flex items-center justify-center mr-3 ${useCase.bgClass}`}>
                              <svg className={`w-3 h-3 text-${useCase.colorClass.split('-')[1]}-600`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                              </svg>
                            </span>
                            24/7 customer support
                          </li>
                        </ul>
                      </div>
                    </div>

                    {/* Image side with consistent height */}
                    <div className={`relative min-h-[240px] ${useCase.bgClass} overflow-hidden`}>
                      {/* Rating badge - Consistently positioned */}
                      <div className="absolute top-6 left-6 z-20">
              
                      </div>
                    
                      {/* Image with overlay */}
                      <div className="absolute inset-0 transform group-hover:scale-105 transition-transform duration-700 ease-out">
                        <img 
                          src={useCase.image}
                          alt={`Illustration for ${useCase.title}`}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                        {/* Gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-70 group-hover:opacity-50 transition-opacity duration-500"></div>
                      </div>
                      
                      {/* Demo button - Consistently positioned */}
                      <div className="absolute bottom-6 right-6 z-20">
                        <Link to="/form">
                          <div className="relative overflow-hidden">
                            <div className={`absolute inset-0 bg-gradient-to-r ${useCase.colorClass} transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500`}></div>
                            <div className="px-5 py-3 bg-white rounded-lg shadow-lg flex items-center space-x-2 relative z-10 group-hover:text-emerald-800 transition-colors duration-500">
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
          
    
        </div>
      </div>
    </section>
  );
};

export default UseCases;